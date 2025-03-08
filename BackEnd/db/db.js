// Description: Connects to the MongoDB database using Mongoose. 
// Exports a function that connects using the MONGODB_URI environment variable.

import mongoose from 'mongoose';

const connectToDb = async () => {
  try {
    // Connect to MongoDB using the environment variable
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Connected to MongoDB database');
  } catch (error) {
    console.error('❌ Error connecting to database:', error.message);
    process.exit(1); // Exit process on failure
  }
};

// Export the function for use in app.js
export default connectToDb;
