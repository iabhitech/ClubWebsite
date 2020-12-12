const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    default: "images/2020-11-21T08:35:14.292Z-def.png"
  },
  AboutProfession: {
    type: String,
    default: "Webside User"
  },
});
module.exports = mongoose.model('User', userSchema);