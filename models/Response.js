const mongoose = require('mongoose')

const ResponseSchema = mongoose.Schema({
    uid: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true
    },
    qid: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true
    },
    question: {
        type: mongoose.SchemaTypes.ObjectId,
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

module.exports = Response = mongoose.model('response', ResponseSchema)