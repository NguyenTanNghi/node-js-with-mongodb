const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Hello World123!212");
});
router.get("/sample", (req, res) => {
    res.render("sample");
});

module.exports = router;
