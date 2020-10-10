const mongoose = require('mongoose');

const FormSchema = mongoose.Schema({
    text: {
        type: String, 
        required: true,
        minlength: 30, 
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
    email: {
        type: String
    }
});

module.exports = Form = mongoose.model("form", FormSchema);