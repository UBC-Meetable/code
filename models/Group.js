const mongoose = require("mongoose");



const GroupSchema = mongoose.Schema({
   name: {type: [String], required: true}, // not sure if str or array of str
   // ['2024', 'sciences', 'cats', ..., ...,]
   members: [{
       type: mongoose.SchemaTypes.ObjectId, 
       ref: 'User', 
       default: []}],
   messages: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'ChatMessage',
        default: [],
    }],
   maxSize: {type: Number, default: 7}, // 7 is a good max
   full : {type: Boolean, default: false},
   dateCreated: {    
    type: Date,
    default: Date.now
},
})
const FriendGroupSchema = mongoose.Schema({
    maxSize : {type: Number, default: 7},
    full: {type: Boolean, default: false},
});


const Group = mongoose.model("group", GroupSchema);
module.exports = Group;
