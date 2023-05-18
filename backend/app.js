const express = require("express");
require("dotenv").config();
require("./db");
const user = require("./routes/userRoute");
const admin =require("./routes/adminRoute")
const errorMiddleware = require("./middleware/error")
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

const courseRoute = require("./routes/courseRoute");

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api/v1", user);
app.use("/api/v1", courseRoute);
app.use("/api/v1", admin);


app.use("/api/v1",courseRoute);

app.listen(8000, () => {
    console.log("the server is listening on port 8000");
});
