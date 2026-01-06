require("dotenv").config();
const express = require("express"); //commonjs
const configViewEngine = require("./config/viewEngine");
const webRouter = require("./routers/web");
const connection = require("./config/database");

const app = express();
const port = process.env.PORT || 8081;
const hostname = process.env.HOST_NAME || "localhost";

// config request body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// config view engine
configViewEngine(app);

// config routes
app.use("/", webRouter); // tất cả đường link trong webRouter đều bắt đầu bằng "/"

// kết nối db và sau khi kết nối thành công thì mới chạy server
(async () => {
    try {
        await connection();
        app.listen(port, hostname, () => {
            console.log(
                `Backend zero app listening on http://${hostname}:${port}`
            );
        });
    } catch (error) {
        console.log(">>> Error connect to db: ", error);
    }
})();
 