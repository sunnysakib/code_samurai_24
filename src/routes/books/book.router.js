const express = require('express');
const { httpPostBooks, httpGetBooks, httpGetBookById, httpUpdateBook,  } = require('./book.controller');

const booksRouter = express.Router();

booksRouter.get('/', httpGetBooks);
booksRouter.get('/:id', httpGetBookById);
booksRouter.post('/', httpPostBooks);
booksRouter.put('/:id', httpUpdateBook);

module.exports = booksRouter;