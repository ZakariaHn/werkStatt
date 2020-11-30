const ClientModel = require("../models/ClientModel");
const CarModel = require("../models/CarModel");
const OperationModel = require("../models/OperationModel");

exports.getClients = async (req, res, next) => {
  try {
    const clients = await ClientModel.find();
    return res.status(200).json(clients);
  } catch (error) {
    console.log(error);
  }
};

exports.getClient = async (req, res, next) => {
  try {
    const client = await ClientModel.findOne(req.params._id);
    return res.status(200).json(client);
  } catch (error) {
    console.log(error);
  }
};

exports.addClient = async (req, res, next) => {
  //Check if user already exists
  const emailExists = await ClientModel.findOne({ email: req.body.email }); // how to use this inside a try catch block
  if (emailExists) return res.status(400).send("Email already exists !");

  const client = new ClientModel(req.body);
  await client.save();
  res.status(200).json(client);
};

exports.deleteClient = async (req, res, next) => {
  try {
    const client = await ClientModel.findById(req.params._id);
    const clientCars = await CarModel.find({ ownerId: client._id })
    const clientCarsIds = clientCars.map(car => car._id);
    for (const id of clientCarsIds) {
      await OperationModel.deleteMany({ carId: id });
    }
    await CarModel.deleteMany({ ownerId: client._id });
    client.remove();
    return res.status(200).json(client);
  } catch (error) {
    res.status(404).send("Client was not found.");
  }
};

exports.updateClient = async (req, res, next) => {
  try {
    const client = await ClientModel.findByIdAndUpdate(
      req.params._id,
      {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        birthdate: req.body.birthdate,
        address: req.body.address,
      },
      {
        new: true,
      }
    );
    client.save();
    return res.status(200).json(client);
  } catch (error) {
    res.status(404).send("Client was not found.");
  }
};
