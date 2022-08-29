const mongoose = require("mongoose")
const schema = mongoose.Schema

const packageSchema = new schema({
    package: {
        type: String,

    },
    textField1: {
        type: String,
        // require: true
    },
    textField2: {
        type: String,
        // require: true
    },
    amount1: {
        type: String,
        // require: true,
        // unique: true
    },
    textField3: {
        type: String,
        // require: true,
        // unique: true
    },
    amount2: {
        type: String,
        // require: true,
        // unique: true
    },
    category: {

        type: String
    },
    subCategory: {
        subCategory1: [{
            sub: String
        }]
    },
    createdAt: {
        type: Date,
        deafault: Date.now(),
    },
    updatedAt: {
        type: Date,
        deafault: Date.now(),
    },


}, {timestamps:true}
)

const packageDB = mongoose.model("PackageDb", packageSchema)

module.exports = packageDB