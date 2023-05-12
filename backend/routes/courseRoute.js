const express = require('express');
const { getAllCourses, createCourse, updateCourse, deleteCourse,getCourseDetails,createCategory,getAllCategory,updateCategory,deleteCategory } = require("../controllers/courseControllers");

const router = express.Router();


//For add course CRUD operation
router.route("/course/new").post(createCourse);
router.route("/courses").get(getAllCourses);
router.route("/course/:id").put(updateCourse).delete(deleteCourse).get(getCourseDetails);

//For add category CRUD operation
router.route("/category").post(createCategory);
router.route("/show_category").get(getAllCategory);
router.route("/categry/:id").put(updateCategory).delete(deleteCategory);

module.exports = router
