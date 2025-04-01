/**
 * dbConfig.js
 * 
 * This file sets up the connection between the backend server and the MongoDB database
 * using Mongoose. It reads the database URL from environment variables and logs whether
 * the connection was successful or if an error occurred.
 */

 const mongoose = require('mongoose'); // Import Mongoose to handle MongoDB connections

 // Connect to MongoDB using the URL stored in an environment variable (.env file)
 mongoose.connect(process.env.MONGO_URL);
 
 // Store the connection object for easier access
 const connection = mongoose.connection;
 
 // When the connection is successfully opened, log a confirmation message
 connection.once('open', () => {
     console.log("Mongoose is connected");
 });
 
 // If an error happens during connection, log the error
 connection.on('error', (err) => {
     console.log("Error in MongoDB connection", err);
 });
 
 // Export the mongoose instance so it can be used in other parts of the app
 module.exports = mongoose;
 