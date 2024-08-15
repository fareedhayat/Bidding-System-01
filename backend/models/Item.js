// models/Item.js

const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  images: [String],
  description: {
    type: String,
    required: true,
  },
  bidDuration: {
    type: Number,
    required: true,
  },
  minBidAmount: {
    type: Number,
    required: true,
  },
  startingBidAmount: {
    type: Number,
    required: true,
  },
  createdBy: {
	 type: String,
    required: true,
  },
    createdDate: {
	 type: String,
    required: true,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  itemEndDate: {
    type: String,
	required: true,
  },
  isSold: {
    type: Boolean,
	required: false,
	default: false,
  },
  soldToId: {
    type: String,
	required: false,
	default: "Null",
  },
  soldToName: {
    type: String,
	required: false,
	default: "Null",
  },
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
