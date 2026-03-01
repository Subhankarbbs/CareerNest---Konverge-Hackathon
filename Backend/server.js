import express from "express";
import dotenv from "dotenv";
import colors from 'colors'
import errorHandler from "./middleware/errorMiddleware.js";
import connectDB from "./config/db.js";
import cors from "cors";

import jobRoutes from './routes/jobsRoutes.js'

// Load environment variables
dotenv.config();

const app = express();

// // Middleware
app.use(express.json());
app.use(errorHandler)
app.use(
  cors({
    origin: "https://career-nest-konverge-hackathon.vercel.app/",
  })
);
//Connection to DB
connectDB();

// // Root route
app.get("/", (req, res) => {
  res.json({ message: "CareerNest API is running..." }  ).status(200);
});

// Job Routes
app.use("/api/jobs", jobRoutes);

// 404 Handler
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// // Global Error Handler
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).json({ message: "Something went wrong" });
// });

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});