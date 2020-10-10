const express = require("express");
const QuizInstance = require("../models/QuizInstance");
const { generateResponse } = require("./responses");
const Quiz = require("../models/Quiz");
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
    for (let i = 0; i < quiz.responses.length; i++) {
      quiz.responses[i].uid = req.body.uid;
      await quiz.responses[i].save(); // saving populated doc does not save subdocs

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
 * @apiSuccess {Object} quiz The quiz posted.
 * @apiError (500) ValidationError No apparent causes.
 */
router.post("/", async (req, res) => {
  const body = req.body;
  //const uid = body.uid;
  // const quiz = await Quiz.find({name: "hardcoded"}) not needed for MVP
  console.log("making quiz instanse");
  const q = new QuizInstance({
    //uid: uid,
    //quiz: quiz
  });

  try {
    const quiz = await q.save();
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

/*
// assuming client sends back finished quiz instance
// unsure if user should be added to a group here or in groups.js
router.post('/submitcomplete', async (req,res)=>{
    const body = req.body
    const quizInstance = body.quizInstance
    const uid = body.uid



})
*/

module.exports = router;
