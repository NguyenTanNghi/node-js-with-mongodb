const Customer = require("../models/customer");

const createCustomerService = async (customerData) => {
    try {
        let result = await Customer.create(customerData);
        return result;
    } catch (error) {
        return null;
    }
};
module.exports = {
    createCustomerService,
};
