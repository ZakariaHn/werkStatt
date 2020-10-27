const mongoose = require("mongoose");
const carSchema = require("./car-schema");

const reqStrMax = {
  type: String,
      required: true,
      max: 30,
      min: 2,
}

const clientSchema = new mongoose.Schema(
  {
    firstname: reqStrMax,
    lastname: reqStrMax,
    email: {
      type: String,
      required: true,
      max: 30,
      min: 8,
    },
    birthdate: {
      type: String,
    },
    address: {
      type: String,
      required: true,
      max: 30,
      min: 6,
    },
    cars: [carSchema],
  },
  {
    timestamps: true,
    toJSON: {
      transform: function (doc, ret) {
        delete ret.__v;
      },
    },
  }
);

const ClientModel = mongoose.model("Client", clientSchema);
module.exports = ClientModel;