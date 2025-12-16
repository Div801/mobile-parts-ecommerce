import mongoose from "mongoose";

import env from "./env.js";

const connectDB = async () => {
  const { mongoUri } = env;

  if (!mongoUri) {
    throw new Error("MONGODB_URI is not set");
  }

  try {
    await mongoose.connect(mongoUri);
    console.log("[db] Connected to MongoDB");
  } catch (error) {
    console.error("[db] MongoDB connection error", error);
    throw error;
  }
};

export default connectDB;
