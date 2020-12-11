const mongoose = require("mongoose");

const URI =
  "mongodb+srv://bilal123:bilal123@cluster0.0p7qq.mongodb.net/<dbname>?retryWrites=true&w=majority";

const connectDB = async () => {
  await mongoose.connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  console.log("Connection Established");
};

module.exports = connectDB;
