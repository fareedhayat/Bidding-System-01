// models/AuctionItem.js

const mongoose = require('mongoose');

const auctionItemSchema = new mongoose.Schema({
  itemTitle: {
    type: String,
    required: true,
  },
  bidderName: {
    type: String,
    required: true,
  },
  bidAmount: {
    type: Number,
    required: true,
  },
  bidderId: {
    type: String,
    required: true,
  },
  itemId: {
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
  soldToId: {
	 type: String,
    required: false,
	default:"Null",
  },
  soldToName: {
	 type: String,
    required: false,
	default:"Null",
  },
});


const AuctionItem = mongoose.model('AuctionItem', auctionItemSchema);
// Create a Mongoose model named 'AuctionItem' using the auctionItemSchema. 
// This model represents the 'auctionitems' collection in the MongoDB database and allows for CRUD operations on auction items.

module.exports = AuctionItem;
// Export the AuctionItem model so it can be used in other parts of the application.