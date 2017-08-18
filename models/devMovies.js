const mongoose = require('mongoose');

const devMovieSchema = mongoose.Schema({
    title: String,
    year: String
});

const DevMovies = mongoose.model('DevMovie', devMovieSchema);

module.exports = DevMovies;
