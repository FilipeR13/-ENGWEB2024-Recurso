// ex1/models/book.js
const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    bookId: String,
    title: String,
    series: String,
    author: [String],
    rating: String,
    description: String,
    language: String,
    isbn: String,
    genres: [String],
    characters: [String],
    bookFormat: String,
    edition: String,
    pages: Number,
    publisher: String,
    publishDate: String,
    firstPublishDate: String,
    awards: [String],
    numRatings: Number,
    ratingsByStars: [String],
    likedPercent: Number,
    setting: [String],
    coverImg: String,
    bbeScore: Number,
    bbeVotes: Number,
    price: String
});

module.exports = mongoose.model('livro', bookSchema);
