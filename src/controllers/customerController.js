const { uploadSingleFile } = require("../services/fileService");
const {
    createCustomerService,
    createArrayCustomerService,
    getAllCustomerService,
    putUpdateCustomerService,
    deleteACustomerService,
    deleteArrayCustomerService,
} = require("../services/customerService");

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
        let limit = req.query.limit;
        let page = req.query.page;
        let name=req.query.name;
        let results = null;
        if (limit && page) {
            results = await getAllCustomerService(+limit, +page, name);
        } else {
            results = await getAllCustomerService();
        }
        return res.status(200).json({
            EC: 0,
            data: results,
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
    deleteACustomerAPI: async (req, res) => {
        let id = req.body.id;
        let result = await deleteACustomerService(id);
        return res.status(200).json({
            EC: 0,
            data: result,
        });
    },
    deleteArrayCustomerAPI: async (req, res) => {
        let ids = req.body.customerId; // [id1, id2, id3]
        let result = await deleteArrayCustomerService(ids);
        return res.status(200).json({
            EC: 0,
            data: result,
        });
    },
};
