const mongoose = require("mongoose");
const Group = require('../models/Group');


const CourseGroupSchema = mongoose.Schema({
    // "COMM 101 101"
    courseCode: {type: String, required: true},

});

const CourseGroup = Group.discriminator('CourseGroup',
  CourseGroupSchema);

module.exports = CourseGroup;