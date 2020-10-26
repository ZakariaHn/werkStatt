const mongoose = require("mongoose");
const carSchema = require('./car-schema');
const CarModel = mongoose.model("Car", carSchema);
module.exports = CarModel;
