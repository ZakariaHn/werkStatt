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
  try {
    const car = new CarModel(req.body);
    await car.save();
    res.status(200).json(car);
  } catch (error) {
    console.log(error);
  }
};

exports.deleteCar = async (req, res, next) => {
  try {
    const car = await CarModel.findByIdAndDelete(req.params._id);
    return res.status(200).json(car);
  } catch (error) {
    res.status(404).send("Car was not found.");
  }
};

exports.updateCar = async (req, res, next) => {
  try {
    const car = await CarModel.findOneAndUpdate(
      req.params._id,
      {
        owner: req.body.owner,
        carModel: req.body.carModel,
        chassyNr: req.body.chassyNr,
        engine: req.body.engine,
        plateNr: req.body.plateNr,
      },
      {
        new: true,
      }
    );
    return res.status(200).json(car);
  } catch (error) {
    res.status(404).send("Car was not found.");
  }
};
