const express = require('express');
const router = express.Router();
const multer = require('multer');
const AuctionItem = require('../models/AuctionItem');
const Item = require('../models/Item');

router.post('/saveAuctionItem', async (req, res) => {
  try {
    // Create a new AuctionItem object with data from the request body.
    const auctionItem = new AuctionItem({
      itemTitle: req.body.itemTitle,
      bidderName: req.body.bidderName,
      bidAmount: req.body.bidAmount,
      bidderId: req.body.bidderId,
      itemId: req.body.itemId,
      createdDate: req.body.createdDate, 
      isActive: req.body.isActive,
    });
	
  // Find the item by its ID.
	const item = await Item.findById(req.body.itemId);
	
	console.log("Itemcccc",item);
  
  // // If the item exists, update its starting and minimum bid amounts.
	// if (item) {
	//   await Item.updateOne(
	// 	{ _id: item._id },
	// 	{ startingBidAmount: req.body.bidAmount, minBidAmount: req.body.bidAmount }
	//   );
	// }

	if (item) {
    await Item.updateOne(
      { _id: item._id },
      { startingBidAmount: req.body.bidAmount }
    );
  }
    // Save the new auction item to the database.
    await auctionItem.save(); // Fixed variable name from newItem to auctionItem

    // Respond with a success message and the saved auction item.
    res.status(201).json({ message: 'Auction Item added successfully!', auctionItem: auctionItem });
  } catch (error) {
    // Log the error and respond with a failure message.
    console.error(error);
    res.status(500).json({ message: 'Failed to add auction Item. Please try again.' });
  }
});


// Get Highest Bid Amount for an Item

router.get('/bidAmount/:itemId', async (req, res) => {
  try {
    const itemId = req.params.itemId;  // Get the itemId from the request parameters.
    const previousBids = await AuctionItem.find({ itemId });  // Find all auction items with the given itemId.
    let maxBidAmount = 0;

    // Iterate over all previous bids to find the highest bid amount.
    previousBids.forEach(bid => {
      if (bid.bidAmount > maxBidAmount) {
        maxBidAmount = bid.bidAmount;
      }
    });

    // Respond with the highest bid amount.
    res.status(200).json({ bidAmount: maxBidAmount });
  } catch (error) {
    // Log the error and respond with a failure message.
    console.error('Error fetching previous bid amount:', error);
    res.status(500).json({ message: 'Failed to fetch previous bid amount. Please try again.' });
  }
});


// Get Purchased Items for a User

router.get('/purchased/:userId', async (req, res) => {
  try {
    const userId = req.params.userId;  // Get the userId from the request parameters.

    // Find auction items where soldTo field matches the user ID
    const auctionItems = await AuctionItem.find({ soldToId: userId });
	
	console.log("auctionItems",auctionItems);
	
	

    // Extract item IDs from auctionItems
    const itemIds = auctionItems.map(auctionItem => auctionItem.itemId);

   	console.log("itemIds",itemIds);


    // Find items details for these item IDs
    const items = await Item.find({ _id: { $in: itemIds } });
	
	   	console.log("items",items);


    res.status(200).json({ items });
  } catch (error) {
    console.error('Error fetching purchased items:', error);
    res.status(500).json({ message: 'Failed to fetch purchased items. Please try again.' });
  }
});


// Get Bid Details for an Item

router.get('/details/:itemId', async (req, res) => {
  try {
    const itemId = req.params.itemId;
    const bidDetails = await AuctionItem.find({ itemId }).sort({ createdDate: -1 });
    res.status(200).json({ bids: bidDetails });
  } catch (error) {
    console.error('Error fetching bid details:', error);
    res.status(500).json({ message: 'Failed to fetch bid details. Please try again.' });
  }
});

module.exports = router;
