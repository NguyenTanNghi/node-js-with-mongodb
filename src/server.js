require("dotenv").config();
const express = require("express"); //commonjs
const configViewEngine = require("./config/viewEngine");
const webRouter = require("./routers/web");
const apiRouter = require("./routers/api");
const connection = require("./config/database");
const fileUpload = require("express-fileupload");
const { MongoClient } = require("mongodb");

const app = express();
const port = process.env.PORT || 8081;
const hostname = process.env.HOST_NAME || "localhost";

//  config file upload
app.use(fileUpload());

// config request body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// config view engine
configViewEngine(app);

// config routes
app.use("/", webRouter); // tất cả đường link trong webRouter đều bắt đầu bằng "/"
app.use("/v1/api", apiRouter); // tất cả đường link trong apiRouter đều bắt đầu bằng "/v1/api"

// kết nối db và sau khi kết nối thành công thì mới chạy server
(async () => {
    try {
        // using mongoose to connect to database
        await connection();

        // using mongodb native driver to connect to database
        // const url = process.env.DB_HOST_WITH_DRIVER;
        // const client = new MongoClient(url);
        // const dbName = process.env.DB_NAME;
        // await client.connect();
        // console.log("Connected successfully to server");
        // const db = client.db(dbName);
        // const collection = db.collection("customers");
        // collection.insertOne({ name: "John", address: "Highway 37" }) ;
        // collection.insertOne({ name: "John", address: "Highway 38" });
        // console.log(">>> find = ", await collection.find({name: "John"}).toArray());

        // ở đây là ví dụ về cách chèn một tài liệu có cấu trúc phức tạp hơn với đối tượng lồng nhau mà mongodb native driver hỗ trợ
        // mongoose cũng hỗ trợ nhưng cần định nghĩa schema trước
        // collection.insertOne({
        //     name: "John",
        //     address: {
        //         city: {
        //             name: "New York",
        //             code: "NY",
        //         },
        //         street: "5th Avenue",
        //         building: "10B",
        //     },
        // });

        app.listen(port, hostname, () => {
            console.log(
                `Backend zero app listening on http://${hostname}:${port}`
            );
        });
    } catch (error) {
        console.log(">>> Error connect to db: ", error);
    }
})();
// mongoose phải quy định schema trước khi lưu trữ dữ liệu, trong khi mongodb native driver linh hoạt hơn trong việc lưu trữ dữ liệu không theo cấu trúc cố định.
// khi Create: mongoose khi truyền dư dữ liệu thì chỉ lấy những trường cần thiết có trong model project
// khi Create: mongodb native driver khi truyền dư dữ liệu thì sẽ lưu tất cả dữ liệu vào trong document