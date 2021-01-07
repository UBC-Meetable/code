const mongoose = require("mongoose");

const ChatMessageSchema = mongoose.Schema({
  text: {
    type: String,
    required: true,
    maxlength: 10000,
  }, // probably best validated on frontend
  file: {
    data: Buffer,
    contentType: String, // this would probably be like 'image/png' or 'video/mp4'
  },
  dateCreated: {
    type: Date,
    default: Date.now,
  },
  uid: {
    type: mongoose.SchemaTypes.ObjectId,
    required: true,
  },
});

module.exports = ChatMessage = mongoose.model("chatMessage", ChatMessageSchema);
