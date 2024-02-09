const express = require('express');
const { httpGetUsers,httpGetUser, httpGetUserSnippets, httpPostUsers, httpUpdateUser } = require('./users.controller');

const UsersRouter = express.Router();

// UsersRouter.get('/', httpGetUsers);
// UsersRouter.get('/:id', httpGetUser);
// UsersRouter.get('/:id/snippets', httpGetUserSnippets);
// UsersRouter.post('/', httpPostUsers);
// UsersRouter.put('/:id', httpUpdateUser);

module.exports = UsersRouter;