import express from "express";
import NewsRoutes from "./routes/newsRoutes";
import { connectMongoDB, connectRedis } from "./config";
import cron from 'node-cron';
import { cronJob } from "./cron";

const app = express();
app.use(express.json());

app.use("/news", NewsRoutes);
export const startApp = async () => {
  // await cronJob();
  // await connectMongoDB();
  // await connectRedis();
  // console.log("Connected to MongoDB and Redis.");
};

export default app;
