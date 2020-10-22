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
    user = new User({
      name: req.body.name,
      avatar: req.body.profileImage,
      authid: req.body.authid,
      email: req.body.email,
    });
    console.log(user);
    await user.save();

    res.status(200).send({
      msg: "Meetable user exists additional steps required",
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

/**
 * @api {get} /users/getgroupsbyuserid/:uid Get User by Id
 * @apiName GetUserById
 * @apiGroup User
 * @apiSuccess {Object} The User.
 * @apiParam {String} uid The user's id
 */
router.get("/getById/:id", async (req, res) => {
  const user = await User.findOne({ _id: req.params.id });
  res.json({ success: true, user });
});

/**
 * @api {get} /users/getgroupsbyuserid/:uid Get User by Id
 * @apiName GetUserGroupsById
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
    res.status(500).send("Error getting user groups");
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
      name: body.name
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
  console.log("put group");
  const NUM_ADDITIONAL_CRITERIA = 3;
  try {
    const body = req.body;
    const uid = body.uid;

    const quiz = await QuizInstance.findOne({ uid: uid }).populate("responses");
    if (!quiz) {
      res.send({ msg: "User has not taken quiz", success: false });
    }


    user = await User.findOne({ _id: uid });
    if (user.groups.length != 0) {
      res.send({ msg: "User is already in group", success: false }); 
    }
    group = await Group.findOne({ full: false });
    if (group == null) {
      // create a new group and join it
      year = null;
      major = null;
      for (const response of quiz.responses) {
        console.log(response);
        if (response.question === "What year are you going into?")
          year = response.answer;
        if (response.question === "What is your intended major?")
          major = response.answer;
      }
      if (year == null || major == null)
        res.send({ msg: "Year or Major unknown", success: false });
      group = new Group({ name: [year, major] });
      user.groups.push(group._id);
      group.members.push(uid);
    } else {
      const nonFullGroups = await Group.find({ full: false })
        .lean()
        .populate("members");
      // find most compatible user out of all users in non-full groups
      mostCompatibleUser = null;
      for (let i = 0; i < nonFullGroups.length; i++) {
        let tempGroup = nonFullGroups[i].members;
        //if (hasUser(tempGroup, user.authid)) continue;
        for (let j = 0; j < tempGroup.length; j++) {
          try {
            if (await moreCompatible(user, tempGroup[j], mostCompatibleUser))
              mostCompatibleUser = tempGroup[j];
          } catch (err) {
            console.log(err);
            console.log(
              "Missing data encountered, continuing to next iteration"
            );
          }
        }
      }

      // if minimum compatibility criteria not met by any user
      if (mostCompatibleUser == null) {
        // create a new group and join it
        year = null;
        major = null;
        for (const response of quiz.responses) {
          if (response.question === "What year are you going into?")
            year = response.answer;
          if (response.question === "What is your intended major?")
            major = response.answer;
        }
        if (year == null || major == null)
          res.send({ msg: "Year or Major unknown", success: false });
        group = new Group({ name: [year, major] });
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
  //const userResponses = await QuizInstance.findOne({uid: user._id}).lean().populate("responses");
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
