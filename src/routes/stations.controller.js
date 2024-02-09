const Station = require('../models/staion.mongo')
const Train = require('../models/train.mongo')


async function httpPostStations(req, res) {
  const station = req.body;
  try {
    const newStation = {
        station_id: station.station_id,
        station_name: station.station_name,
        longitude: station.longitude,
        latitude: station.latitude
    };
    Station.create(newStation);

    return res.status(201).json(newStation);
  } catch (err) {
    return res.status(400).json({ message: "Train creation failed", error: err.message });
  }
}

async function httpGetStations(req, res) {
  try {
    let stations = await Station.find({})
    return res.status(200).json({Station:stations})
  } catch (err) {
    return res.status(400).json({ message: "Train Fetch failed", error: err.message });
  }
}



async function httpGetStationsByTrain(req, res) {
 try {
    const stationId = parseInt(req.params.station_id);

    const station = await Station.findOne({ station_id: stationId });

    if (!station) {
      return res.status(200).json({
        station_id: stationId,
        trains: []
      });
    }

    const trains = await Train.find({ 'stops.station_id': stationId })
      .sort({ 'stops.departure_time': 1, 'stops.arrival_time': 1, train_id: 1 })
      .select({
        _id: 0,
        'stops.station_id': 1,
        'stops.departure_time': 1,
        'stops.arrival_time': 1,
        train_id: 1
      });

    const response = {
      station_id: stationId,
      trains: trains.map(train => ({
        train_id: train.train_id,
        arrival_time: train.stops.find(stop => stop.station_id === stationId).arrival_time,
        departure_time: train.stops.find(stop => stop.station_id === stationId).departure_time
      }))
    };

    return res.status(200).json(response);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}



module.exports = { httpPostStations, httpGetStations, httpGetStationsByTrain };