import Question from "../models/Question";
import Quiz from "../models/Quiz";
import Response from "../models/Response";

const mongoose = require("mongoose");
const express = require("express");
const router = express.router();

export const generateResponse = async (uid, qid) => {
  const questions = await Question.find();
  const quiz = await Quiz.findOne({ qid }).lean();
  const usedQuestions = [];
  quiz.responses.forEach((response) => {
    questions.indexOf(response.question._id)
    usedQuestions.push(response.question._id);
  });

  const r = new Response({
    uid,
    qid,
  });

  const response = await r.save();
  return response;
};

module.exports = router