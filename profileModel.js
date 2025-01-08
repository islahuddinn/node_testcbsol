const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
  },
});

const User = mongoose.model("User", profileSchema);
module.exports = User;
