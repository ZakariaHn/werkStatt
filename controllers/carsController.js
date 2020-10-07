const CarModel = require("../models/CarModel");

exports.getCars = async (req, res, next) => {
  try {
    const cars = await CarModel.find();
    return res.status(200).json(cars);
  } catch (error) {
    console.log(error);
  }
};

exports.getCarByOwner = async (req, res, next) => {
  try {
    const car = await CarModel.find({ owner: req.params.owner });
    return res.status(200).json(car);
  } catch (error) {
    console.log(error);
  }
};

exports.getCarByChassyNr = async (req, res, next) => {
  try {
    const car = await CarModel.find({ chassyNr: req.params.chassyNr });
    return res.status(200).json(car);
  } catch (error) {
    console.log(error);
  }
};

exports.addCar = async (req, res, next) => {
  console.log(req.body);
  try {
    const car = new CarModel(req.body);
    await car.save();
    res.status(200).json(car);
  } catch (error) {
    console.log(error);
  }
};
