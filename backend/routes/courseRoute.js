const express = require("express");
const auth = require("../middleware/auth");
const {
  getAllCourses,
  createCourse,
  updateCourse,
  deleteCourse,
  getCourseDetails,
  createCategory,
  getAllCategory,
  updateCategory,
  deleteCategory,
  createLesson,
  getAllLesson,
  deleteLesson,
  updateLesson,
  LessonDetail,
  getAllCoursesByCat_id,
} = require("../controllers/courseControllers");

const router = express.Router();

//For add course CRUD operation
router.route("/course/new").post(createCourse);
router.route("/Showcourse/ByCate_id/:id").get(getAllCoursesByCat_id);
router.route("/courses").get(getAllCourses);
router
  .route("/course/:id")
  .put(updateCourse)
  .delete(deleteCourse)
  .get(getCourseDetails);

//For add category CRUD operation
router.route("/category",auth,).post(createCategory);
router.route("/show_category").get(getAllCategory);
router.route("/category/:id").put(updateCategory).delete(deleteCategory);

//For add Lesson CRUD operation
router.route("/add_lesson").post(createLesson);
router.route("/show_lesson").get(getAllLesson);
router.route("/lesson/:id").put(updateLesson).delete(deleteLesson);
//lesson ki id dalna hai
router.route("/show_lesson/populate").post(LessonDetail);

module.exports = router;
