require("dotenv").config();
const express = require("express"); //commonjs
const configViewEngine = require("./config/viewEngine");
const webRouter = require("./routers/web");

const app = express();
const port = process.env.PORT || 8081;
const hostname = process.env.HOST_NAME || "localhost";

// config view engine
configViewEngine(app);

// config routes
app.use("/", webRouter); // tất cả đường link trong webRouter đều bắt đầu bằng "/"

app.listen(port, hostname, () => {
    console.log(`Example app listening on http://${hostname}:${port}`);
});
