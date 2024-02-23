const mongoose = require('mongoose');

const audioSchema = new mongoose.Schema({
  filename: String,
  url: String
}, { collection: 'audios' }); 

module.exports = mongoose.model('Audio', audioSchema);
