const express = require('exprses');
const Question = require('../models/Question');
const router = express.router()

router.get('/', async (req, res) => {
    const questions = await Question.find()
    res.status(200).send({
        success:true,
        questions
    })
})


module.exports = router;