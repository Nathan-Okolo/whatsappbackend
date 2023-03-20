const mongoose = require("mongoose");
const { Schema } = mongoose;

const whatsappSchema = new Schema({
  message: String,
  name: String,
  timestamp: String,
  received: Boolean,
});

const Message = mongoose.model("messagecontent", whatsappSchema);

module.exports = Message;
