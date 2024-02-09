const express = require('express');
const { httpGetWallet, httpUpdateWallet } = require('./wallets.controller');

const walletsRouter = express.Router();

walletsRouter.get('/:id', httpGetWallet);
walletsRouter.put('/:id', httpUpdateWallet);


module.exports = walletsRouter;