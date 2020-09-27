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
const Response = require("../models/Response");
//const { count } = require('../models/Group');

/**
 * @api {post} /users/ Post User
 * @apiName PostUser
 * @apiGroup User
 * @apiSuccess {Object} user The User Posted.
 * @apiParam {String} name The user's name
 * @apiParam {String} profileImage profile picture URL
 * @apiParam {String} authid The user's auth0 id
 * @apiParam {String} email The user's email
 * @apiError (500) {Object} ValidationError The specified attributes are invalid for the specified reasons.
 * @apiError (400) {String} UserExists The posted user already exists.
 */
router.post("/", async (req, res) => {
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

      const socials = [user.snapchat, user.instagram, user.facebook];
      if (socials.length < 1 || !user.blurb) {
        return res.status(200).send({
          msg: "Meetable user exists additional steps required",
          id: user._id,
          snapchat: user.snapchat,
          instagram: user.instagram,
          blurb: user.blurb,
        });
      } else {
        return res.status(200).send({
          msg: "Meetable user exists",
          id: user._id,
          snapchat: user.snapchat,
          instagram: user.instagram,
          blurb: user.blurb,
        });
      }
    }
    //create new user and update responses with uid
    const u = new User({
      name: req.body.name,
      avatar: req.body.profileImage,
      authid: req.body.authid,
      email: req.body.email,
    });
    console.log(u);
    const us = u.save();
    console.log("updating responses");
    const docs = await Response.update({qid: req.body.qid}, {uid: us._id})
    console.log(docs);


    res
      .status(200)
      .send({
        msg: "Meetable user created responses updated with quizid required",
        id: user._id,
      });
  } catch (err) {
    console.log(err);
    res.status(500).send(JSON.stringify(err));
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
router.get("/getById/:id", async (req, res) => {
  const user = await User.findOne({ _id: req.params.id });
  res.json({ success: true, user });
});

/**
 * @api {get} /users/getgroupsbyuserid/:uid Get User by Id
 * @apiName GetUserById
 * @apiGroup User
 * @apiSuccess {Object[]} groups The list of groups joined by specified user.
 * @apiParam {String} uid The user's id
 * @apiError (500) {Object} Error Should never occur even if user has no groups.
 */
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
    res.send(groups);
  } catch (err) {
    console.error(err.message);
    res.status(500).send(err);
  }
});

/**
 * @api {put} /users/updateprofile/ Update User Profile with arbitrary number of attributes
 * @apiName UpdateProfile
 * @apiGroup User
 * @apiSuccess {String} message Success message.
 * @apiParam {String} uid The user's id
 * @apiParam {any} any Any attribute specified in User model
 * @apiError (500) {Object} ValidationError Specified attributes invalid for specified reasons.
 */
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
    const newUser = {
      uid: body.uid,
      instagram: body.instagram,
      snapchat: body.snapchat,
      blurb: body.blurb,
      avatar: body.avatar,
      facebook: body.facebook,
    };
    console.log(newUser);
    const uid = body.uid;
    const user = await User.findOneAndUpdate({ _id: uid }, newUser);

    res.status(200).send({ msg: "Success", user });
  } catch (err) {
    console.log(err);
    console.error(err.message);
    res.status(500).send(err);
  }
});

/**
 * @api {put} /users/group/ Put User in Group
 * @apiName GroupUser
 * @apiGroup User
 * @apiSuccess {Object[]} group The group that user was put in, populated with users.
 * @apiParam {String} uid The user's id
 * @apiError (500) {Object} Error Any error resulting from bad state, not inputs to this endpoint.
 */
router.put("/group", async (req, res) => {
  const NUM_ADDITIONAL_CRITERIA = 3;
  try {
    const body = req.body;
    const uid = body.uid;

    const hasTakenQuiz = await QuizInstance.findOne({ uid });
    if (!hasTakenQuiz) {
      res.send({ msg: "User has not taken quiz", success: false });
    }

    user = await User.findOne({ _id: uid });
    group = await Group.findOne({ full: false });
    if (group == null) {
      // create a new group and join it
      year = await Response.findOne({
        uid: user._id,
        question: "What year are you going into?",
      });
      major = await Response.findOne({
        uid: user._id,
        question: "What is your intended major?",
      });
      console.log(year);
      console.log(major);

      if (year && major) {
        group = new Group({ name: [year.answer, major.answer] });
        user.groups.push(group._id);
        group.members.push(uid);
      }
    } else {
      const nonFullGroups = await Group.find({ full: false })
        .populate("members");
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
        const year = await Response.findOne({
          uid: user._id,
          question: "What year are you going into?",
        });
        const major = await Response.findOne({
          uid: user._id,
          question: "What is your intended major?",
        });
        console.log(year, major);
        if (year && major) {
          group = new Group({ name: [year.answer, major.answer] });
          user.groups.push(group._id);
          group.members.push(uid);
        }
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
  const user2Responses = await Response.find({ uid: user2._id }).lean().sort({
    dateCreated: 1,
  });

  console.log(userResponses);
  console.log(user1Responses);

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
