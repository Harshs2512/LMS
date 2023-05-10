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
        res.send(result);

};

//get All Course Details
exports.getCourseDetails = async (req, res,next) => {
    const result = await Course.findById(
        {
            _id: req.params.id
        });
        
        // if (!result) {
        //         return res.status(500).json({
        //             success: false,
        //             message: "Course not found"
        //         })
        //     }
        //     res.status(200).json({
        //         success: true,
        //         result
        //     })
        //     res.send(result)
}