/* eslint-disable no-underscore-dangle */
/* eslint-disable no-await-in-loop */
const express = require("express");
const QuizInstance = require("../models/QuizInstance");
const { generateResponse } = require("./responses");
const Quiz = require("../models/Quiz");
const { User } = require("../models/User");

const router = express.Router();

/**
 * @api {get} /quizs/ Get All Quizzes
 * @apiName GetQuizzes
 * @apiGroup Quiz
 * @apiSuccess {Object} quizzes All quizzes in collection.
 */
router.get("/", async (req, res) => {
  const quizes = await QuizInstance.find();
  res.status(200).send({
    success: true,
    quizes,
  });
});

/**
 * @api {get} /quizs/byid/ Get Quiz by User id
 * @apiName GetQuizByUserId
 * @apiGroup Quiz
 * @apiParam {String} uid User id
 * @apiSuccess {Object} quiz The quiz with id.
 */
router.get("/byid", async (req, res) => {
  const quiz = await QuizInstance.findOne({ uid: req.body.uid });
  res.status(200).send({
    success: true,
    quiz,
  });
});

/**
 * @api {put} /quizs/byid/ Update Quiz Add User id
 * @apiName AddIdToQuiz
 * @apiGroup Quiz
 * @apiParam {String} qid Quiz id
 * @apiParam {String} uid User id
 * @apiSuccess {Object} quiz The quiz modified.
 * @apiError (500) ValidationError The given id is invalid.
 */
router.put("/byid", async (req, res) => {
  try {
    const quiz = await QuizInstance.findOne({ _id: req.body.qid }).populate("responses");
    quiz.uid = req.body.uid;
    for (let i = 0; i < quiz.responses.length; i += 1) {
      quiz.responses[i].uid = req.body.uid;
      await quiz.responses[i].save(); // saving populated doc does not save subdocs
      // can speed this up by awaiting all the promises at the end
    }
    await quiz.save();
    res.status(200).send({
      success: true,
      quiz,
    });
  } catch (err) {
    res.status(500).send(err);
  }
});

/**
 * @api {post} /quizs/ Post New Quiz Instance
 * @apiName PostNewQuiz
 * @apiGroup Quiz
 * @apiParam {Object} responses Mapping where property is question, value is answer
 * @apiParam {String} uid User id
 * @apiSuccess {Object} quiz The quiz posted.
 * @apiError (500) ValidationError No apparent causes.
 */
router.post("/", async (req, res) => {
  try {
    const responses = new Map();
    req.body.responses.forEach((response) => {
      responses.set(response.title, response.response);
    });
    console.log(req.body.uid);
    const user = await User.findOne({ authid: req.body.uid });
    const q = new QuizInstance({
      uid: user._id,
      responses,
    });
    console.log(q);
    console.log(user.name);
    console.log(user.quizInstances);
    user.quizInstances.push(q._id);
    user.save().catch((err) => { res.status(500).send(err); });
    const quiz = await q.save();
    console.log("success");
    res.status(200).send({
      success: true,
      quizInstance: quiz,
    });
  } catch (error) {
    res.send({
      success: false,
      error: JSON.stringify(error),
    });
  }
});

module.exports = router;
