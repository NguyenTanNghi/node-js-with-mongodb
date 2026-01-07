const express = require("express");
const routerAPI = express.Router();
const {
    getUsersAPI,
    postUsersAPI,
    putUsersAPI,
    deleteUsersAPI,
} = require("../controllers/apiController");

routerAPI.get("/", (req, res) => {
    res.send("Hello from API");
});
routerAPI.get("/user", getUsersAPI);
routerAPI.post("/user", postUsersAPI);
routerAPI.put("/user", putUsersAPI);
routerAPI.delete("/user", deleteUsersAPI);
module.exports = routerAPI;
