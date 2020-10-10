const mongoose = require("mongoose");

const operationSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      max: 40,
      min: 8,
    },
    description: {
      type: String,
      required: true,
      max: 80,
      min: 8,
    },
    carId: {
      type: Number,
      required: true,
    },
    parts: {
      type: Array,
    },
    cost: {
      type: Number,
    },
  },
  {
    toJSON: {
      transform: function (doc, ret) {
        delete ret.__v;
      },
    },
  }
);

const OperationModel = mongoose.model("Operation", operationSchema);

module.exports = OperationModel;
