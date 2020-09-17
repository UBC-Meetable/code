const express = require("express");
const router = express.Router();
const User = require('../models/User');
const Form = require('../models/Form');


/**
 * @api {get} /forms/ Get All Forms
 * @apiName GetForms
 * @apiGroup Form
 * @apiSuccess {Object[]} forms All forms in collection.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     [
 *          {
 *          "uid": "...",
 *          "text": "..."
 *          },
 *          {
 *          }
 *     ]
 *
 */
router.get('/', async (req, res) => {
    const forms = await Form.find();
    res.json(forms);
});


/**
 * @api {get} /forms/:uid Get Forms Of User
 * @apiName GetUserForms
 * @apiGroup Form
 * @apiSuccess {Object[]} form Forms of user.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     [
 *          {
 *          "uid": "...",
 *          "text": "..."
 *          },
 *          {
 *          }
 *     ]
 *
 */
router.get('/:uid', async (req, res) => {
    const forms = await Form.find({uid: req.params.uid});
    res.json(forms);
});

/**
 * @api {get} /forms/:email Get Forms By Email
 * @apiName GetUserFormsByEmail
 * @apiGroup Form
 * @apiSuccess {Object[]} form Forms With Given Email.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     [
 *          {
 *          "uid": "...",
 *          "text": "..."
 *          },
 *          {
 *          }
 *     ]
 *
 */
router.get('/:email', async (req, res) => {
    const forms = await Form.find({email: req.params.email});
    res.json(forms);
});

/**
 * @api {post} /forms/ Post Form
 * @apiName PostForm
 * @apiGroup Form
 * @apiSuccess {String} message Success Message.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     [
 *          {
 *          "uid": "...",
 *          "text": "..."
 *          },
 *          {
 *          }
 *     ]
 *
 */
router.post('/', async (req, res) => {
    try {
    let form = new Form({
        text: req.body.text, 
        uid: req.body.uid,
        email: req.body.email,
    });
    await form.save();
    res.status(200).send("form saved successfully");
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});



module.exports = router;