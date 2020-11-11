const ClientModel = require("../models/ClientModel");
const CarModel = require("../models/CarModel");

exports.getClientData = async (req, res, next) => {
  try {
    console.log(req.body);
    const clients = await ClientModel.find();
    return res.status(200).json(clients);
  } catch (error) {
    console.log(error);
  }
};

exports.getCarData = async (req, res, next) => {
  try {
    console.log(req.body);
    const cars = await CarModel.find();
    return res.status(200).json(cars);
  } catch (error) {
    console.log(error);
  }
};
