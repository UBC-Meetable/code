const mongoose = require('mongoose')

// Quiz Instance
const QuizInstanceSchema = mongoose.Schema({
    uid: {
        type: mongoose.SchemaTypes.ObjectId,
        required: false
    },
    quiz: {
        type: mongoose.SchemaTypes.ObjectId,
        required: false // quiz not served by backend for MVP
    },
    responses: [{
        type: mongoose.SchemaTypes.ObjectId, 
        ref: "Response",
        default: []
    }],
    dateCreated: {
        type: Date,
        default: Date.now()
    }
})

module.exports = QuizInstance = mongoose.model('quizInstance', QuizInstanceSchema)