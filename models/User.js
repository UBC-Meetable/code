const mongoose = require('mongoose');
const Group = require('./Group');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  avatar: { // string? or identifier for image hosted on server?
    type: String
  },
  verified: {
    type: Boolean,
    default: false
  },
  date: {
    type: Date,
    default: Date.now
  },
  groups: {
    type: [mongoose.SchemaTypes.ObjectId],
    ref: 'Group',
    default: [],
    maxSize: {type: Number, default: 10}
  },
  blurb: {
    type: String,
    maxChar: 300
  },
  instagram: {type: String,
    required: false,
    unique: true},
  snapchat: {type: String,
    required: false,
    unique: true},
  facebook: {type: String,
    required: false,
    unique: true},
    /*
  socialMedia: { 
    type: Map, // key: social media platform
    of: String, // value: either links or identifiers such as usernames
    minSize: 1,
    maxSize: 3 // arbitrary, per design on figma
  }
  */
});

module.exports = User = mongoose.model('user', UserSchema);
