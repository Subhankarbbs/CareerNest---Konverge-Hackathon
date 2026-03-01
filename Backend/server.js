import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import cors from "cors";

import connectDB from "./config/db.js";
import jobRoutes from "./routes/jobsRoutes.js";
import errorHandler from "./middleware/errorMiddleware.js";

// Load environment variables
dotenv.config();

const app = express();

// Connect to DB
connectDB();

// Middleware
app.use(express.json());

app.use(
  cors({
    origin: "https://career-nest-konverge-hackathon.vercel.app",
  })
);

// Root route
app.get("/", (req, res) => {
  res.status(200).json({ message: "CareerNest API is running..." });
});

// Job routes
app.use("/api/jobs", jobRoutes);

// 404 handler
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// Global error handler (MUST be last)
app.use(errorHandler);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});