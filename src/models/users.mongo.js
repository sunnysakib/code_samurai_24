const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: [true, "username must be unique"],
        required: true,
    },
    experience: {
        type: Number,
        required: true,
        min: [0, "experience can't be negative"]
    },
    languages: [String]
})

module.exports = mongoose.model('User', userSchema);