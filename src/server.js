const express = require("express");
const path = require("path");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 8081;
const hostname = process.env.HOST_NAME || "localhost";

// config view engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// config routes
app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.get("/sample", (req, res) => {
    res.render("sample");
});

app.listen(port, hostname, () => {
    console.log(`Example app listening on http://${hostname}:${port}`);
});
