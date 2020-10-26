const mongoose = require("mongoose");

const reqStrMax = {
    type: String,
    required: true,
    max: 80,
    min: 6,
}

module.exports = operationSchema = new mongoose.Schema(
    {
        name: reqStrMax,
        description: reqStrMax,
        carId: {
            type: Number,
            required: true,
        },
        parts: {
            type: Array,
        },
        cost: {
            type: Number,
        },
    },
    {
        timestamps: true,
        toJSON: {
            transform: function (doc, ret) {
                delete ret.__v;
            },
        },
    }
);