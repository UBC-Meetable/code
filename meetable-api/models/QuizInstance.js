const mongoose = require("mongoose");

// Quiz Instance
const QuizInstanceSchema = mongoose.Schema({
  uid: {
    type: mongoose.SchemaTypes.ObjectId,
    required: false, // may be able to be required for this flow,
    // but probably not needed to be required
  },
  quiz: {
    type: mongoose.SchemaTypes.ObjectId,
    required: false, // quiz not served by backend for MVP
  },
  responses: {
    type: Map, // key: question
    of: String, // value: answer
    // minSize: 1,
    // maxSize: 3
  },
  dateCreated: {
    type: Date,
    default: Date.now(),
  },
});

const QuizInstance = mongoose.model("quizInstance", QuizInstanceSchema);
module.exports = QuizInstance;
