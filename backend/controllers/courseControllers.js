const Course = require("../models/courseModel");


exports.createCourse = async (req, res, next) => {
    const course = await Course.create(req.body);
    res.status(201).json({
        success: true,
        course
    })
}

exports.getAllCourses = (req, res) => {
    res.status(200).json({ massage: "Route is working " })
}