/**
 * ingredientRoutes.js
 * 
 * This file defines the API route for adding new ingredients to the database.
 * It is part of the backend server in a MERN (MongoDB, Express, React, Node.js) stack application.
 * Specifically, this file handles POST requests to the `/api/ingredients` endpoint
 * and stores ingredient data in the MongoDB database using the Mongoose model.
 */

 const express = require('express'); // Import the Express framework for building web servers
 const router = express.Router(); // Create a new router object to define route handlers
 const Ingredient = require('../models/Ingredient'); // Import the Ingredient model (used to interact with the database)
 
 // Define a POST route at /api/ingredients
 router.post('/', async (req, res) => {
   try {
     // Create a new ingredient using the data sent in the request body
     const ingredient = new Ingredient(req.body);
 
     // Save the new ingredient to the database
     const savedIngredient = await ingredient.save();
 
     // Respond with the saved ingredient and a 201 (Created) status code
     res.status(201).json(savedIngredient);
   } catch (err) {
     // If there's an error (e.g. missing fields), send a 400 (Bad Request) with the error message
     res.status(400).json({ error: err.message });
   }
 });
 
 module.exports = router; // Export the router so it can be used in the main server file
 