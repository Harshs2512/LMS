const Course = require("../models/courseModel");
const Category = require("../models/categoryModel");
const Lesson = require("../models/lessonModel");
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
  res.send(result);
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
};
//show all course by category id
exports.getAllCoursesByCat_id = async (req, res) => {
  const result = await Course.findById({
    _id: req.params.id,
  });
  res.send(result);
};

//for add category
/////////////////////////////////////////////////////////////////////////////////////
// exports.createCategory = async (req, res) => {
//   try {
//     //all category find start
//     const {catName}= req.body;
//     const existingCatgory = await Category.findOne({catName});
//     if (existingCatgory) {
//       msg = "this category is already exists";
//       return res.status(400).json(msg);
//     }
// console.warn(catName)
//      const newCategory = await new Category({
//       catName,
//     });
//     await newCategory.save();
//     return res.status(200).json({
//       success: true,
//       message: "category Added successfully",
//       Response: newCategory,
//     });
//   } catch (error) {
//     const errors = { backendError: String };
//     errors.backendError = error;
//     res.status(500).json(errors);
//   }
// };
////////////////////////////////////////////////////////////////////////////////
exports.createCategory = async (req, res) => {
  try {
    const category_data = await Category.find();
    if (category_data.length > 0) {
      let checking = false;
      for (let i = 0; i < category_data.length; i++) {
        if (
          category_data[i]["catName"].toLowerCase() === req.body.catName.toLowerCase()) {
          checking = true;
          break;
        }
      }
      if (checking == false) {
        const catName = new Category({
          catName: req.body.catName,
        });
        const cat_data = await catName.save();
        res
          .status(200)
          .send({ success: true, message: "Successfully Added ("+req.body.catName+") Ctegory", data: cat_data });
      } else {
        res.status(400).send({
          success: false,
          message: "this category("+req.body.catName+") is already exists",
        });
      }
    } else {
      const category = await Category.create(req.body);
      res.status(201).json({
        success: true,
        category,
      });
      const cat_data = await category.save();
      res
        .status(400)
        .send({ success: true, message: "Category Data", data: cat_data });
    }

    //category find end code
  } catch (error) {
    res.status(400).send({ success: false, msg: error.message });
  }
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
  let catName = await Category.updateMany(
    {
      _id: req.params.id,
    },
    {
      $set: req.body,
    }
  );
  res.send(catName);
};
//delete  category
exports.deleteCategory = async (req, res) => {
  const result = await Category.deleteOne({
    _id: req.params.id,
  });
  res.send(result);
};

// Show all Lessons
exports.getAllLesson = async (req, res) => {
  const lesson = await Lesson.find();
  res.status(200).json({
    success: true,
    lesson,
  });
};

// Create Lessons
exports.createLesson = async (req, res, next) => {
  const lesson = await Lesson.create(req.body);
  res.status(201).json({
    success: true,
    lesson,
  });
};

// Update Lesson
exports.updateLesson = async (req, res) => {
  let lesson = await Lesson.updateOne(
    {
      _id: req.params.id,
    },
    {
      $set: req.body,
    }
  );
  res.send(lesson);
};
//delete  Lesson
exports.deleteLesson = async (req, res) => {
  const lesson = await Lesson.deleteOne({
    _id: req.params.id,
  });
  res.send(lesson);
};

//Get lesson details with Course details code write here

exports.LessonDetail = async (req, res) => {
  const lesson = await Lesson.find({
    _id: req.body.courseId,
  }).populate("courseId");
  res.send(lesson);
};
