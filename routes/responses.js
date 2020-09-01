
const Question = require("../models/Question")
const QuizInstance = require('../models/QuizInstance')
const Response = require('../models/Response')

const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

// @route    PUT api/responses
// @desc     update a user's quiz responses by adding a response
// @access   Private
router.put('/', async (req, res) => {
    try {
    const body = req.body;
    /*
    {uid: ...,
    quizid: ...,
    question: "...",
    answer: "...",
    }
    */
    const uid = body.uid;
    const response = new Response({uid: uid, 
        question: body.question, 
        answer: body.answer});
    response.save();
    quizInstance = await QuizInstance.find({_id: body.quizid});
    quizInstance.responses.push(response._id);
    res.status(200).send("Success");
    } catch (err) {
    console.error(err.message);
    res.status(500).send("Error saving response");
    } 
  });

module.exports = router