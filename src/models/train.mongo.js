const mongoose = require("mongoose");

const stopSchema = new mongoose.Schema({
    station_id: {
        type: Number,
        required: true,
    },
    arrival_time: {
        type: String,
    },
    departure_time: {
        type: String,
    },
    fare: {
        type: Number,
    },
});

const trainSchema = new mongoose.Schema({
    train_id: {
        type: Number,
        unique: true,
        required: true,
    },
    train_name: {
        type: String,
        required: true,
    },
    capacity: {
        type: Number,
        required: true,
    },
    stops: {
        type: [stopSchema],
    },
});

module.exports = mongoose.model('Train', trainSchema);