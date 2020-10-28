const mongoose = require("mongoose");
const operationSchema = require("./operation-schema");

const reqStrMax = {
    type: String,
    required: true,
    max: 30,
    min: 2,
}

module.exports = carSchema = new mongoose.Schema(
    {
        ownerId: reqStrMax,
        carModel: reqStrMax,
        carModelType: reqStrMax,
        chassyNr: reqStrMax,
        engine: reqStrMax,
        plateNr: reqStrMax,
        huau: {
            type: Date,
        },
        ops: [operationSchema],
    },
    {
        timestamps: true,
        // removing password and __v from the returned data from api
        toJSON: {
            transform: function (doc, ret) {
                delete ret.__v;
            },
        },
    }
);