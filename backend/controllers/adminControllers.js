const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Admin = require("../models/adminModel");
const jwt = require("jsonwebtoken")
//const bcrypt = require("bcrypt");
const sendEmail = require("../utils/sendEmail");
const sendToken = require("../utils/jwtToken");
const crypto = require("crypto");


exports.registerAdmin = catchAsyncErrors(async (req, res, next) => {
    const { name, email, password } = req.body;

    const admin = await Admin.create({
        name,
        email,
        password
    });
    sendToken(admin, 201, res);
    // console.log(registerAdmin)
});

// Login Admin

exports.loginAdmin = catchAsyncErrors(async (req, res, next) => {
    const { email, password } = req.body;

    // Checking if Admin has given password and email both

    if (!email || !password) {
        return next(new ErrorHander("Please Enter Email & Password", 400));
    }

     const Admin_Check = await Admin.findOne({ email }).select("+password");

    if (!Admin_Check) {
        return next(new ErrorHander("Inavlid Email Or Password", 401));
    }

    // const isPasswordMatched = await bcrypt.compare(password, Admin.password);
    const isPasswordMatched = await Admin_Check.comparePassword(password);

    if (!isPasswordMatched) {
        return next(new ErrorHander("Inavlid Email Or Password", 401));
    }

    // sendToken(Admin, 200, res);

    const token = jwt.sign(
        {
            email: Admin.email,
            id: Admin._id,
        },
        "sEcReT",
        { expiresIn: "1h" }
    );
    res.status(200).json({ result: Admin, token: token });
});

// // Logout Admin
exports.logout = catchAsyncErrors(async (req, res, next) => {
    res.cookie("token", null, {
        expires: new Date(Date.now()),
        httpOnly: true,
    });

    res.status(200).json({
        success: true,
        message: "Logged Out",
    });
});

 // Forgot Password
// exports.forgotPassword = catchAsyncErrors(async (req, res, next) => {
//     const Admin = await Admin.findOne({ email: req.body.email });


//     if (!Admin) {
//         return next(new ErrorHander("Admin not found", 404));
//     }

    // Get ResetPassword Token
//     const resetToken = Admin.getResetPasswprdToken();

//     await Admin.save({ validateBeforeSave: false });

//     const resetPasswordUrl = `${req.protocol}://${req.get("host")}/password/reset/${resetToken}`;

//     const message = `Your password reset token is :- \n\n ${resetPasswordUrl} \n\nIf you have not requested this email then, please ignore it.`;

//     try {
//         await sendEmail({
//             email: Admin.email,
//             subject: `LMS_Cybrom Password Recovery`,
//             message,
//         });

//         res.status(200).json({
//             success: true,
//             message: `Email sent to ${Admin.email} successfully`,
//         });
//     } catch (error) {
//         Admin.resetPasswordToken = undefined;
//         Admin.resetPasswordExpire = undefined;

//         await Admin.save({ validateBeforeSave: false });

//         return next(new ErrorHander(error.message, 500));
// }  
// });

 // Reset Password
 exports.resetPassword = catchAsyncErrors(async (req, res, next) => {
     // creating token hash
    const resetPasswordToken = crypto
        .createHash("sha256")
        .update(req.params.token)
        .digest("hex");

    const Admin = await Admin.findOne({
        resetPasswordToken,
        resetPasswordExpire: { $gt: Date.now() },
    });

    if (!Admin) {
        return next(
            new ErrorHander(
                "Reset Password Token is invalid or has been expired",
                400
            )
        );
    }

    if (req.body.password !== req.body.confirmPassword) {
        return next(new ErrorHander("Password does not password", 400));
    }

    Admin.password = req.body.password;
    Admin.resetPasswordToken = undefined;
    Admin.resetPasswordExpire = undefined;

    await Admin.save();

    sendToken(Admin, 200, res);
});

//Get Admin Detail
exports.AdminDetail = catchAsyncErrors(async (req, res, next) => {
    const admin = await Admin.findById({
        _id: req.params.id});

        res.status(200).json({
         success: true,
         admin,
    });
})