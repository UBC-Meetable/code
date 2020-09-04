const mongoose = require("mongoose");

const GroupSchema = mongoose.Schema({
    /*
    memberids: {
        type: [mongoose.SchemaTypes.ObjectId]
    }
    */
   name: {type: [String], required: true}, // not sure if str or array of str
   // ['2024', 'sciences', 'cats', ..., ...,]
   members: {type: [mongoose.SchemaTypes.ObjectId], ref: 'User', default: []},
   maxSize: {type: Number, default: 10},
   full : {type: Boolean, default: false},
})

module.exports = Group = mongoose.model("group", GroupSchema);