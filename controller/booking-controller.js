const bookingDB = require("../model/booking-model")


//create and Save the booking //

exports.create = async (req, res,) => {
    if (!req.body) {
        res.status(400).send("Content cannot be empty")
        return
    }

    const booking = new bookingDB({
        unit1: req.body.unit1,
        unit2: req.body.unit2,
        unit3: req.body.unit3,
        phone: req.body.phone,
        address: req.body.address,
        Dateselected:req.body.Dateselected,
        Timeselected:req.body.Timeselected,
        Token: req.body.token
    })
    booking.save(booking)
        .then(data => {
            res.send(data)
        })
        .catch(error => {
            res.status(500).send({
                message: error.message
            })
        })

}


exports.find = async (req, res) => {
    if (req.params.id) {
        const id = req.params.id
        console.log(req.params.id, "getttt");
        bookingDB.findById(id
        ).then(data => {
            if (!data) {
                res.status(400).send("User not found")
            } else {
                res.send(data)
            }
        })
            .catch(err => {
                res.status(500).send(err)
            })
    }
    else

        bookingDB.find()
            .then(user => {
                res.send(user)
            })
            .catch(err => {
                res.status(500).send(err)
            })
}



exports.update = async (req, res) => {
    if (!req.body) {
        res.status(400).send("User Address not found")
    }
    const id = req.params.id
    bookingDB.findByIdAndUpdate(id, req.body, { new: true })
        // ({$set:{
        //     'Token':req.body.Token,

        //   }}
        //   )
        .then(data => {
            if (!data) {
                res.status(400).send(`Can not found user Address with ${id}`)
            } else {
                res.send(data)
            }
        })
        .catch(error => {
            res.status(500).send(error)
        })
}

exports.delete = (req, res) => {
    const id = req.params.id

    bookingDB.findByIdAndDelete(id)
        .then(data => {
            if (!data) {
                res.status(400).send(`User not Found with ${id}`)
            } else {
                res.send("user deleted successfully")
            }
        })
        .catch(error => {
            res.status(500).send(error)
        })
}