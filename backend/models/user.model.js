// Import the library
const mongoose = require('mongoose');
// Create a new Schema
const Schema = mongoose.Schema;
// Create an attribute for our Schema
const userSchema = new Schema({
   username: {
       type: String,
       requiered: true,
       unique: true,
       trim: true,
       minlength: 3
   },
}, {
    timestamp: true,
});
// Create the User model in Mongo
const User = mongoose.model('User', userSchema);
// Export the model to database.
module.exports = User;