/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-underscore-dangle */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable consistent-return */
const express = require("express");

const router = express.Router();
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { check, validationResult, body } = require("express-validator");
const normalize = require("normalize-url");
const User = require("../models/User");
const Group = require("../models/Group");
const CourseGroup = require("../models/CourseGroup");
const QuizInstance = require("../models/QuizInstance");
// const major = require("./major");

/**
 * @api {post} /users/ Post User
 * @apiName PostUser
 * @apiGroup User
 * @apiSuccess {Object} user The User Posted.
 * @apiParam {String} name The user's name
 * @apiParam {String} profileImage profile picture URL
 * @apiParam {String} authid The user's auth0 id
 * @apiParam {String} email The user's email
 * @apiError (500) {Object} ValidationError
 *           The specified attributes are invalid for the specified reasons.
 * @apiError (400) {String} UserExists The posted user already exists.
 */
router.post("/", async (req, res) => {
  try {
    console.log(req.body);
    const userInfo = {};
    for (const attribute in req.body) {
      userInfo[attribute] = req.body[attribute];
    }
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
      }
      return res.status(200).send({
        msg: "Meetable user exists",
        id: user._id,
        snapchat: user.snapchat,
        instagram: user.instagram,
        blurb: user.blurb,
      });
    }
    user = new User({
      authid: userInfo.authid,
      name: userInfo.name,
    });
    for (const attribute in userInfo) {
      user[attribute] = userInfo[attribute];
    }
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
 * @api {get} /users/getById/:id Get User by Id
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
 * @api {get} /users/getByEmail Get User by email
 * @apiName GetUserByEmail
 * @apiGroup User
 * @apiSuccess {Object} The User.
 * @apiParam {String} email The user's email
 */
router.get("/getByEmail", async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  res.send(user);
  // res.json({ success: true, user });
});

/**
 * @api {get} /users/getgroupsbyuserid/:uid Get User's Groups by Id
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
    const groups = [];
    for (let i = 0; i < groupIds.length; i += 1) {
      const group = await Group.findOne({ _id: groupIds[i] }).populate("members");
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
 * @apiSuccess {Object} message Object with success message and user object.
 * @apiParam {String} uid The user's id
 * @apiParam {any} any Any attribute specified in User model
 * @apiError (500) {Object} ValidationError Specified attributes invalid for specified reasons.
 */
router.put("/updateprofile", async (req, res) => {
  try {
    const { body } = req;
    /* body
  {uid: ...,
  instagram: "...",
  snapchat: "...",
  ...,
  blurb: "...",
  email: "..."}
  */

    const newUser = {
      /*
      uid: body.uid,
      instagram: body.instagram,
      snapchat: body.snapchat,
      blurb: body.blurb,
      avatar: body.avatar,
      facebook: body.facebook,
      name: body.name
      */
    };
    for (const attr in body) {
      newUser[attr] = body[attr];
    }
    console.log(newUser);
    const { uid } = body;
    const user = await User.findOneAndUpdate({ _id: uid }, newUser, { new: true });

    res.status(200).send({ msg: "Success", user });
  } catch (err) {
    console.log(err);
    console.error(err.message);
    res.status(500).send(err);
  }
});

/**
 * @api {get} /users/courseGroup/ get user's course groups
 * @apiName GetCourseGroups
 * @apiGroup User
 * @apiSuccess {Object[]} groups The course group(s) that user was put in or undefined
 * TODO: determine if course groups should be deep-populated
 * @apiParam {String} uid The user's id
 */
router.get("/courseGroup", async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.body.uid }).populate("courseGroups");
    res.send(user.courseGroups); // .send, .json, does it matter?
  } catch (err) {
    res.status(500).send(err);
  }
});

/**
 * @api {put} /users/courseGroup/ Put User in course groups
 * @apiName GroupUserCourses
 * @apiGroup User
 * @apiSuccess {Object[]} groups The group(s) that user was put in.
 * TODO: determine if course groups should be deep-populated
 * @apiParam {String} uid The user's id
 */
router.put("/courseGroup", async (req, res) => {
  const { uid } = req.body;
  const user = await User.findOne({ _id: uid }).populate("courseGroups");
  for (const course of user.courses) {
    let grouped = user.courseGroups.some(cg => cg.courseCode === course);
    if (!grouped) {
      let newCourseGroup = await CourseGroup.findOne({ courseCode: course, school: user.school });
      if (newCourseGroup == null) {
        newCourseGroup = new CourseGroup({ courseCode: course, school: user.school });
      }
      newCourseGroup.members.push(uid);
      user.courseGroups.push(newCourseGroup._id);
      newCourseGroup.save().catch((err) => {
        console.log(err);
      });
    }
  }
  user.save().catch((err) => {
    console.log(err);
  });
  // shallow populate, frontend can send further get requests if needed
  await user.populate("courseGroups").execPopulate(); // not sure if doc can be populated twice
  res.status(200).json(user);
});

