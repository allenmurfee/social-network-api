const { connect, connection } = require("mongoose");
const mongodb = require("mongodb").MongoClient;
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/socialNetworkDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
