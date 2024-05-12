const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3,
    maxlength: 30,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    match: /^\S+@\S+\.\S+$/,
  },
  phone_number: {
    type: Number,
    required: true,
    validate: {
      validator: (v) => /^\d{10}$/.test(v),
      message: (props) => `${props.value} is not a valid phone number!`,
    },
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  avatar: {
    type: String,
  },
  token:{
    type:String,
    default:''
  },
  
});

const User = mongoose.model("user_datas", userSchema);
module.exports = User;
