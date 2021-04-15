const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const Schema = mongoose.Schema;

const bootcampSchema = new Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
  },
  followers: [{
    
  }],
});

module.exports = Bootcamp = mongoose.model("Bootcamp", bootcampSchema);
