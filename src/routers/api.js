const express = require("express");
const routerAPI = express.Router();
const { getUsersAPI, postUsersAPI } = require("../controllers/apiController");

routerAPI.get("/", (req, res) => {
    res.send("Hello from API");
});
routerAPI.get("/user", (req, res) => {
    getUsersAPI(req, res);
});
routerAPI.post("/user", (req, res) => {
    postUsersAPI(req, res);
});
module.exports = routerAPI;
