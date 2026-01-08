const { uploadSingleFile } = require("../services/fileService");
const {
    createCustomerService,
    createArrayCustomerService,
    getAllCustomerService,
    putUpdateCustomerService,
} = require("../services/customerService");
const { put } = require("../routers/web");

module.exports = {
    postCreateCustomerAPI: async (req, res) => {
        let { name, address, phone, email, description } = req.body;

        let imageUrl = "";

        if (!req.files || Object.keys(req.files).length === 0) {
            //    do nothing
        } else {
            let result = await uploadSingleFile(req.files.image);
            imageUrl = result.path;
        }
        let customerData = {
            name,
            address,
            phone,
            email,
            image: imageUrl,
            description,
        };
        let customer = await createCustomerService(customerData);

        return res.status(200).json({
            EC: 0,
            data: customer,
        });
    },
    postCreateArrayCustomerAPI: async (req, res) => {
        let arrayCustomers = req.body.customers; // [{}, {}, {}]
        let customers = await createArrayCustomerService(arrayCustomers);
        if (customers) {
            return res.status(200).json({
                EC: 0,
                data: customers,
            });
        } else {
            return res.status(500).json({
                EC: -1,
                data: customers,
            });
        }
    },
    getAllCustomersAPI: async (req, res) => {
        let customers = await getAllCustomerService({});
        return res.status(200).json({
            EC: 0,
            data: customers,
        });
    },
    putUpdateCustomerAPI: async (req, res) => {
        let { id, name, address, phone, email, description } = req.body;
        let result = await putUpdateCustomerService({
            id,
            name,
            address,
            phone,
            email,
            description,
        });
        return res.status(200).json({
            EC: 0,
            data: result,
        });
    },
};
