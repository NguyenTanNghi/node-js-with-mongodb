const connection = require("../config/database");
const getHomePage = (req, res) => {
    return res.render("home");
};
const getSamplePage = (req, res) => {
    res.render("sample");
};
const postCreateUser = (req, res) => {
    console.log(req.body);
    return res.send("Create new user");
};
module.exports = {
    getHomePage,
    getSamplePage,
    postCreateUser,
};
