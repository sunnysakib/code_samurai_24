const express = require('express');
const { httpPostTrain } = require('./trains.controller');

const trainsRouter = express.Router();

trainsRouter.post('/', httpPostTrain);


module.exports = trainsRouter;