require("dotenv").config();
const mysql = require("mysql2/promise");

// test connect db
// const connection = mysql.createConnection({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     database: process.env.DB_NAME,
//     port: process.env.DB_PORT, //default 3306
//     password: process.env.DB_PASSWORD, //default: empty
// });

// connect to database pool (nhanh hơn so với createConnection)
const connection = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT, //default 3306
    password: process.env.DB_PASSWORD, //default: empty
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});
module.exports = connection;
