require('dotenv').config();
const axios = require('axios');
const mongoose = require('mongoose');
const Movie = require('../src/models/Movie');

const TMDB_API_KEY = '280711ef7b54da86771b354f8b53bad7'
const TMDB_URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${TMDB_API_KEY}`;

const fetchAndSeed = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        
        const response = await axios.get(TMDB_URL);
        const movies = response.data.results.map(m => ({
            title: m.title,
            description: m.overview,
            genre: 'Action', // Simplified for now
            duration: 120,    // You'd need a separate call for full details
            price: 10
        }));

        await Movie.deleteMany({});
        await Movie.insertMany(movies);
        
        console.log(`Successfully imported ${movies.length} movies!`);
    } catch (err) {
        console.error("Error fetching from TMDb:", err.message);
    } finally {
        process.exit();
    }
};

fetchAndSeed();