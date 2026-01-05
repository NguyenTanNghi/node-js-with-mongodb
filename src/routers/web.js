const express = require("express");
const router = express.Router();
const {
    getHomePage,
    getSamplePage,
    postCreateUser,
    getCreatePage,
    getUpdatePage,
    postUpdateUser,
    postDeleteUser,
} = require("../controllers/homeController");

router.get("/", getHomePage);
router.get("/sample", getSamplePage);
router.get("/create", getCreatePage);
router.get("/update/:id", getUpdatePage);
router.post("/update-user", postUpdateUser);
router.post("/create-user", postCreateUser);
router.post("/delete", postDeleteUser);

module.exports = router;
