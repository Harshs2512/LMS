const express = require('express');
const app = express();


const course = require('./routes/courseRoute');

app.use("/api/v1", course);

module.exports = app
