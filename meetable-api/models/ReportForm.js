const mongoose = require("mongoose");

const Form = require("./Form");

// may want to include an enum of violations to choose from when reporting
const ReportFormSchema = mongoose.Schema({
  reportedUid: {
    type: mongoose.SchemaTypes.ObjectId,
    required: true,
  },
  // currently, disallowed content can only be in bio,
  // profile pic, or chat messages. this attribute is for reports of chat messages.
  reportedMessage: {
    type: mongoose.SchemaTypes.ObjectId,
    default: null,
  },
});

const ReportForm = Form.discriminator("ReportForm",
  ReportFormSchema);

module.exports = ReportForm;
