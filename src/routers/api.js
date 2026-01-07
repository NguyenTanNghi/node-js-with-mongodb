const express = require("express");
const routerAPI = express.Router();
const { getUsersAPI } = require("../controllers/apiController");

routerAPI.get("/", (req, res) => {
    res.send("Hello from API");
});
routerAPI.get("/user", (req, res) => {
    return getUsersAPI(req, res);
});

module.exports = routerAPI;
