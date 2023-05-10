const Course = require("../models/courseModel");
const { param } = require("../routes/courseRoute");
// const del = require("sample_mflix")


// For admin
exports.createCourse = async (req, res, next) => {
    const course = await Course.create(req.body);
    res.status(201).json({
        success: true,
        course
    })
}


// Get all data
exports.getAllCourses = async (req, res) => {
    const courses = await Course.find();
    res.status(200).json({
        success: true,
        courses
    })
}


// Update Course
exports.updateCourse = async (req, res) => {

    let course = await Course.updateOne(
        {
            _id: req.params.id
        },
        {
            $set: req.body
        }
    )
    res.send(course)

    // if (!course) {
    //     return res.status(500).json({
    //         success: false,
    //         message: "Course not found"
    //     })
    // }
};
//delete code
exports.deleteCourse = async (req, res) => {
    const result = await Course.deleteOne(
        {
            _id: req.params.id
        })
    res.status(200).json({
        success: true,
        message: "Course deleted"
    })
    // console.log(course)
}
    // delete Course
    // await Course.remove();
    // console.log(course)

    // await deleteMany({title: "apple"})


// hhghghghghgh