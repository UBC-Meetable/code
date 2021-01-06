const mongoose = require("mongoose");

const ImageSchema = new mongoose.Schema({
  img: {
    data: Buffer,
    contentType: String,
  },
});
module.exports = Image = mongoose.model("image", ImageSchema);
