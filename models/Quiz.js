const mongoose = require('mongoose')

const QuizSchema = mongoose.Schema({
    uid: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true
    },
    responses: {
        type: [mongoose.SchemaTypes.ObjectId],
        default: []
    },
    dateCreated: {
        type: Date,
        default: Date.now()
    }

})

module.exports = Quiz = mongoose.model('quiz', QuizSchema)