import express from "express";
import cors from "cors";
import fs from "fs";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authroutes.js";
import studentRoutes from "./routes/studentroutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB (don't wait, but try connecting)
connectDB().catch(err => console.error("DB Connection failed:", err));

// Debug endpoint
app.get("/api/debug", (req, res) => {
  res.json({ 
    status: "OK",
    env: {
      NODE_ENV: process.env.NODE_ENV,
      PORT: process.env.PORT,
      MONGO_URI: process.env.MONGO_URI,
      JWT_SECRET: process.env.JWT_SECRET ? "set" : "not set",
      ADMIN_EMAIL: process.env.ADMIN_EMAIL
    }
  });
});

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/students", studentRoutes);

// Health check
app.get("/api/health", (req, res) => {
  res.json({ status: "Server is running" });
});

app.get("/api/latest-courses", (req, res) => {
  try {
    const data = fs.readFileSync(
      "./latestcourses.json",
      "utf-8"
    );

    const courses = JSON.parse(data);

    res.json(courses);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching data",
    });
  }
});

// Error handling middleware (must be last)
app.use((err, req, res, next) => {
  console.error("Error:", err);
  res.status(500).json({ 
    message: "Internal server error", 
    error: err.message,
    stack: process.env.NODE_ENV === 'development' ? err.stack : undefined
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`MongoDB URI: ${process.env.MONGO_URI}`);
});