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
const getAllCustomerService = async (limit, page, name) => {
    try {
        let results = null;
        if (limit && page) {
            let offset = (page - 1) * limit;
            if (name) {
                results = await Customer.find({
                    name: { $regex: name, $options: "i" },
                })
                    .skip(offset)
                    .limit(limit)
                    .exec();
            } else {
                results = await Customer.find({})
                    .skip(offset)
                    .limit(limit)
                    .exec();
            }
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
