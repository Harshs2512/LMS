const Course = require("../models/courseModel");

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
exports.updateCourse = async (req, res, next) => {

    var course = await Course.findById(req.params.id);
    console.log(course)

    if (!course) {
        return res.status(500).json({
            success: false,
            message: "Course not found"
        })
    }
    course = await Course.findByIdAndUpdate(req.params.id, res.body, { new: true, runValidators: true, useFindAndModify: false });
    res.status(200).json({
        success: true,
        course,  
    })
    console.log(course)
}