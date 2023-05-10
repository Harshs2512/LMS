const express = require('express');
const { getAllCourses, createCourse, updateCourse, deleteCourse,getCourseDetails } = require("../controllers/courseControllers");

const router = express.Router();


router.route("/courses").get(getAllCourses);
router.route("/course/new").post(createCourse);
router.route("/course/:id").put(updateCourse).delete(deleteCourse).get(getCourseDetails)

module.exports = router
