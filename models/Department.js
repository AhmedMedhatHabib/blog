const mongoose = require("mongoose");

const departmentSchema = new mongoose.Schema({
    departmentName: {
        type: String,
        required: true,
        min: 3,
        max: 128
    }
});

module.exports = mongoose.model("Department", departmentSchema);
