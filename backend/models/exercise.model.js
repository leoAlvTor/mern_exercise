// Import the library.
const mongoose = require('mongoose');
// Instance the Schema for MongoDB.
const Schema = mongoose.Schema;

// Create a new Schema (Table in SQL)
const exerciseSchema = new Schema({ // Add the fields to Schema
   username: { type: String, requiered: true},
   description: { type: String, requiered: true},
   duration: { type: String, requiered: true},
   date: { type: Date, requiered: true },
}, {
    timestamp: true,
});
// Create a new model
const Exercise = mongoose.model('Exercise', exerciseSchema);
// Export the Schema (model/table) created.
module.exports = Exercise;