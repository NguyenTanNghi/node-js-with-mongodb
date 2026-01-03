require("dotenv").config();
const express = require("express");
const configViewEngine = require("./config/viewEngine");
const webRouter = require("./routers/web");
const app = express();
const port = process.env.PORT || 8081;
const hostname = process.env.HOST_NAME || "localhost";

// config view engine
configViewEngine(app);

// config routes
app.use("/", webRouter);

app.listen(port, hostname, () => {
    console.log(`Example app listening on http://${hostname}:${port}`);
});
