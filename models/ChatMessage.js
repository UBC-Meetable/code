const mongoose = require('mongoose');

const ChatMessageSchema = mongoose.Schema({
    text: {
        type: String,
        required: true,
        maxlength: 10000
    }, // probably best validated on frontend
    dateCreated: {
        type: Date,
        default: Date.now
    },
    uid: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true,
    },
});

module.exports = ChatMessage = mongoose.model("chatMessage", ChatMessageSchema);