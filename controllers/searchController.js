const ClientModel = require("../models/ClientModel");

exports.getData = async (req, res, next) => {
    try {
        console.log(req.body);
        const clients = await ClientModel.find();
        return res.status(200).json(clients);
    } catch (error) {
        console.log(error);
    }
};