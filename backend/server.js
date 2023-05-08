
const express = require("express");
const app = express();
require("dotenv").config();
app.use(express.json());

const port = process.env.PORT


const router = require("./routes/courseRoute");
const dbConfig = require("./config/dbconfig");

app.listen(port, () => {
    console.log(`server is working on ${port}`)
})