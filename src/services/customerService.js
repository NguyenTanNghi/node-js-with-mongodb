const Customer = require("../models/customer");
const aqp = require("api-query-params");

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
const getAllCustomerService = async (limit, page, name, queryString) => {
    try {
        let results = null;
        if (limit && page) {
            let offset = (page - 1) * limit;
            const { filter } = aqp(queryString);
            delete filter.page;
            delete filter.limit;
            console.log(filter);
            results = await Customer.find(filter)
                .skip(offset)
                .limit(limit)
                .exec();
        } else {
            results = await Customer.find({});
        }
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
const deleteACustomerService = async (customerId) => {
    try {
        let result = await Customer.deleteById(customerId);
        return result;
    } catch (error) {
        return null;
    }
};
const deleteArrayCustomerService = async (customerIds) => {
    try {
        let result = await Customer.delete({ _id: { $in: customerIds } });
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
    deleteACustomerService,
    deleteArrayCustomerService,
};
