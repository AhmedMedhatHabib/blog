const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        min: 3,
        max: 128
    },
    lastName: {
        type: String,
        required: true,
        min: 3,
        max: 128
    },
    email: {
        type: String,
        required: true,
        max: 255,
        min: 12
    },
    phone: {
        type: String,
        required: true,
        min: 10
    },
    password: {
        type: String,
        required: true,
        max: 1024,
        min: 8
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("User", userSchema);
