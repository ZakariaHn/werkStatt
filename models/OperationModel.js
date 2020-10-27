const mongoose = require("mongoose");
const operationSchema = require('./operation-schema');
const OperationModel = mongoose.model("Operation", operationSchema);
module.exports = OperationModel;
