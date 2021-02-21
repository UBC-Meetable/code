/* eslint-disable no-continue */
/* eslint-disable no-await-in-loop */
const express = require("express");

const router = express.Router();

/**
 * @api {get} /status/ Return status of server
 * @apiSuccess {String} Server liveness check message
 */
router.get("/", async (req, res) => {
  const result = "Server is alive and well";
  res.status(200).send(result);
});
module.exports = router;
