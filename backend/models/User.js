// models/User.js

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  categories: { type: [String], default: [] },
  isActivated: {
    type: Boolean,
    default: false,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  userType: { type: String, enum: ['Buyer', 'Seller'], default: 'Seller' }

});

module.exports = mongoose.model('User', userSchema);



