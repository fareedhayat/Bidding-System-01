const Item = require('./models/Item');
const AuctionItem = require('./models/AuctionItem');
const User = require('./models/User');
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

const identifyWinners = async () => {
  try {
    const items = await Item.find();

    for (const item of items) {
      const currentDate = new Date();
      const createdDate = new Date(item.createdDate);
      const endDate = new Date(item.itemEndDate);
      const bidDurationDays = item.bidDuration;
      const bidEndDate = new Date(createdDate.getTime() + bidDurationDays * 24 * 60 * 60 * 1000);

      if (
        currentDate.toDateString() === endDate.toDateString() &&
        currentDate.getHours() === 23 &&
        currentDate.getMinutes() === 59 &&
        currentDate.getSeconds() === 59
      ) {
        const itemIdString = item._id.toString();
        console.log("ItemId", itemIdString);

        const bids = await AuctionItem.find({ itemId: new ObjectId(itemIdString) });
        console.log("bids", bids);

        if (bids.length === 0) {
          console.log(`No bids found for item ${item._id}`);
          continue;
        }

        const highestBid = bids.reduce((prevBid, currentBid) => {
          return currentBid.bidAmount > prevBid.bidAmount ? currentBid : prevBid;
        }, { bidAmount: 0 });

        console.log("highestBid", highestBid);

        if (!highestBid._id) {
          console.log(`No valid highest bid found for item ${item._id}`);
          continue;
        }

        console.log("highestBid", highestBid._id);

        await AuctionItem.updateOne(
          { _id: new ObjectId(highestBid._id) },
          { soldToId: highestBid.bidderId }
        );

        console.log(`Winner identified for expired bid of item ${item._id}`);
      }
    }

    console.log('Winners identified for expiring bids.');
  } catch (error) {
    console.error('Error identifying winners:', error);
  }
};

const identifyWinnersWithNoTimeBound = async () => {
  try {
    const items = await Item.find();

    for (const item of items) {
      const currentDate = new Date();
      const createdDate = new Date(item.createdDate);
      const endDate = new Date(item.itemEndDate);
      const bidDurationDays = item.bidDuration;
      const bidEndDate = new Date(createdDate.getTime() + bidDurationDays * 24 * 60 * 60 * 1000);
      const itemIdString = item._id.toString();
      console.log("ItemId", itemIdString);

      const bids = await AuctionItem.find({ itemId: new ObjectId(itemIdString) });
      console.log("bids", bids);

      if (bids.length === 0) {
        console.log(`No bids found for item ${item._id}`);
        continue;
      }

      const highestBid = bids.reduce((prevBid, currentBid) => {
        return currentBid.bidAmount > prevBid.bidAmount ? currentBid : prevBid;
      }, { bidAmount: 0 });

      console.log("highestBid", highestBid);

      if (!highestBid._id) {
        console.log(`No valid highest bid found for item ${item._id}`);
        continue;
      }

      console.log("highestBid", highestBid._id);
      
      const soldToUser = await User.findById(highestBid.bidderId);
      if (!soldToUser) {
        console.log(`No user found for bidderId ${highestBid.bidderId}`);
        continue;
      }

      const userName = soldToUser.name;
      console.log("soldToName", userName);

      await AuctionItem.updateOne(
        { _id: new ObjectId(highestBid._id) },
        { soldToId: highestBid.bidderId, soldToName: userName }
      );
	  
	  await Item.updateOne(
        { _id: new ObjectId(highestBid.itemId) },
        { soldToId: highestBid.bidderId, soldToName: userName,isSold:true }
      );
	  

      console.log(`Winner identified for expired bid of item ${item._id}`);
    }

    console.log('Winners identified for expiring bids.');
  } catch (error) {
    console.error('Error identifying winners:', error);
  }
};


const now = new Date();
const endOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59);
const timeUntilEndOfDay = endOfDay.getTime() - now.getTime();

// setTimeout(identifyWinners, timeUntilEndOfDay);

module.exports = {
  identifyWinners,
  identifyWinnersWithNoTimeBound,
};
