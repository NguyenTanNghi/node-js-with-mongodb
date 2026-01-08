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
const {
    postCreateCustomerAPI,
    postCreateArrayCustomerAPI,
    getAllCustomersAPI,
    putUpdateCustomerAPI,
    deleteACustomerAPI,
    deleteArrayCustomerAPI,
} = require("../controllers/customerController");

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
routerAPI.get("/customers", getAllCustomersAPI);
routerAPI.put("/customers", putUpdateCustomerAPI);
routerAPI.delete("/customers", deleteACustomerAPI);
routerAPI.delete("/customers-many", deleteArrayCustomerAPI);

// Query
routerAPI.get("/info", (req, res) => {
    return res.status(200).json({
        message: "This is Query API",
        data: req.query,
    });
});

// Params
routerAPI.get("/info/:name/:address", (req, res) => {
    return res.status(200).json({
        message: "This is Params API",
        data: req.params,
    });
});

module.exports = routerAPI;
