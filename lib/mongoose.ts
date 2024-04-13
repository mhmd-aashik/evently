import mongoose from "mongoose";

// track the connection
let isConnected: boolean = false;

export const connectToDatabase = async () => {
  // to prevent unknown field Queries
  mongoose.set("strictQuery", true);

  if (!process.env.MONGODB_URL) {
    return console.log("Missing MongoDB URL");
  }

  if (isConnected) {
    return console.log("MongoDB is already connected");
  }
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      dbName: "evently",
    });
    isConnected = true;
    console.log("MongoDB is connected");
  } catch (error) {
    console.log("Error connecting to MongoDB:", error);
  }
};
