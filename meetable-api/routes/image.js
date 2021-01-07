const express = require("express");
const { body } = require("express-validator");
const Image = require("../models/Image");

const router = express.Router();

/**
 * Upload a profile picture to a user account
 */
router.post("/", (req, res) => {
  if (req.files) {
    const newImage = new Image();
    newImage.img.data = fs.readFileSync(req.files.userPhoto.path);
    newImage.img.contentType = "image/png";
    newImage.save();
  } else {
    console.log("file failed");
  }
});

module.exports = router;
