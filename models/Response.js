const mongoose = require('mongoose')

// Response Instance
const ResponseSchema = mongoose.Schema({
    uid: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true
    },
    question: {
        type: String, // for hard coded MVP questions
        required: true
    },
    answer: {
        type: String,
        required: false
    },
    dateCreated: {
        type: Date,
        default: Date.now()
    }

})

module.exports = Response = mongoose.model('Response', ResponseSchema)