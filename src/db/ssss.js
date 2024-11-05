import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDb = async () => {
  try {
    console.log("Attempting MongoDB connection...");
    const connectInstance = await mongoose.connect(`${process.env.MONGO_URL}/${DB_NAME}`);
    console.log(`MongoDB Connected || DB Host: ${connectInstance.connection.host}`);
    
  } catch (error) {
    console.log("MongoDB Connection Failure:", error);
    process.exit(1); // Exit the application if the connection fail
  }
};

export default connectDb;
