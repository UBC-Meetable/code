const mongoose = require("mongoose");

// Response Instance
const ResponseSchema = mongoose.Schema({
  uid: {
    type: mongoose.SchemaTypes.ObjectId,
    required: false,
  },
  qid: {
    type: mongoose.SchemaTypes.ObjectId,
    required: true,
  },
  question: {
    type: String, // for hard coded MVP questions
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
  dateCreated: {
    type: Date,
    default: Date.now(),
  },

});

const Response = mongoose.model("Response", ResponseSchema);
module.exports = Response;
