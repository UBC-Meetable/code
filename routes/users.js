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

// add user for testing purposes
router.post("/test", async (req, res) => {
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
        return res
          .status(200)
          .send({
            msg: "Meetable user exists additional steps required",
            id: user._id,
            snapchat: user.snapchat,
            instagram: user.instagram,
            blurb: user.blurb,
          });
      } else {
        return res
          .status(200)
          .send({
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
    
    res.status(200).send({ msg: "Meetable user exists additional steps required", id: user._id });
  } catch (err) {
    console.log(err);
    res.status(500).send(JSON.stringify(err));
  }
});

// @route    POST api/users
// @desc     Register user
// @access   Public
router.post(
  "/",
  [
    check("name", "Name is required").not().isEmpty(),
    check("email", "Please include a valid email").isEmail(),
    check(
      "password",
      "Please enter a password with 6 or more characters"
    ).isLength({ min: 6 }),
    check("profilePicture", "Valid profile image").optional().isString(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      name,
      email,
      password,
      profileImage,
      school,
      major,
      year,
    } = req.body;

    console.log(req.body);

    try {
      let user = await findOne({ email });

      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "User already exists" }] });
      }

      user = new User({
        name,
        email,
        avatar: profileImage,
        password,
        school,
        year,
        major,
      });

      const salt = await genSalt(10);

      user.password = await hash(password, salt);

      await user.save();

      const payload = {
        user: {
          id: user.id,
        },
      };

      payload.user.id;

      sign(
        payload,
        process.env.jwtSecret,
        { expiresIn: "5 days" },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  }
);

// @route    GET api/users
// @desc     Get all users
// @access   Private
router.get("/", async (req, res) => {
  const users = await User.find();
  res.json({ success: true, users });
});
router.get("/getById/:id", async (req, res) => {
  const user = await User.findOne({ _id: req.params.id });
  res.json({ success: true, user });
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
    res.send(groups);
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
    const newUser = {
      uid: body.uid,
      instagram: body.instagram,
      snapchat: body.snapchat,
      blurb: body.blurb,
      avatar: body.avatar,
    };
    console.log(newUser);
    const uid = body.uid;
    const user = await User.findOneAndUpdate({ _id: uid }, newUser)

    res.status(200).send({ msg: "Success", user });
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
      year = await Response.findOne({
        uid: user._id,
        question: "What year are you going into?",
      });
      major = await Response.findOne({
        uid: user._id,
        question: "What is your intended major?",
      });
      group = new Group({ name: [year.answer, major.answer] });
      user.groups.push(group._id);
      group.members.push(uid);
    } else {
      const nonFullGroups = await Group.find({ full: false }).lean().populate(
        "members"
      ); //try with lean
      // find most compatible user out of all users in non-full groups
      mostCompatibleUser = null;
      for (let i = 0; i < nonFullGroups.length; i++) {
        let tempGroup = nonFullGroups[i].members;
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
        group = new Group({ name: [year.answer, major.answer] });
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

module.exports = router;
