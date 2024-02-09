const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    id: {
        type: Number,
        unique: true,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    genre: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        min: [0, "price can't be negative"],
    }
});

module.exports = mongoose.model('Book', bookSchema);