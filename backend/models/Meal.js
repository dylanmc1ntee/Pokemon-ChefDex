/**
 * meals.js
 * 
 * This file defines the structure (schema) for storing meals in the MongoDB database.
 * Each meal has a name, an image, and a reference to a single ingredient.
 * It uses Mongoose to structure and manage the data in a Node.js backend.
 */

 const mongoose = require('mongoose'); // Import Mongoose to interact with MongoDB
 const Schema = mongoose.Schema; // Get the Schema constructor to define data structure
 
 // Define the structure for a meal
 const mealSchema = new Schema({
     name: {        
         type: String,       // The name of the meal (e.g. "Grilled Chicken Bowl")
         required: true      // This field must be provided
     },
 
     ingredient: {        
         type: Schema.Types.ObjectId, // Store a reference to an Ingredient document
         ref: 'Ingredient',           // This tells Mongoose which model to link to
         required: true               // The meal must include an ingredient
     },
 
     image: {        
         type: String,       // A URL link to an image representing the meal
         required: true      // This field is also required
     }
 });
 
 // Create a model from the schema so it can be used to interact with meals in the database
 module.exports = mongoose.model('Meal', mealSchema);
 