const express = require('express');
const { getAllCourses, createCourse } = require("../controllers/courseControllers");

const router = express.Router();


router.route("/course").get(getAllCourses);
router.route("/course/new").post(createCourse);

module.exports = router
