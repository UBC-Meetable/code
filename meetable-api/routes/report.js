const express = require("express");

const router = express.Router();
const ReportForm = require("../models/ReportForm");
const ChatMessage = require("../models/ChatMessage");
const User = require("../models/User");

/**
* @api {post} /report/user report a user
* @apiName ReportUser
* @apiGroup Report
* @apiParam {String} reportedUid _id of reported user
* @apiParam {String} uid _id of reporting user
* @apiParam {String} text details of report
* @apiSuccess {Object} report The report object.
* @apiError (500) {Object} Error could not save (validation).
*/
router.post("/user", async (req, res) => {
  const report = new ReportForm({
    uid: req.body.uid,
    reportedUid: req.body.reportedUid,
    text: req.body.text,
  });
  await report.save().catch((err) => {
    console.error(err);
    res.status(500).send(err);
  }).then(() => {
    res.status(200).send(report);
  });
});

/**
* @api {post} /report/message report a message
* @apiName ReportMessage
* @apiGroup Report
* @apiParam {String} reportedUid _id of reported user
* @apiParam {String} uid _id of reporting user
* @apiParam {String} text details of report
* @apiParam {String} reportedMessage _id of reported message
* @apiSuccess {Object} report The report object.
* @apiError (500) {Object} Error could not save (validation).
*/
router.post("/message", async (req, res) => {
  const report = new ReportForm({
    uid: req.body.uid,
    reportedUid: req.body.reportedUid,
    text: req.body.text,
    reportedMessage: req.body.reportedMessage,
  });
  await report.save().catch((err) => {
    console.error(err);
    res.status(500).send(err);
  }).then(() => {
    res.status(200).send(report);
  });
});

module.exports = router;
