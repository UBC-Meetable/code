const express = require("express");
const router = express.Router();
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { check, validationResult, body } = require("express-validator");
const normalize = require("normalize-url");
const User = require("../models/User");
const Group = require("../models/Group");
const QuizInstance = require("../models/QuizInstance");
//const { count } = require('../models/Group');


router.post("/", async (req, res) => {
/**
 * @api {post} /users/ Post User
 * @apiName PostUser
 * @apiGroup User
 * @apiSuccess {Object} user The User Posted.
 * 
 * @apiError ValidationError The given attributes are invalid.
 * @apiError UserExists The posted user already exists.
 */
  try {
    console.log(req.body);
    const userInfo = {
      name: req.body.name,
      avatar: req.body.profileImage,
      authid: req.body.authid,
    };
    let user = await User.findOne({ authid: userInfo.authid });
    if (user) {
      console.log("user exists");
      console.log(user._id);
      return res.status(400).json(user._id);
    }
    user = new User({
      name: req.body.name,
      avatar: req.body.profileImage,
      authid: req.body.authid,
      email: req.body.email,
    });
    console.log(user);
    await user.save();
    res.send(user);
    //res.json(user._id);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

/**
 * @api {get} /users/ Get Users
 * @apiName GetUsers
 * @apiGroup User
 * @apiSuccess {Object} users All Users In Collection.
 */
router.get("/", async (req, res) => {
  const users = await User.find();
  res.json({ success: true, users });
});

// @route    GET api/users
// @desc     Get group(s) which user is part of, populated with users
// @access   Private
router.get("/getgroupsbyuserid/:uid", async (req, res) => {
  try {
    /* couldn't get this implementation to work...
    const groups = await User.find({_id : req.body.uid}).populate("group");
    res.json(groups);
    */
    const user = await User.findOne({ _id: req.params.uid });
    const groupIds = user.groups;
    let groups = [];
    for (let i = 0; i < groupIds.length; i++) {
      group = await Group.findOne({ _id: groupIds[i] }).populate("members");
      groups.push(group);
    }
    console.log(groups);
    res.send(groups)
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Error getting user groups");
  }
});

// @route    PUT api/users
// @desc     update user profile information
// @access   Private
// how to validate email?
router.put("/updateprofile", async (req, res) => {
  try {
    const body = req.body;
    /* body
  {uid: ...,
  instagram: "...",
  snapchat: "...",
  ..., 
  blurb: "...",
  email: "..."}
  */

    const uid = body.uid;
    const user = await User.findOne({ _id: uid });
    for (const attr in body) {
      user[attr] = body[attr];
    }
    await user.save(); //bug fix: added await so that error could be caught
    res.status(200).send("Success");
  } catch (err) {
    console.log(err);
    console.error(err.message);
    res.status(500).send(err);
  }
});

// @route    PUT api/users
// @desc     put user in a group (modify later to allow multiple groups)
// @access   Private
router.put("/group", async (req, res) => {
  const NUM_ADDITIONAL_CRITERIA = 3;
  try {
    const body = req.body;
    const uid = body.uid;
    user = await User.findOne({ _id: uid });
    group = await Group.findOne({ full: false });
    if (group == null) {
      // create a new group and join it
      year = await Response.findOne({ uid: user._id, question: "What year are you going into?" }).lean();
      major = await Response.findOne({ uid: user._id, question: "What is your intended major?" }).lean();
      group = new Group({ name: [year.answer, major.answer]});
      user.groups.push(group._id);
      group.members.push(uid);
    } else {
      const nonFullGroups = await Group.find({ full: false }).lean().populate(
        "members"
      ); 
      // find most compatible user out of all users in non-full groups
      mostCompatibleUser = null;
      for (let i = 0; i < nonFullGroups.length; i++) {
        let tempGroup = nonFullGroups[i].members;
        //if (hasUser(tempGroup, user.authid)) continue;
        for (let j = 0; j < tempGroup.length; j++) {
          if (await moreCompatible(user, tempGroup[j], mostCompatibleUser))
            mostCompatibleUser = tempGroup[j];
        }
      }
      // if minimum compatibility criteria not met by any user
      if (mostCompatibleUser == null) {
        // create a new group and join it
        year = await Response.findOne({ uid: user._id, question: "What year are you going into?" }).lean();
        major = await Response.findOne({ uid: user._id, question: "What is your intended major?" }).lean();
        group = new Group({ name: [year.answer, major.answer]});
        user.groups.push(group._id);
        group.members.push(uid);
      } else {
        // join compatible user's group
        group = await Group.findOne({ _id: mostCompatibleUser.groups[0] });
        user.groups.push(group._id);
        group.members.push(uid);
        // update full? status as necessary
        if (group.members.length == group.maxSize) group.full = true;
      }
    }
    await user.save();
    await group.save();
    await group.populate("members").execPopulate();
    res.status(200).json(group);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

// user, user, user -> boolean, return whether user1 is more compatible with user than user 2
async function moreCompatible(user, user1, user2) {
  const MIN_SCORE = 2;

  const userResponses = await Response.find({ uid: user._id }).lean().sort({
    dateCreated: 1,
  });
  const user1Responses = await Response.find({ uid: user1._id }).lean().sort({
    dateCreated: 1,
  });

  if (
    !(
      user1Responses[0].answer === userResponses[0].answer &&
      user1Responses[1].answer === userResponses[1].answer
    )
  ) {
    return false;
  } else if (user2 == null) {
    return true;
  } else {
    const user2Responses = await Response.find({ uid: user2._id }).lean().sort({
      dateCreated: 1,
    });
    let user1Score = 0;
    let user2Score = 0;
    for (let i = 2; i < userResponses.length; i++) {
      if (userResponses[i].answer === user1Responses[i].answer) user1Score++;
      if (userResponses[i].answer === user2Responses[i].answer) user2Score++;
    }
    if (user1Score > user2Score && user1Score >= MIN_SCORE) return true;
    else return false;
  }
}

function hasUser(tempGroup, authid) {
  for (let i = 0; i < tempGroup.length; i++) {
    if (tempGroup[i].authid === authid) return true;
  }
  return false;
}

module.exports = router;
