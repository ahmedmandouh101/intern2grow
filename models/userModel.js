const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Enter your name!'],
  },
  email: {
    type: String,
    required: [true, 'please enter a valid email'],
    validate: [validator.isEmail, 'Please enter a valid email'],
  },
  password: {
    type: String,
    required: [true, 'please provide a password'],
    minlenght: 4,
    select: false,
  },
  confirmPassword: {
    type: String,
    required: [true, 'please confirm your password'],
    validate: {
      validator: function (el) {
        return el === this.password;
      },
      message: 'Passwords do not match',
    },
  },
  role: {
    type: String,
    required: [true, 'please select a role'],
    enum: ['admin', 'student', 'doctor', 'staff'],
  },
});

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();

  this.password = await bcrypt.hash(this.password, 12);

  this.confirmPassword = undefined;
  next();
});

userSchema.methods.correctPassword = async function (
  candiatePassword,
  userPassword
) {
  return await bcrypt.compare(candiatePassword, userPassword);
};

const User = mongoose.model('User', userSchema);

module.exports = User;
