const CarModel = require("../models/CarModel");
const ClientModel = require("../models/ClientModel");
const OperationModel = require("../models/OperationModel");

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
    const client = await ClientModel.findById(req.body.ownerId);
    const car = new CarModel(req.body);
    client.cars.push(car);
    await client.save();
    await car.save();
    res.status(200).json(car);
  } catch (error) {
    console.log(error);
  }
};

exports.deleteCar = async (req, res, next) => {
  try {
    const car = await CarModel.findById(req.params._id);
    await OperationModel.deleteMany({ carId: car._id });
    car.remove();
    return res.status(200).json(car);
  } catch (error) {
    res.status(404).send("Car was not found.");
  }
};

exports.updateCar = async (req, res, next) => {
  try {
    const car = await CarModel.findByIdAndUpdate(
      req.params._id,
      {
        ownerId: req.body.ownerId,
        carModel: req.body.carModel,
        carModelType: req.body.carModelType,
        chassyNr: req.body.chassyNr,
        engine: req.body.engine,
        plateNr: req.body.plateNr,
      },
      {
        new: true,
      }
    );
    car.save();
    return res.status(200).json(car);
  } catch (error) {
    res.status(404).send("Car was not found.");
  }
};
