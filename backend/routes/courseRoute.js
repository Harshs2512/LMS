const express = require('express');
const { getAllCourses, createCourse } = require("../controllers/courseControllers");

const router = express.Router();


router.route("/courses").get(getAllCourses);
router.route("/course/new").post(createCourse);
router.route("/course/:id").put(createCourse);

module.exports = router
