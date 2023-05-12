const mongoose = require("mongoose");


const categorySchema = mongoose.Schema({
    catName: {
        type: String,
        required: true,
    }
});

 module.exports = mongoose.model("Category", categorySchema);