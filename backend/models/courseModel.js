const mongoose = require("mongoose");

const courseSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    selling_price: {
        type: Number,
        required: [true, "Please Enter Selling Price"]
    },
    discounted_price: {
        type: Number,
        required: [true, "Please Enter Discounted Price"]
    },
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"Category",
        required: [true, "Please Enter Category"]
    },
    rating: {
        type: Number,
        default: 0,
    },
    duration: {
        type: Number,
        default: 0,
    },
    thumnail_img: [
        {
            public_id: {
                type: String,
                require: true
            },
            url: {
                type: String,
                require: true
            }
        }
    ],
})



module.exports =mongoose.model("Course", courseSchema);