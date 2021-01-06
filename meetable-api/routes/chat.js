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
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 * [
    {
        "_id": "5fd411b9965e402f099d6a61",
        "text": "hi",
        "uid": "5f590bb03cb7430017a84b47",
        "dateCreated": "2020-12-12T00:41:29.029Z",
        "__v": 0
    },
    {
        "_id": "5fd411b1965e402f099d6a60",
        "text": "hello",
        "uid": "5f590bb03cb7430017a84b47",
        "dateCreated": "2020-12-12T00:41:21.750Z",
        "__v": 0
    },
    {
        "_id": "5fd41112965e402f099d6a5f",
        "text": "hello",
        "uid": "5f590bb03cb7430017a84b47",
        "dateCreated": "2020-12-12T00:38:42.879Z",
        "__v": 0
    }
]
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
* @api {delete} /chat/ Delete specified message from specified group; if message not in group do nothing
* @apiName DeleteMessage
* @apiGroup Chat
* @apiParam {String} mid message _id
* @apiParam {String} gid group _id
* @apiSuccess {String} message Success message.
* @apiError (500) {Object} Error group not found.
*/
router.delete('/delete', async (req, res) => {
    try {
        let group = await Group.findOne({ _id: req.body.gid });
        let index = group.messages.indexOf(req.body.mid);
        if (index !== -1) {
            group.messages.splice(index, 1);
            // delete only if message belongs to group
            ChatMessage.deleteOne({ _id: req.body.mid });
        }
        group.save();
        res.status(200).send('success');
    } catch (err) {
        console.error(err.message);
        res.status(500).send(err);
    }
});


module.exports = router;