const express = require("express");
const router = express.Router();
const {
    getHomePage,
    getSamplePage,
    postCreateUser,
} = require("../controllers/homeController");

router.get("/", getHomePage);
router.get("/sample", getSamplePage);
router.post("/create-user", postCreateUser);

module.exports = router;
