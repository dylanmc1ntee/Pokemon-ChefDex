/**
 * index.js
 * 
 * This is the main entry point for the backend server in a MERN stack application.
 * It sets up an Express server, connects to the MongoDB database, loads environment variables,
 * and defines the route for handling ingredient-related API requests.
 */

 const express = require("express"); // Import Express to create the web server
 const app = express(); // Create an instance of an Express app
 
 require('dotenv').config(); // Load environment variables from a .env file (e.g., for DB connection or PORT)
 
 // Import the database configuration to connect to MongoDB
 const dbConfig = require("./config/dbConfig");
 
 // Define the port the server will listen on (either from .env or default to 5050)
 const port = process.env.PORT || 5050;
 
 // Import the ingredient route handlers
 const ingredientRoutes = require("./routes/ingredientRoutes");
 
 // Middleware to allow the server to understand JSON data sent in requests
 app.use(express.json());
 
 // Route all requests starting with /api/ingredients to the ingredientRoutes file
 app.use("/api/ingredients", ingredientRoutes);
 
 // Start the server and listen on the defined port
 app.listen(port, () => console.log(`Node server started at port ${port}`));
 