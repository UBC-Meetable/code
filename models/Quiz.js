const mongoose = require('mongoose')

// Quiz Model
const QuizSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    questions: {
        type: [mongoose.SchemaTypes.ObjectId],
        required: true
    },
    dateCreated: {
        type: Date,
        default: Date.now()
    }

})

module.exports = Quiz = mongoose.model('quiz', QuizSchema)