import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import connectToDb from "./db/db.js";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/user.route.js";
import captainRoutes from "./routes/captain.route.js";

// Load Environment Variables
dotenv.config();

// Create Express App
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

// Database
connectToDb();

// Root Route
app.get("/", (req, res) => {
  res.send("Ayush Bhadkhau GOD!");
});

// Root Route ( Ayush )
app.get("/health", (req, res) => {
  res.send("Ayush Health is OKAY");
});

// User Routes
app.use("/users", userRoutes);

// Captain Routes
app.use("/captains", captainRoutes);

export default app;
