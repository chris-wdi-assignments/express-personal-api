const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RecordSchema = new Schema({
  title: String,
  artist: String,
  personalRating: Number,
  yearOfRelease: Number,
  tracks: [String]
});

const Record = mongoose.model('Record', RecordSchema);

module.exports = Record;
