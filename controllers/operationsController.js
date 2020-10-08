const OperationModel = require('../models/OperationModel');

exports.getOperations = async (req, res, next) => {
    console.log('get ops route');
    try {
        const operations = await OperationModel.find();
        return res.status(200).json(operations);
    } catch (error) {
        console.log(error);
    }
};

exports.addOperation = async (req, res, next) => {
    console.log('add operation route');
    try {
      const operation = new OperationModel(req.body);
      await operation.save();
      res.status(200).json(operation);
    } catch (error) {
      console.log(error);
    }
  };