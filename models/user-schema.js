const mongoose = require("mongoose");

const reqStrMax = {
    type: String,
    required: true,
    max: 80,
    min: 6,
}

module.exports = userSchema = new mongoose.Schema({
    name: reqStrMax,
    email: {
        type: String,
        required: true,
        unique: true,
        max: 255,
        min: 8
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
},
    {   // removing password and __v from the returned data from api
        toJSON: {
            transform: function (doc, ret) {
                delete ret.password;
                delete ret.__v;
            }
        }
    });