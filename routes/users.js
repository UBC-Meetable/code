import { Router } from 'express';
const router = Router();
import gravatar from 'gravatar';
import { genSalt, hash } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { check, validationResult, body } from 'express-validator';
import normalize from 'normalize-url';

import User, { findOne, find } from '../models/User';

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

router.get('/', async (req, res)=>{
  const users = await find()
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

export default router;
