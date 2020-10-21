const express = require("express");
const Group = require("../models/Group");
const router = express.Router();

// @route    GET api/groups
// @desc     Get all groups
// @access   Private
/**
 * @api {get} /groups/ Get all groups
 * @apiName GetGroups
 * @apiGroup Group
 * @apiSuccess {Object[]} groups All groups in collection.
 */
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
        const group = await Group.findOne({ _id: req.params.id }).populate("members");
        res.status(200).send(group);
    } catch (err) {
        console.error(err.message);
        res.status(500).send(err);
    }
});
/**
* @api {delete} /groups/ Delete a group
* @apiName DeleteGroup
* @apiGroup Group
* @apiParam {String} id Group id 
* @apiSuccess {String} message Sucess message.
*/
router.delete('/byid', async (req, res) => {
    try {
        await Group.deleteOne({ _id: req.body.id });
        res.status(200).send('success');
    } catch (err) {
        console.error(err.message);
        res.status(500).send(err);
    }
});

/**
 * @api {put} /groups/ Removes all duplicate users from all groups
 * @apiName PruneGroups
 * @apiGroup Group
 * @apiSuccess  200 OK
 */
router.put("/prune", async (req, res) => {
    console.log("prune");
    console.log("hello");
    let count = 0;
    let promises = [];
    let groups = await Group.find({});
    console.log(groups);
    groups.forEach(document => {
        let unique = new Set();
        let flag = false;
        document.members.filter((user) => {
            if (unique.has(user)) {
                flag = true;
                return false;
            }
            else {
                unique.add(user);
                return true;
            }
        });
        promises.push(document.save());
        if (flag) count++;
    });
    await Promise.all(promises);
    console.log(`${count} groups pruned`);


    res.status(200).send(`${count} groups pruned`);
})







module.exports = router;