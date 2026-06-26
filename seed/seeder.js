require('dotenv').config();
const mongoose = require('mongoose');
const Movie = require('../src/models/Movie'); // Ensure this import is correct

const movies = [
    { title: 'Inception', genre: 'Sci-Fi', duration: 148 },
    { title: 'The Dark Knight', genre: 'Action', duration: 152 },
    { title: 'Interstellar', genre: 'Sci-Fi', duration: 169 }
];

const seedDB = async () => {
    try {
        // Connect directly here to ensure the connection is established
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB Connected for Seeding");

        // Now delete and insert
        await Movie.deleteMany({});
        await Movie.insertMany(movies);
        
        console.log('Database seeded successfully!');
    } catch (err) {
        console.error("Seeding error:", err);
    } finally {
        process.exit();
    }
};

seedDB();