const mongoose = require('mongoose')

// Quiz Instance
const QuizInstanceSchema = mongoose.Schema({
    uid: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true
    },
    quiz: {
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

module.exports = QuizInstance = mongoose.model('quizInstance', QuizInstanceSchema)