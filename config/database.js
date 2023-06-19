require("dotenv").config();
const mongoose = require("mongoose");

const user=process.env.USER;

const connectDB = async (logger) => {
  try {
    // trying to connect with database
    await mongoose.connect(
      `mongodb+srv://${user}@cluster0.dwnwv8t.mongodb.net/furation-backend`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    logger.info("Connected to MongoDB");
    console.log("Connected to MongoDB");
  } catch (error) {
    // error
    logger.error("Failed to connect to MongoDB", error);
    console.error("Failed to connect to MongoDB", error);
    process.exit(1);
  }
};

module.exports = connectDB;
