// // index.js

// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const usersRouter = require('./routes/users');
// const itemsRouter = require('./routes/items');
// const auctionItemsRouter = require('./routes/auctionItems');

// const app = express();

// app.use(bodyParser.json());
// app.use(cors());

// mongoose.connect('mongodb://localhost:27017/online-bidding');
// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// db.once('open', function() {
  // console.log('Connected to MongoDB');
// });

// app.use('/api/users', usersRouter);

// app.use('/api/items', itemsRouter);
// app.use('/api/auctionItems', auctionItemsRouter);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const express = require('express');  // Import the Express framework
const mongoose = require('mongoose');  // Import Mongoose for MongoDB interaction
const bodyParser = require('body-parser');  // Import Body-parser to parse incoming request bodies
const cors = require('cors');  // Import CORS to allow cross-origin requests
const usersRouter = require('./routes/users');  // Import the users router module
const itemsRouter = require('./routes/items');  // Import the items router module
const auctionItemsRouter = require('./routes/auctionItems');  // Import the auction items router module which handles routing for auction item-related requests.
const { identifyWinners,identifyWinnersWithNoTimeBound } = require('./auctionScheduler'); // Import the scheduler function
// Import specific functions (identifyWinners, identifyWinnersWithNoTimeBound) from the auctionScheduler module. These functions are likely used to determine the winners of auctions.

const app = express();  // Create an instance of the Express application.

app.use(bodyParser.json());
// Use Body-parser middleware to parse JSON request bodies, making the data available on `req.body`.
app.use(cors());
// Use CORS middleware to enable cross-origin resource sharing, allowing the server to handle requests from different domains.

mongoose.connect('mongodb://localhost:27017/online-bidding');
// Connect to a MongoDB database named 'online-bidding' running on localhost at the default port 27017.
const db = mongoose.connection;  // Get the default MongoDB connection instance.
db.on('error', console.error.bind(console, 'MongoDB connection error:'));  // Bind the connection to an error event to log connection errors.
db.once('open', function() {
  console.log('Connected to MongoDB');
  // Log a success message once the connection to MongoDB is open.
});

// Run the identifyWinners function when the server starts up
// identifyWinners();
identifyWinnersWithNoTimeBound(); // Run the identifyWinnersWithNoTimeBound function when the server starts. This function likely identifies auction winners without a time constraint.

app.use('/api/users', usersRouter); 
// Use the users router for handling requests to the `/api/users` endpoint.

app.use('/api/items', itemsRouter);
// Use the items router for handling requests to the `/api/items` endpoint.

app.use('/api/auctionItems', auctionItemsRouter);
// Use the auction items router for handling requests to the `/api/auctionItems` endpoint.

const PORT = process.env.PORT || 5000; 
// Define the port the server will listen on. Use the PORT environment variable if available, otherwise default to 5000.

app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); 
// Start the server, listening on the specified port, and log a message indicating the server is running and the port number.

