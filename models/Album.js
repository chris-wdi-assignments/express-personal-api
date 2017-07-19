const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AlbumSchema = new Schema({
  title: String,
  artist: String,
  personalRating: Number,
  yearOfRelease: Number,
  tracks: [String]
});

const Album = mongoose.model('Album', AlbumSchema);

module.exports = Album;
