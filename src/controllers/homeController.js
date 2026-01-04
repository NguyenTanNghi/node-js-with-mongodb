const connection = require("../config/database");
const getHomePage = (req, res) => {
    return res.render("home");
};
const getSamplePage = (req, res) => {
    res.render("sample");
};
module.exports = {
    getHomePage,
    getSamplePage,
};
