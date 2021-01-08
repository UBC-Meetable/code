const mongoose = require("mongoose");
const Group = require("./Group");

const validateEmail = function (email) {
  const re = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
};

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 40,
  },
  email: {
    type: String,
    required: false,

  },
  authid: { type: String, required: true },
  expoPushToken: {
    type: String,
    required: true, // TODO: determine if frontend gets user's
    // push token before or after user document is first posted
    // also, can user mute individual groups, or only disable push notifications altogether?
  },
  avatar: {
    type: String,
  },
  verified: { // TODO: determine if necessary
    type: Boolean,
    default: false,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  groups: [{
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Group",
    default: [],
  }],
  courseGroups: [{
    type: mongoose.SchemaTypes.ObjectId,
    ref: "CourseGroup",
    default: [],
  }],
  quizInstances: [{
    type: mongoose.SchemaTypes.ObjectId,
    ref: "QuizInstance",
    default: [],
  }],
  courses: { // TODO: frontend or backend validation, possibly using SSC API https://github.com/qstevens/UBC-Courses-API
    type: [String],
    default: [],
  },
  major: { // TODO: frontend validation/choose from limited options
    type: String,
  },
  year: { // TODO: frontend validation/choose from limited options
    type: Number,
  },
  school: {
    type: String,
  },
  maxGroups: { type: Number, default: 7 },
  blurb: {
    type: String,

  },
  instagram: {
    type: String, // make social media attributes unique and sparse??
    required: false,
  },
  snapchat: {
    type: String,
    required: false,
  },
  facebook: {
    type: String,
    required: false,
  },
  /*
  socialMedia: {             // TODO:
    decide whether to implement map so users can put whatever social media
    type: Map, // key: social media platform
    of: String, // value: either links or identifiers such as usernames
    minSize: 1,
    maxSize: 3 // arbitrary, per design on figma
  }
  */
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
