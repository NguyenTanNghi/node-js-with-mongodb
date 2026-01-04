const connection = require("../config/database");
const getHomePage = (req, res) => {
    // test connect db
    let user = [];
    connection.query("select * from Users u", function (err, results, fields) {
        user = results;
        console.log("Connected to the database. User data:", results);

        console.log(">>>check", user);

        res.send(JSON.stringify(user));
    });
};
const getSamplePage = (req, res) => {
    res.render("sample");
};
module.exports = {
    getHomePage,
    getSamplePage,
};
