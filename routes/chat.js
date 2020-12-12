const express = require("express");
const router = express.Router();
const ChatMessage = require('../models/ChatMessage');
const Group = require('../models/Group');

// tested, works, 11/12/2020
/**
 * @api {get} /chat/ Get All ChatMessage
 * @apiName GetChatMessages
 * @apiGroup Chat
 * @apiSuccess {Object[]} forms All chat messages in collection.
 */
router.get('/', async (req, res) => {
    const messages = await ChatMessage.find();
    res.json(messages);
});


// tested, works, 11/12/2020, but need to do more in-detail tests
/*
this endpoint would benefit from unit testing, maybe move all the logic to a fn, then make
another endpoint that creates some synthetic data to test on and calls the fn, and use asserts
*/

/**
 * @api {get} /chat/gid Get ChatMessages By group id
 * @apiName GetMessagesByGroup
 * @apiGroup Chat
 * @apiParam {String} gid the group's database id
 * @apiParam {Number} period The number of days before end date to fetch messages for
 * @apiParam {Number} end The number of days before present of end date
 * @apiSuccess {Object[]} messages array of ChatMessage, reverse chronological
 */
router.get('/gid/', async (req, res) => {
    const group = await Group.findOne({ _id: req.body.gid }).lean();
    const actualDate = new Date();
    const endOfToday = new Date(actualDate.getFullYear()
                           ,actualDate.getMonth()
                           ,actualDate.getDate()
                           ,23,59,59); 
    let earliest = new Date();
    let latest = new Date();
    latest.setDate(endOfToday.getDate() - req.body.end);
    earliest.setDate(latest.getDate() - req.body.period);

    let result = [];
    // assumes that items in group.messages ordered from oldest to newest
    for (i = group.messages.length - 1; i >= 0; i--) {
        const msg = await ChatMessage.findOne({_id: group.messages[i]}).lean();
        if (msg.dateCreated > latest) {
            continue;
        }
        if (msg.dateCreated < earliest) {
            break;
        } else {
            result.push(msg);
        }
    }
    res.status(200).send(result);
});

// tested, works, 11/12/2020
/**
* @api {delete} /chat/ Delete a message
* @apiName DeleteMessage
* @apiGroup Chat
* @apiParam {String} mid message _id
* @apiParam {String} gid group _id
* @apiSuccess {String} message Sucess message.
*/
router.delete('/delete', async (req, res) => {
    try {
        // does this need to await?
        await ChatMessage.deleteOne({ _id: req.body.mid });
        let group = await Group.findOne({ _id: req.body.gid });
        let index = group.messages.indexOf(req.body.mid);
        if (index !== -1) {
            group.messages.splice(index, 1);
        }
        group.save();
        res.status(200).send('success');
    } catch (err) {
        console.error(err.message);
        res.status(500).send(err);
    }
});


module.exports = router;