const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const MajorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: 4,      // probably do not want to allow very generic/short names
    maxLength: 200
  },
});
// note: instead of one collection of known majors, may want to have a collection for each university

let Major = mongoose.model("Major", MajorSchema);

router.get("/", async (req, res) => {
    let majors = await Major.find();
    res.send(majors);
});

// assumes frontend will check duplicate and not post a duplicate major
router.post("/", async (req, res) => {
  let name = req.body.name;
  let major = new Major({name: name});
  major.save();
  res.status(200);
});

module.exports = {
  router: router,
  Major: Major
};

