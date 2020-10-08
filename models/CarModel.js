const mongoose = require('mongoose');

const CarSchema = new mongoose.Schema({
    owner: {
        type: String,
        required: true
    },
    carModel: {
        type: String,
        required: true,
        max: 30
    },
    carModelType: {
        type: String,
        max: 30
    },
    chassyNr: {
        type: String,
        required: true
    },
    engine: {
        type: String,
        required: true
    },
    plateNr: {
        type: String,
        required: true
    },
    huau: {
        type: Date
    },
    ops: {
        type: Array
    }
},
    {   // removing password and __v from the returned data from api
        toJSON: {
            transform: function (doc, ret) {
                delete ret.__v;
            }
        }
    });

const CarModel = mongoose.model('Car', CarSchema);

module.exports = CarModel;