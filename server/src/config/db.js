const mongoose = require("mongoose");
const MongoDb_uri = process.env.MONGO_URI || "mongodb+srv://raj:raj@cluster0.cb7b3hu.mongodb.net/"
const connect = () =>  mongoose.connect(MongoDb_uri);

module.exports = connect;