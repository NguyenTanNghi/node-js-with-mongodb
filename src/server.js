require("dotenv").config();
const express = require("express"); //commonjs
const configViewEngine = require("./config/viewEngine");
const webRouter = require("./routers/web");
const mysql = require("mysql2");

const app = express();
const port = process.env.PORT || 8081;
const hostname = process.env.HOST_NAME || "localhost";

// config view engine
configViewEngine(app);

// config routes
app.use("/", webRouter); // tất cả đường link trong webRouter đều bắt đầu bằng "/"

// test connect db
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "hoidanit",
    port: 3308, //default 3306
    password: "sapassword", //default: empty
});

connection.query("select * from Users u", function (err, results, fields) {
    console.log("Connected to the database. User data:", results);
    console.log("Fields:", fields);
});

app.listen(port, hostname, () => {
    console.log(`Example app listening on http://${hostname}:${port}`);
});
