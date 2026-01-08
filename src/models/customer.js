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
customerSchema.plugin(mongoose_delete); // tự động thêm các phương thức xoá mềm vào schema

const Customer = mongoose.model("customer", customerSchema);

module.exports = Customer;
