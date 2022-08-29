const mongoose = require("mongoose")
const schema = mongoose.Schema

function Token() {
    var dt = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (dt + Math.random() * 16) % 16 | 0;
        dt = Math.floor(dt / 16);
        return ((c == 'x' ? r : (r & 0x1 | 0x6)));
    });
    return "OKB-" + uuid.substring(0, 4);
}

const bookingShema = new schema({

    unit1: {
        type: String
    },
    unit2: {
        type: String
    },
    unit3: {
        type: String
    },
    Token: { type: String, unique: true, default: Token },

    phone: {
        type: Number
    },

    address: {
        type: String
    },
    pickup:{
        type:String
    },
    drop:{
        type:String
    },
    pincode:{
        type:Number
    },
    Dateselected: {
        type: String,
    },
    Timeselected: {
        type: String,

    }

},
    // { timestamps: true }
)

const bookingDB = mongoose.model("bookingDB", bookingShema)
module.exports = bookingDB