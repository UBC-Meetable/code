const mongoose = require('mongoose')

const QuestionSchema = mongoose.Schema({
    question: {
        type: String,
        required: true,
    },
    possibleAnswers: {
        type: [String],
        required: true 
    },
    dateCreated: {
        type: Date,
        default: Date.now()
    }
})

module.exports = Question = mongoose.model('question', QuestionSchema)