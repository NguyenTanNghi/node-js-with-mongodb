const Customer = require("../models/customer");

const createCustomerService = async (customerData) => {
    try {
        let result = await Customer.create(customerData);
        return result;
    } catch (error) {
        return null;
    }
};
const createArrayCustomerService = async (customersArray) => {
    try {
        let result = await Customer.insertMany(customersArray);
        return result;
    } catch (error) {
        return null;
    }
};
const getAllCustomerService = async () => {
    try {
        let results = await Customer.find({});
        return results;
    } catch (error) {
        return null;
    }
};
const putUpdateCustomerService = async (customerData) => {
    try {
        let result = await Customer.updateOne(
            { _id: customerData.id },
            {
                name: customerData.name,
                address: customerData.address,
                phone: customerData.phone,
                email: customerData.email,
                description: customerData.description,
            }
        );
        return result;
    } catch (error) {
        return null;
    }
};
module.exports = {
    createCustomerService,
    createArrayCustomerService,
    getAllCustomerService,
    putUpdateCustomerService,
};
