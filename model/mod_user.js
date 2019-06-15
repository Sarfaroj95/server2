const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    min: [4, "Too short, short 4 character"],
    max: [32, "To long, Max is 32 character "]
  },
  birthday: {
    type: String
    //require: 'Date is require',
  },

  email: {
    type: String,
    min: [4, "Too short, short 4 character"],
    max: [32, "To long, Max is 32 character "],
    unique: true,
    lowercase: true,
    //	require: 'Email is require',
    match: [/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/]
  },

  password: {
    type: String,
    min: [4, "Too short, short 4 character"],
    max: [32, "To long, Max is 32 character "]
    //	require: 'password is required'
  }
});

module.exports = mongoose.model("User", userSchema);
