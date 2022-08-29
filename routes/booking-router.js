const express = require("express")
const route = express.Router()



const bookingController = require("../controller/booking-controller")

//Create a new user in booking page
route.post("/", bookingController.create)
//Finding all booked users in DB
route.get("/get" , bookingController.find)
//Find all booked users sorted by id
route.get("/gets/:id", bookingController.find)
//As due to changing of state of uuid in booking not added update option. Only delete and create option
//implemented.
route.put("/update/:id", bookingController.update)
route.delete("/delete/:id", bookingController.delete)

module.exports = route
