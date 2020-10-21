const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema(
  {
    firstName: {
      name: "First Name: ",
      type: String,
      required: true,
      max: 30,
      min: 5,
    },
    lastName: {
      type: String,
      required: true,
      max: 30,
      min: 5,
    },
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
    cars: {
      type: Array,
    },
  },
  {
    // removing password and __v from the returned data from api
    toJSON: {
      transform: function (doc, ret) {
        delete ret.__v;
      },
    },
  }
);

const ClientModel = mongoose.model("Client", clientSchema);

module.exports = ClientModel;
