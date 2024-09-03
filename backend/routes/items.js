const express = require('express');
const router = express.Router();
const multer = require('multer');
const Item = require('../models/Item');

// Define the file upload path where images will be stored.
// const FileUploadPath = 'D:/Online-Bidding-System/onlinebidding-react/public/uploads';
const FileUploadPath = 'C:/Users/fareed.hayat/Desktop/fyp/Bidding-System-01/frontend/public/uploads';

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, FileUploadPath); 
    // Set the destination folder for uploaded files.
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
    // Set the filename for uploaded files, prefixed with the current timestamp.
  }
});

// Create a multer instance with the defined storage configuration.
const upload = multer({ storage: storage });


// Route for adding a new item

router.post('/', upload.array('images', 10), async (req, res) => {
  try {
    // Access uploaded files via req.files
    const images = req.files.map(file => file.filename); // Save only the filename in the database
    
    // Create a new Item object with data from the request body and the uploaded images.
    const newItem = new Item({
      title: req.body.title,
      category: req.body.category,
      images: images,
      description: req.body.description,
      bidDuration: req.body.bidDuration,
      minBidAmount: req.body.minBidAmount,
      startingBidAmount: req.body.startingBidAmount,
      createdBy: req.body.createdBy, // Assuming you're passing the user ID in the request body
      createdDate: req.body.createdDate, 
	  isActive:req.body.isActive,
	  itemEndDate:req.body.itemEndDate,
    });
    
    // Save the new item to the database.
    await newItem.save();

    res.status(201).json({ message: 'Item added successfully!', item: newItem });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to add item. Please try again.' });
  }
});


// Route for fetching items associated with a specific user ID

router.get('/user/:userId', async (req, res) => {
  try {
    const userId = req.params.userId;

    // Find items where createdBy field matches the user ID
    const items = await Item.find({ createdBy: userId });

    res.status(200).json({ items });
  } catch (error) {
    console.error('Error fetching user items:', error);
    res.status(500).json({ message: 'Failed to fetch user items. Please try again.' });
  }
});


// Route for fetching items associated with a specific catagory

router.get('/item/:catagory', async (req, res) => {
  try {
    const catagory = req.params.catagory;

    // Find items where categories field matches category
    const items = await Item.find({ category: catagory });

    res.status(200).json({ items });
  } catch (error) {
    console.error('Error fetching  items:', error);
    res.status(500).json({ message: 'Failed to fetch  items. Please try again.' });
  }
});


// Update item route

router.put('/:itemId', async (req, res) => {
  try {
    const itemId = req.params.itemId;
    const updatedItem = {
      title: req.body.title,
      description: req.body.description,
      bidDuration: req.body.bidDuration,
      minBidAmount: req.body.minBidAmount,
      startingBidAmount: req.body.startingBidAmount
      // Add any other fields you want to update here
    };

    // Update the item with the provided ID
    await Item.findByIdAndUpdate(itemId, updatedItem);
    res.status(200).json({ message: 'Item updated successfully!' });
  } catch (error) {
    console.error('Error updating item:', error);
    res.status(500).json({ message: 'Failed to update item. Please try again.' });
  }

});


module.exports = router;
