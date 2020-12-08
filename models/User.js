const mongoose = require('mongoose');
const Group = require('./Group');


let validateEmail = function(email) {
  let re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email)
};

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 40
  },
  email: {
    type: String, 
    required: false,
   
  },
  authid: {type: String, required: true},
  avatar: { 
    type: String
  },
  verified: {                          // TODO: determine if necessary
    type: Boolean,
    default: false
  },
  date: {
    type: Date,
    default: Date.now
  },
  groups: [{                           // TODO: rename to friendGroups and create new courseGroups attribute
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Group',
    default: [],
  }],
  courseGroups: [{
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'CourseGroup',
    default: []
  }],
  courses: {              // TODO: frontend or backend validation, possibly using SSC API https://github.com/qstevens/UBC-Courses-API
    type: [String],
    default: []
  },
  major: {                // TODO: frontend validation/choose from limited options
    type: String
  },
  year: {                 // TODO: frontend validation/choose from limited options
    type: Number
  },
  maxGroups: {type: Number, default: 7},
  blurb: {
    type: String,
   
  },
  instagram: {type: String, // make social media attributes unique and sparse??
    required: false,
    },
  snapchat: {type: String,
    required: false,
    },
  facebook: {type: String,
    required: false,
    },
    /*
  socialMedia: {             // TODO: decide whether to implement map so users can put whatever social media
    type: Map, // key: social media platform
    of: String, // value: either links or identifiers such as usernames
    minSize: 1,
    maxSize: 3 // arbitrary, per design on figma
  }
  */
});

module.exports = User = mongoose.model('User', UserSchema);
