import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const Mongo_URI = process.env.Mongo_Url || "";

export const connectDB = async () => {
  try {
    await mongoose.connect(Mongo_URI);
    console.log("Mongo DB connected");
  } catch (err) {
    console.error("Failed to connected DB ", err);
    process.exit(1);
  }
};
