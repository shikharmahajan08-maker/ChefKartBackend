const mongoose = require('mongoose');

// Load environment variables
require('dotenv').config();

const connectDB = async () => {
  try {
    const mongoUri = process.env.MONGODB_URL;
    if (!mongoUri) {
      console.warn("⚠️ Warning: MONGODB_URL is not set in environment variables! Please configure it in your Render dashboard under 'Environment'.");
      return;
    }

    const conn = await mongoose.connect(mongoUri, {
      serverSelectionTimeoutMS: 15000
    });

    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.error(`❌ MongoDB Connection Error: ${err.message}`);
    console.error("Tip: Ensure your MongoDB Atlas cluster allows connections from anywhere (0.0.0.0/0 in Network Access).");
  }
};

module.exports = connectDB;
