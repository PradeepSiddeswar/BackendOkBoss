const express = require("express");
const route = express.Router()


const uuidController = require("../controller/uuid_controller")

// route.post("/", (req, res) => {
//     res.send("Loged in")
// })

route.post("/", uuidController.create)

module.exports= route;