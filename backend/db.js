const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const connectDB = async () => {
  try {
    mongoose.connect("mongodb://localhost:27017/blogDatabase", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to blogDatabase");
  } catch (err) {
    console.log(err);
  }
};
module.exports = connectDB;
