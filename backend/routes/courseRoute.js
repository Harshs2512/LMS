const express = require('express');
const { getAllCourses, createCourse, updateCourse, deleteCourse } = require("../controllers/courseControllers");

const router = express.Router();


router.route("/courses").post(getAllCourses);
router.route("/course/new").post(createCourse);
router.route("/course/:id").put(updateCourse).delete(deleteCourse);

module.exports = router
