const ClientModel = require("../models/ClientModel");

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
    const client = await ClientModel.findById(req.params.id);
    return res.status(200).json(client);
  } catch (error) {
    console.log(error);
  }
};

exports.addClient = async (req, res, next) => {
  try {
    const client = new ClientModel(req.body);
    await client.save();
    res.status(200).json(client);
  } catch (error) {
    console.log(error);
  }
};

exports.deleteClient = async (req, res, next) => {
  try {
    const client = await ClientModel.findOneAndRemove({
      email: req.params.email,
    });
    return res.status(200).json(client);
  } catch (error) {
    res.status(404).send("Client was not found.");
  }
};

exports.updateClient = async (req, res, next) => {
  try {
    const client = await ClientModel.findOneAndUpdate(req.params.lastName, {
      new: true,
    });
    return res.status(200).json(client);
  } catch (error) {
    res.status(404).send("Client was not found.");
  }
};
