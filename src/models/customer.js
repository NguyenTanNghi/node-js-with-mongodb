const mongoose = require("mongoose");
const mongoose_delete = require("mongoose-delete");

const customerSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        address: String,
        phone: String,
        email: String,
        image: String,
        description: String,
    },
    {
        timestamps: true, // tự động thêm createdAt và updatedAt
    }
);
// tự động thêm các phương thức xoá mềm vào schema, overrideMethods: "all" để ghi đè tất cả các phương thức mặc định của mongoose, bao gồm find, findOne, count, etc.
customerSchema.plugin(mongoose_delete, { overrideMethods: "all" }); 

const Customer = mongoose.model("customer", customerSchema);

module.exports = Customer;
