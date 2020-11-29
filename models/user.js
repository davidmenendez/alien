const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = new Schema(
  {
    email: {
      type: String,
      required: true,
      maxlength: [40, 'email too long'],
      minlength: [5, 'email too short'],
      unique: true,
    },
    password: {
      type: String,
      required: true,
      maxlength: [100, 'password too long'],
      minlength: [5, 'password too short'],
    },
    name: {
      type: String,
      required: true,
      maxlength: [30, 'name too long'],
      minlength: [5, 'name too short'],
      unique: true,
    },
    color: {
      type: String,
      required: true,
      maxlength: 30,
      minlength: 3,
    },
  },
  {
    timestamps: {
      createdAt: 'created_at',
    },
  }
);

module.exports = mongoose.model('Users', User);
