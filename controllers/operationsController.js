const OperationModel = require("../models/OperationModel");

exports.getOperations = async (req, res, next) => {
  console.log("get ops route");
  try {
    const operations = await OperationModel.find();
    return res.status(200).json(operations);
  } catch (error) {
    console.log(error);
  }
};

exports.addOperation = async (req, res, next) => {
  console.log("add operation route");
  try {
    const operation = new OperationModel(req.body);
    await operation.save();
    res.status(200).json(operation);
  } catch (error) {
    console.log(error);
  }
};

exports.deleteOperation = async (req, res, next) => {
  const _id = req.params._id;
  try {
    const operation = await OperationModel.findByIdAndDelete({ _id });
    return res.status(200).json(operation);
  } catch (error) {
    res.status(404).send("Operation was not found.");
  }
};

exports.updateOperation = async (req, res, next) => {
  try {
    const operation = await OperationModel.findByIdAndUpdate(
      { _id: req.params._id },
      {
        name: req.body.name,
        description: req.body.description,
        carId: req.body.carId,
        parts: req.body.parts,
        cost: req.body.cost,
      }
    );
    operation.save();
    return res.status(200).json(operation);
  } catch (error) {
    res.status(404).send("Operation was not found.");
  }
};
