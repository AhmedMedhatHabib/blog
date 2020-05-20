const mongoose = require("mongoose");

const permissionsSchema = new mongoose.Schema({
    permissionId: {
        type: Number,
        required: true
    },
    allowed: {
        type: Boolean,
        default: false,
    }
})

const userPermissionsSchema = new mongoose.Schema({
    userId: {
        type: mongoose.ObjectId,
        required: true
    },
    permissions: {
        type: [permissionsSchema],
        required: true
    }
});

module.exports = mongoose.model("UserPermissions", userPermissionsSchema);
