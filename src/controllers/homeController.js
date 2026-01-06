const {
    getAllUsers,
    getUserById,
    updateUser,
    createUser,
    deleteUser,
} = require("../services/CRUDService");
const User = require("../models/user");

const getHomePage = async (req, res) => {
    const listUsers = await User.find({});
    return res.render("home", { listUsers: listUsers });
};
const getSamplePage = (req, res) => {
    res.render("sample");
};
const postCreateUser = async (req, res) => {
    let email = req.body.email;
    let name = req.body.myname;
    let city = req.body.city;

    await User.create({
        email: email,
        name: name,
        city: city,
    });
    return res.redirect("/");
};
const getCreatePage = (req, res) => {
    res.render("create");
};
const getUpdatePage = async (req, res) => {
    const userId = req.params.id;
    const user = await User.findById(userId).exec();
    res.render("edit", { user: user });
};
const postUpdateUser = async (req, res) => {
    let id = req.body.id;
    let email = req.body.email;
    let name = req.body.myname;
    let city = req.body.city;
    await User.updateOne({ _id: id }, { email: email, name: name, city: city });
    return res.redirect("/");
};
const postDeleteUser = async (req, res) => {
    let id = req.body.id;
    await User.deleteOne({ _id: id });
    return res.redirect("/");
};
module.exports = {
    getHomePage,
    getSamplePage,
    postCreateUser,
    getCreatePage,
    getUpdatePage,
    postUpdateUser,
    postDeleteUser,
};
