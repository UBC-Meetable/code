const mongoose = require("mongoose");

const ImageSchema = new mongoose.Schema({
  img: {
    data: Buffer,
    contentType: String,
  },
});
const Image = mongoose.model("image", ImageSchema);
module.exports = Image;
