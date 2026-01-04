const connection = require("../config/database");
const getHomePage = (req, res) => {
    return res.render("home");
};
const getSamplePage = (req, res) => {
    res.render("sample");
};
const postCreateUser = async (req, res) => {
    let email = req.body.email;
    let name = req.body.myname;
    let city = req.body.city;

    const [results, fields] = await connection.query(
        "INSERT INTO Users (email, name, city) VALUES (?, ?, ?)",
        [email, name, city]
    );
    return res.send("User created successfully!");
};
const getCreatePage = (req, res) => {
    res.render("create");
};
module.exports = {
    getHomePage,
    getSamplePage,
    postCreateUser,
    getCreatePage,
};
