const Course = require("../models/courseModel");
const Category = require("../models/categoryModel");
const { param } = require("../routes/courseRoute");
// const del = require("sample_mflix")

//For admin
exports.createCourse = async (req, res, next) => {
  const course = await Course.create(req.body);
  res.status(201).json({
    success: true,
    course,
  });
};

// Get all data
exports.getAllCourses = async (req, res) => {
  const courses = await Course.find();
  res.status(200).json({
    success: true,
    courses,
  });
};
// Update Course
exports.updateCourse = async (req, res) => {
  let course = await Course.updateOne(
    {
      _id: req.params.id,
    },
    {
      $set: req.body,
    }
  );
  res.send(course);

  // if (!course) {
  //     return res.status(500).json({
  //         success: false,
  //         message: "Course not found"
  //     })
  // }
};
//delete code
exports.deleteCourse = async (req, res) => {
  const result = await Course.deleteOne({
    _id: req.params.id,
  });

  // delete Course
  // await Course.remove();
  console.log(result);
};

//get All Course Details
exports.getCourseDetails = async (req, res, next) => {
  const result = await Course.findById({
    _id: req.params.id,
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
};
//for add category

exports.createCategory = async (req, res, next) => {
  const category = await Category.create(req.body);
  res.status(201).json({
    success: true,
    category,
  });
};
// show all  cetegory name
exports.getAllCategory = async (req, res) => {
  const category = await Category.find();
  res.status(200).json({
    success: true,
    category,
  });
};

// Update Category
exports.updateCategory = async (req, res) => {
  let category = await Category.updateOne(
    {
      _id: req.params.id,
    },
    {
      $set: req.body,
    }
  );
  res.send(category);
};
//delete  category
exports.deleteCategory = async (req, res) => {
  const result = await Category.deleteOne({
    _id: req.params.id,
  });
  res.send(result); 
};
