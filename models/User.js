const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name: { type: String},
    surname: { type: String },
    mail: { type: String },
    password: { type: String },
    role: { type: String },
    image: { type: String },
  },
);

const User = mongoose.model('User', userSchema);

module.exports = User;
