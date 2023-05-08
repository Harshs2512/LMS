const express = require('express');
const { getAllCourses, createCourse } = require("../controllers/courseControllers");

const router = express.Router();


router.route("/courses").get(getAllCourses);
router.route("/course/new").post(createCourse);
router.route("/course/:id").put(createCourse);
router.route("/course/:id").put(addStudent);
router.route("/course/:id").put(addStudent);

// jjgjgjgjgg
// jjgjgjgjgg
// jjgjgjgjgg

module.exports = router
