const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { check, validationResult, body } = require('express-validator');
const normalize = require('normalize-url');

const User = require('../models/User');
const Group = require('../models/Group');
const { count } = require('../models/Group');

const NUM_ADDITIONAL_CRITERIA = 3;

// add user for testing purposes
router.post('/test', async (req, res) => {
  try {
    const { name, email, password, profileImage, school, major, year } = req.body;
    user = new User({
      name,
      email,
      avatar: profileImage,
      password,
    });
    await user.save();
    res.json(user._id);
  } catch (err) {
    console.log(err);
    res.status(400);
  }
});

// @route    POST api/users
// @desc     Register user
// @access   Public
router.post(
  '/',
  [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check(
      'password',
      'Please enter a password with 6 or more characters'
    ).isLength({ min: 6 }),
    check('profilePicture', "Valid profile image").optional().isString()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password, profileImage, school, major, year } = req.body;
    
    console.log(req.body);

    try {
      let user = await findOne({ email });

      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'User already exists' }] });
      }

      user = new User({
        name,
        email,
        avatar: profileImage,
        password,
        school,
        year,
        major
      });

      const salt = await genSalt(10);

      user.password = await hash(password, salt);

      await user.save();

      const payload = {
        user: {
          id: user.id
        }
      };

      payload.user.id

      sign(
        payload,
        process.env.jwtSecret,
        { expiresIn: '5 days' },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);


// @route    GET api/users
// @desc     Get all users
// @access   Private
router.get('/', async (req, res)=>{
  const users = await User.find()
  res.json({success:true, users})

})

// @route    GET api/users
// @desc     Get group(s) which user is part of
// @access   Private
router.get('/getgroupsbyuserid', async (req, res) => {
  try {
    const groups = await find({_id : req.body.uid}).populate("groups");
    res.json(groups);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Error getting user groups');
  }
});

// @route    PUT api/users
// @desc     update user profile information
// @access   Private
// how to validate email?
router.put('/updateprofile', async (req, res) => {
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
  const user = await User.find({_id: uid});
  for (const attr in body) {
    user[attr] = body[attr];
  }
  user.save();
  res.status(200).send("Success");
  } catch (err) {
  console.error(err.message);
  res.status(500).send("Error updating profile");
  } 
});

// @route    PUT api/users
// @desc     put user in a group (modify later to allow multiple groups)
// @access   Private
router.put('/group', async (req, res) => {
  try {
    const body = req.body;
    const uid = body.uid;
    const user = await User.find({id_: uid});
    const quizInstance = await QuizInstance.find({uid: uid});
    const responses = quizInstance.resposes;
    groupName = [];
    groupName.push(responses[0].answer); // year
    groupName.push(responses[1].answer); // major

    count = 0;
    while (count < NUM_ADDITIONAL_CRITERIA) {
      random = responses[Math.floor(Math.random() * responses.length)].answer;
      if (!groupName.includes(random)) {
        groupName.push(random);
        count++;
      }
    }

    group = {};
    await Group.findOne({name: groupName, full: false}, (err, result) => {
      if (result == null) {
        group = new Group({name: groupName,});
        user.groups.push(group._id);
        group.memberids.push(uid);
      } else {
        group = result;
        user.groups.push(group._id);
        group.memberids.push(uid);
      }
      if (group.memberids.length == group.maxSize) group.full = true; 
    });
    res.status(200).send("Success");
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Error placing user in group");
  }

});


module.exports = router;
