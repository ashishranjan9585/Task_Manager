require('dotenv').config();
const mongoose = require("mongoose");

const db = process.env.DATABASE_URL;
const connectDB = async () => {
  try {
    await mongoose.connect(
      db,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
       
      }
    );
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  }
}; 

module.exports = connectDB;