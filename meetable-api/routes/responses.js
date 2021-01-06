const Question = require("../models/Question");
const QuizInstance = require("../models/QuizInstance");
const Response = require("../models/Response");

const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

// @route    PUT api/responses
// @desc     update a user's quiz responses by adding a response
// @access   Private

/**
 * @api {put} /responses/ Put Response in Quiz
 * @apiName PutResponse
 * @apiGroup Response
 * @apiParam {String} quizid Quiz instance id
 * @apiParam {String} question Question text
 * @apiParam {String} answer Answer text
 * @apiSuccess {String} message Success Message.
 * 
 * @apiError (500) ValidationError The given attributes are invalid.
 */
router.put("/", async (req, res) => {
  console.log("answer!");
  try {
    const body = req.body;
    /*
    {uid: ...,
    quizid: ...,
    question: "...",
    answer: "...",
    }
    */
    const quizid = body.quizid;
    const response = new Response({
      qid: quizid,
      question: body.question,
      answer: body.answer,
    });

    await response.save();

    quizInstance = await QuizInstance.findOne({ _id: body.quizid });
    quizInstance.responses.push(response._id);
    await quizInstance.save();
    res.status(200).send({
      success:true,
      quizInstance,
      response
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send(err);
  }
});

module.exports = router;
