const express = require('express');
const { httpPostUsers } = require('./users.controller');

const UsersRouter = express.Router();

UsersRouter.post('/', httpPostUsers);


module.exports = UsersRouter;