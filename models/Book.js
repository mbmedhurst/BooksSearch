const mongoose = require('mongoose')

const Book = new mongoose.Schema({
    title: String,
    authors: [String],
    description: String,
    thumbnail: String,
    infoLink: String,
})

module.exports = mongoose.model('Book', Book)