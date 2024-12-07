import mongoose from "mongoose";
import { log } from "../helpers/log";

export async function connectMongoDB() {
  const mongoUri = process.env.MONGO_URI;

  console.log(mongoUri,'mongoUri')

  if (!mongoUri) {
    log("Warning: MONGO_URI is not set. Falling back to the default MongoDB URI.", "warn");
    return;
  }

  try {
    const connection = await mongoose.connect(mongoUri);
    log(`MongoDB connected successfully to host: ${connection.connection.host}, database: ${connection.connection.name}`);
  } catch (error: unknown) {
    log(`Error connecting to MongoDB: ${(error as Error).message}`, "error");
    process.exit(1); // Exit the application with failure
  }

  // Handle disconnections
  mongoose.connection.on("disconnected", () => {
    log("MongoDB connection disconnected.", "warn");
  });

  mongoose.connection.on("error", (err) => {
    log(`MongoDB connection error: ${err.message}`, "error");
  });

  // Gracefully close the connection on termination signals
  process.on("SIGINT", async () => {
    await mongoose.connection.close();
    log("MongoDB connection closed due to application termination.", "info");
    process.exit(0); // Exit the application cleanly
  });
}
