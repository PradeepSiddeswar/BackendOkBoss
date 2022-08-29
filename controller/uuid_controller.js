const uuidDB = require("../model/uuid_schema")
const path = require("path")



exports.create = async (req, res) => {
    if (!req.body) {
        res.status(400).send("Content connt be empty")
        return
    }
    const uid = new uuidDB({

        Token: req.body.Token,
        Coupon: req.body.Coupon
    })
    console.log(uid, "dateeee");
    uid.save(uid)
        .then(data => {
            console.log("uid", uid)
            res.send(data)
        })
        .catch(error => {
            console.log("uid", uid)
            res.status(500).send({
                message: error.message
            })
        })
}
