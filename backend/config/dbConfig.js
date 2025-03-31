const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL);

const connection = mongoose.connection;

connection.once('open', () => {

    console.log("Mongoose is connected");

});


connection.on('error' , (err)=>{

    console.log("Error in MongoDB connection", err);

});

module.exports = mongoose;