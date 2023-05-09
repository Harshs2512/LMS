

const express = require("express");
require("dotenv").config();
require("./db");

const courseRoute = require("./routes/courseRoute");

const app = express();
app.use(express.json());


app.use("/api/v1",courseRoute);

app.listen(8000, () => {
    console.log("the port is listening on port 8000");
});