/**
 * @api {delete} /users/courseGroup/ remove user from a course group
 * @apiName DeleteUserCourseGroup
 * @apiGroup User
 * @apiSuccess {String} message A success message.
 * @apiParam {String} courseCode The course code of the course group to remove user from
 * @apiParam {String} uid The user's id
 * @apiError (500) {Object} message user was not in specified course group
 */
router.delete("/courseGroup", async (req, res) => {
  const { uid } = req.body;
  const course = req.body.courseCode;
  const user = await User.findOne({ _id: uid });
  try {
    const courseGroup = await CourseGroup.findOne({ courseCode: course, school: user.school });
    let index = courseGroup.members.indexOf(uid);
    // assumptions rule out need for if (index !== -1) guard
    courseGroup.members.splice(index, 1);
    index = user.courseGroups.indexOf(courseGroup._id);
    user.courseGroups.splice(index, 1);
    user.save();
    courseGroup.save();
    res.status(200).send(user);
  } catch (err) {
    console.log(err);
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
    const { body } = req;
    const { uid } = body;

    const quizInstance = await QuizInstance.findOne({ uid }).populate("responses");
    if (!quizInstance) {
      res.send({ msg: "User has not taken quiz", success: false });
    }

    const user = await User.findOne({ _id: uid });
    if (user.groups.length !== 0) {
      res.send({ msg: "User is already in group", success: false });
    }
    let group = await Group.findOne({ full: false });
    if (group == null) {
      // create a new group and join it
      group = new Group({ name: [user.year, user.school] });
      user.groups.push(group._id);
      group.members.push(uid);
    } else {
      const nonFullGroups = await Group.find({ full: false })
        .lean()
        .populate("members");
      // find most compatible user out of all users in non-full groups
      let mostCompatibleUser = null;
      let mostCompatibleUserResponses = null
      for (let nonFullGroup of nonFullGroups) {
        const tempGroup = nonFullGroup.members;
        for (let candidate of tempGroup) {
          try {
            let candidateResponses = await QuizInstance.findOne({ uid: candidate._id });
            if (moreCompatible(quizInstance, candidateResponses, mostCompatibleUserResponses)) {
              mostCompatibleUser = candidate;
              mostCompatibleUserResponses = await QuizInstance.findOne({ uid: mostCompatibleUser._id });
            }
          } catch (err) {
            console.log(err);
            console.log("Missing data encountered, continuing to next iteration");
          }
        }
      }

      // if minimum compatibility criteria not met by any user
      if (mostCompatibleUser == null) {
        // create a new group and join it
        group = new Group({ name: [user.year, user.school] });
        user.groups.push(group._id);
        group.members.push(uid);
      } else {
        // join compatible user's group
        group = await Group.findOne({ _id: mostCompatibleUser.groups[0] });
        user.groups.push(group._id);
        group.members.push(uid);
        // update full? status as necessary
        if (group.members.length === group.maxSize) group.full = true;
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

// QuizInstance, QuizInstance, QuizInstance -> boolean, return whether user1 is more compatible with user than user 2
function moreCompatible(qi, qi1, qi2) {
  const MIN_SCORE = 2;
  if (qi2 == null) {
    return true;
  }
  const userResponses = qi.responses;
  const user1Responses = qi1.responses;
  const user2Responses = qi2.responses;
  let user1Score = 0;
  let user2Score = 0;
  for (let [q, a] of userResponses) {
    if (a === user1Responses.get(q)) user1score += 1;
    if (a === user2Responses.get(q)) user2score += 1;
  }
  if (user1Score > user2Score && user1Score >= MIN_SCORE) return true;
  return false;
}

function hasUser(tempGroup, authid) {
  for (let i = 0; i < tempGroup.length; i += 1) {
    if (tempGroup[i].authid === authid) return true;
  }
  return false;
}

router.put("/inject", async (req, res) => {
  const users = await User.find({});
  const promises = [];
  users.forEach((document) => {
    if (typeof document.courses === "undefined") {
      document.courses = [];
    }
    if (typeof document.courseGroups === "undefined") {
      document.courseGroups = [];
    }
    promises.push(document.save());
  });
  await Promise.all(promises);
  res.status(200).send("attributes added");
});

module.exports = router;
