import mongoose from "mongoose";

const connectToDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("✅ Connected to MongoDB database");
  } catch (error) {
    console.error("❌ Error connecting to database:", error.message);
    process.exit(1);
  }
};

export default connectToDb;
