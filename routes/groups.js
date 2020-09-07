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

router.get('/byid/:id', async (req, res) => {
    try {
        const group = await Group.findOne({_id: req.params.id}).populate("members");
        res.status(200).send(group);
    } catch (err) {
        console.error(err.message);
        res.status(500).send(err);
    }
});
router.delete('/byid', async (req, res) => {
    try {
        await Group.deleteOne({_id: req.body.id});
        res.status(200).send('success');
    } catch (err) {
        console.error(err.message);
        res.status(500).send(err);
    }
});







module.exports = router;