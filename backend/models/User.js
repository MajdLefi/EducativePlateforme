const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//create Schema for the user

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: [String],
  },
  imgProfile: {
    type: String,
  },
  myBootcamps : [{}]
});

module.exports = User = mongoose.model("User", userSchema);
