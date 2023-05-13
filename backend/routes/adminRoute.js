const express = require('express');
const {
    registerAdmin,
    loginAdmin,
    logout,
    forgotPassword,
    resetPassword,
    getAdminDetails,
} = require("../controllers/adminControllers");
//const { logout } = require('../middleware/auth');
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

const router = express.Router();


//router.route("/course").get(getAllCourses);
router.route("/register").post(registerAdmin);

// router.route("/admin/login").post(loginAdmin);

// router.route("/admin/password/forgot").post(forgotPassword);

// router.route("/admin/password/reset/:token").put(resetPassword);

// router.route("/admin/logout").get(logout);

// router.route("/admin/me").get(isAuthenticatedUser, getAdminDetails);

module.exports = router
