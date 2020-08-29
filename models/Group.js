const mongoose = require("mongoose");

const GroupSchema = mongoose.Schema({
    /*
    memberids: {
        type: [mongoose.SchemaTypes.ObjectId]
    }
    */
   memberids: [mongoose.SchemaTypes.ObjectId],
   maxSize: {type: Number, default: 10, required: true}
})

module.exports = Group = mongoose.model("group", GroupSchema);