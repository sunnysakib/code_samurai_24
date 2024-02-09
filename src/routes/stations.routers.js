const express = require('express');
const { httpPostStations, httpGetStations, httpGetStationsByTrain } = require('./stations.controller');

const stationsRouter = express.Router();

stationsRouter.get('/', httpGetStations);
stationsRouter.get('/:id/trains', httpGetStationsByTrain);
stationsRouter.post('/', httpPostStations);



module.exports = stationsRouter;