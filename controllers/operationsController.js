const OperationModel = require("../models/OperationModel");
const CarModel = require("../models/CarModel");

exports.getOperations = async (req, res, next) => {
  try {
    const operations = await OperationModel.find();
    return res.status(200).json(operations);
  } catch (error) {
    console.log(error);
  }
};

exports.getCarOperations = async (req, res, next) => {
  try {
    const operations = await OperationModel.find({ carId: req.params._id });
    return res.status(200).json(operations)
  } catch (error) {
    console.log(error);
  }
}

exports.addOperation = async (req, res, next) => {
  try {
    const car = await CarModel.findById(req.body.carId)
    const operation = new OperationModel(req.body);
    car.ops.push(operation);
    await car.save();
    await operation.save();
    res.status(200).json(operation);
  } catch (error) {
    console.log(error);
  }
};

exports.deleteOperation = async (req, res, next) => {
  try {
    const operation = await OperationModel.findByIdAndDelete(req.params._id);
    return res.status(200).json(operation);
  } catch (error) {
    res.status(404).send("Operation was not found.");
  }
};

exports.updateOperation = async (req, res, next) => {
  try {
    const operation = await OperationModel.findByIdAndUpdate(
      req.params._id,
      {
        name: req.body.name,
        description: req.body.description,
        carId: req.body.carId,
        parts: req.body.parts,
        cost: req.body.cost,
      },
      {
        new: true,
      }
    );
    operation.save();
    return res.status(200).json(operation);
  } catch (error) {
    res.status(404).send("Operation was not found.");
  }
};
