var mongoose = require("mongoose");
mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/personal-api", { useMongoClient: true });
mongoose.Promise = global.Promise;  // fix deprecation err

module.exports = {
  Record: require('./Record.js')
};
