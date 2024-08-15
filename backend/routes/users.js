// routes/users.js

const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../models/User');


router.post('/register', async (req, res) => {
  try {
    const { name, email, password, categories, isActivated ,userType,isActive } = req.body;
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      categories,
	  isActivated,
	  userType,
	  isActive,
    });

    await newUser.save();
	
    res.status(201).json({ message: 'User registered successfully', user: newUser });
	
		
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error', error: err });
  }
});


// Login Route

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    res.status(200).json({ message: 'Login successful', user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error', error: err });
  }
});


// Get Users by Category Route

router.get('/category-users', async (req, res) => {
  try {
    const { category, excludeUserId } = req.query;
    const users = await User.find({ categories: category, _id: { $ne: excludeUserId } });

    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error', error: err });
  }
});


// Update User Route
router.put('/:userId', async (req, res) => {
  try {
    const userId = req.params.userId;
    const { name, email, password, categories, userType, isActive } = req.body;

    // Find the user by ID and update the data
    const updatedUser = await User.findByIdAndUpdate(userId, {
      name,
      email,
      password, // You may want to hash the password again if it's being updated
      categories,
      userType,
      isActive,
    }, { new: true });

    res.status(200).json({ message: 'User updated successfully', user: updatedUser });
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});



module.exports = router;

