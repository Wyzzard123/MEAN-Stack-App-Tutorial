const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Essentially, this schema is a blueprint of the object in our database.
const videoSchema = new Schema({
  title: String,
  url: String,
  description: String
});

module.exports = mongoose.model('video', videoSchema, 'videos')
