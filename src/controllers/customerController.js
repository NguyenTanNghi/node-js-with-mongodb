const { uploadSingleFile } = require("../services/fileService");
const {
    createCustomerService,
    createArrayCustomerService,
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
        return res.status(200).json({
            EC: 0,
            data: customers,
        });
    },
};
