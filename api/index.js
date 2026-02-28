import express from "express";
import dotenv from "dotenv";
import connectDB from "../config/db.js";
import jobRoutes from "../routes/jobsRoutes.js";
import errorHandler from "../middleware/errorMiddleware.js";

dotenv.config();

const app = express();

connectDB();

app.use(express.json());

app.use("/api/jobs", jobRoutes);

app.use((req, res, next) => {
  const error = new Error("Route Not Found");
  res.status(404);
  next(error);
});

app.use(errorHandler);

export default app;