const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RecordSchema = new Schema({
  title: String,
  artist: String,
  personalRating: {type: Number, default: -1},  // negative is not yet rated
  yearOfRelease: {type: Number, default: -1},  // negative is year unknown
  tracks: [String]
});

const Record = mongoose.model('Record', RecordSchema);

module.exports = Record;
