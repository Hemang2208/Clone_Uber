// Description: Entry point for the application. Creates an Express app, connects to the database, and defines routes.

import dotenv from 'dotenv';
import cors from 'cors';
import express from 'express';
import connectToDb from './db/db.js';
import userRoutes from './routes/user.route.js';
import cookieParser from 'cookie-parser';
import captainRoutes from './routes/captain.route.js';

// Load environment variables
dotenv.config();

// Create Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

// Connect to the database
connectToDb();

// Root Route
app.get('/', (req, res) => {
  res.send('Ayush Bhadkhau GOD!');
});

// Root Route ( Ayush )
app.get('/health', (req, res) => {
  res.send('Ayush Health is OKAY');
});

// User Routes
app.use('/users', userRoutes);

// Captain Routes
app.use('/captains', captainRoutes);

// Export the app for server.js
export default app;