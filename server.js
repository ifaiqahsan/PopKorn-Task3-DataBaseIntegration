require('dotenv').config();
console.log("Checking environment variable:", process.env.MONGO_URI);
const express = require('express');
const cors = require('cors');
const connectDB = require('./src/config/db');

// Route Imports
const movieRoutes = require('./src/routes/movieRoutes');
const bookingRoutes = require('./src/routes/bookingRoutes');
const userRoutes = require('./src/routes/userRoutes');
const errorHandler = require('./src/middleware/errorHandler');

const app = express();

// Initialize Database Connection
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use(errorHandler);

// API Route Mounting
app.use('/api/movies', movieRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/users', userRoutes);

// Root Health Check
app.get('/', (req, res) => {
    res.json({ success: true, message: "PopKorn API is connected to MongoDB." });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});