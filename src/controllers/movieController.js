// src/controllers/movieController.js

const Movie = require('../models/Movie'); // Ensure you import your Movie model

// PASTE IT HERE:
exports.getAllMovies = async (req, res, next) => {
    try {
        const movies = await Movie.find();
        res.status(200).json(movies);
    } catch (err) {
        next(err); 
    }
};

// You can add other functions below it, like addMovie, etc.
exports.addMovie = async (req, res, next) => {
    // ... logic for adding a movie
};