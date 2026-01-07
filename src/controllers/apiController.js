const User = require("../models/user");

const getUsersAPI = async (req, res) => {
    const listUsers = await User.find({});
    return res.status(200).json({
        errorCode: 0,
        data: listUsers,
    });
};
const postUsersAPI = async (req, res) => {
    let email = req.body.email;
    let name = req.body.myname;
    let city = req.body.city;
    const newUser = await User.create({
        email: email,
        name: name,
        city: city,
    });
    return res.status(201).json({
        errorCode: 0,
        data: newUser,
    });
};
const putUsersAPI = async (req, res) => {
    let id = req.body.id;
    let email = req.body.email;
    let name = req.body.myname;
    let city = req.body.city;
    await User.updateOne(
        {
            _id: id,
        },
        {
            email: email,
            name: name,
            city: city,
        }
    );
    return res.status(200).json({
        errorCode: 0,
        message: "User updated successfully",
    });
};
const deleteUsersAPI = async (req, res) => {
    let id = req.body.id;
    await User.deleteOne({ _id: id });
    return res.status(200).json({
        errorCode: 0,
        message: "User deleted successfully",
    });
};

module.exports = {
    getUsersAPI,
    postUsersAPI,
    putUsersAPI,
    deleteUsersAPI,
};
