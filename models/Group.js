const mongoose = require("mongoose");

const GroupSchema = mongoose.Schema({
    /*
    memberids: {
        type: [mongoose.SchemaTypes.ObjectId]
    }
    */
   name: {type: String, required: true},
   memberids: [mongoose.SchemaTypes.ObjectId],
   maxSize: {type: Number, default: 10}
})

module.exports = Group = mongoose.model("group", GroupSchema);