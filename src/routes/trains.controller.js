const Train = require('../models/train.mongo')

// POST
async function httpPostTrain(req, res) {
  const body = req.body;
  try {
    const newTrain = {
        train_id: body.train_id,
        train_name: body.train_name,
        capacity: body.capacity,
        stops: body.stops
    };
    await Train.create(newTrain);
    
    return res.status(201).json(newTrain);
  } catch (error) {
    return res.status(400).json({ message: "train creation failed", error: err.message });
  }
}

module.exports = { httpPostTrain };
