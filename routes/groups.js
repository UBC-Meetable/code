const express = require("express");
const Group = require("../models/Group");
const router = express.Router();

// @route    GET api/groups
// @desc     Get all groups
// @access   Private
router.get('/', async (req, res) => {
    try {
        const groups = await Group.find();
        res.json(groups);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
  });



module.exports = router;