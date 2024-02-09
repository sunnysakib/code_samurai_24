const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    user_id: {
        type: Number,
        unique: true,
        required: true,
    },
    user_name: {
        type: String,
        required: true,
    },
    balance: {
        type: Number,
        required: true,
        min: [0, "Balance can't be negative"],
    },
});

module.exports = mongoose.model('User', userSchema);