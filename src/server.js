const express = require("express");
const path = require("path");
// import express from "express";

const app = express();
const port = 8080;

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

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
