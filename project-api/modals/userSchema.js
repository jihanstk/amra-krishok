const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  phone: {
    type: String,
    require: true,
  },
  userPhoto: {
    type: String,
    require: true,
  },
  userType: {
    type: String,
    require: true,
  },
  userType: {
    type: String,
    require: true,
  },
  flower: {
    type: Number,
    require: true,
  },
  savedPosts: [
    {
      type: mongoose.Types.ObjectId,
      ref: "sellposts",
    },
  ],
});
const User = mongoose.models.users || mongoose.model("users", userSchema);

module.exports = User;
