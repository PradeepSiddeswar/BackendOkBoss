const mongoose = require("mongoose")
const schema = mongoose.Schema

const personaSchema = new schema({
    name: {
        type: String
    },
    description: {
        type: String
    },
    categories: {
        type:String

    },

})

const personaDB = mongoose.model("personadb", personaSchema)
module.exports = personaDB