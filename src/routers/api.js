const express = require("express");
const routerAPI = express.Router();
const {
    getUsersAPI,
    postCreateUserAPI,
    putUpdateUserAPI,
    deleteUserAPI,
    postUploadSingleFileApi,
    postUploadMultipleFilesAPI,
} = require("../controllers/apiController");
const { postCreateCustomerAPI,postCreateArrayCustomerAPI } = require("../controllers/customerController");

routerAPI.get("/", (req, res) => {
    res.send("Hello from API");
});

// User CRUD
routerAPI.get("/user", getUsersAPI);
routerAPI.post("/user", postCreateUserAPI);
routerAPI.put("/user", putUpdateUserAPI);
routerAPI.delete("/user", deleteUserAPI);

// File upload
routerAPI.post("/file", postUploadSingleFileApi);
routerAPI.post("/files", postUploadMultipleFilesAPI);

// Customers CRUD
routerAPI.post("/customers", postCreateCustomerAPI);
routerAPI.post("/customers-many", postCreateArrayCustomerAPI);
module.exports = routerAPI;
