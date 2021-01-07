const express = require("express");
const Question = require("../models/Question");

const router = express.Router();

router.get("/", async (req, res) => {
  const questions = await Question.find();
  res.status(200).send({
    success: true,
    questions,
  });
});

module.exports = router;
