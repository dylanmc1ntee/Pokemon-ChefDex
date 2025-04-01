/**
 * ingredient.js
 * 
 * This file defines the structure (schema) for storing ingredients in the MongoDB database.
 * It uses Mongoose, a library that makes it easier to work with MongoDB in a Node.js environment.
 * Each ingredient has a name, a calorie count, and an image URL, all of which are required fields.
 */

 const mongoose = require('mongoose'); // Import Mongoose to interact with the MongoDB database
 const Schema = mongoose.Schema; // Get the Schema constructor to define data structure
 
 // Define the structure for an ingredient
 const ingredientSchema = new Schema({
     name: {        
         type: String,       // The name of the ingredient (e.g. "Chicken Breast")
         required: true      // This field must be provided when creating a new ingredient
     },
     
     calorie: {        
         type: Number,       // The number of calories in the ingredient
         required: true      // This field must also be provided
     },
 
     image: {        
         type: String,       // A URL link to an image representing the ingredient
         required: true      // This field is required as well
     }
 });
 
 // Create a model from the schema so it can be used in other files to interact with ingredients
 module.exports = mongoose.model('Ingredient', ingredientSchema);
 