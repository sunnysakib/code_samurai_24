const express = require('express');
const app = express();
const cors = require('cors');
const booksRouter = require('./routes/books/book.router');

// Middleware
app.use(cors());
app.use(express.json());
app.use('/api/books', booksRouter);

// base routes
app.get('/', (req, res) => {
    res.json("Welcome to Code Route");
})




module.exports = app;