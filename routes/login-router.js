const express = require("express");
const route = express.Router()
const loginmulter = require("../config/login-multer");

const loginController = require("../controller/login-controller")



//Create a new user in Login page
route.post("/", loginmulter.single("image"), loginController.create)
//Updating user informations as by through adding (Coupon code) which is unique
route.put("/update/:Coupon", loginmulter.single("image"), loginController.update)
route.put("/update/:id", loginmulter.single("image"), loginController.update)
//Deleting user by through main id
route.delete("/delete/:id", loginmulter.single("image"), loginController.delete)
//Sorting users by through email
route.get("/get/:user_id", loginmulter.single("image"), loginController.find)
//Getting all users informations in Db
route.get("/get", loginmulter.single("image"), loginController.find)

module.exports = route