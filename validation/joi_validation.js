const Joi = require("@hapi/joi");

const registerValidation = (data) => {
  const joiobject = Joi.object({
    name: Joi.string().min(6).required(),
    email: Joi.string().min(8).required().email(),
    password: Joi.string().min(8).required(),
  });
  return joiobject.validate(data);
};

const loginValidation = (data) => {
  const joiobject = Joi.object({
    email: Joi.string().min(8).required().email(),
    password: Joi.string().min(8).required(),
  });
  return joiobject.validate(data);
};

const validateClient = (data) => {
  const joiobject = Joi.object({
    firstname: Joi.string().min(2).max(30).required(),
    lastname: Joi.string().min(2).max(30).required(),
    birthdate: Joi.string().min(0).max(30),
    address: Joi.string().min(6).max(30).required(),
    email: Joi.string().min(8).required().email(),
  });
  return joiobject.validate(data);
};

const validateCar = (data) => {
  const joiobject = Joi.object({
    carModel: Joi.string().min(2).max(30).required(),
    carModelType: Joi.string().min(2).max(30).required(),
    chassyNr: Joi.string().min(2).max(30).required(),
    engine: Joi.string().min(2).max(30).required(),
    plateNr: Joi.string().min(2).max(30).required(),
  });
  return joiobject.validate(data);
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
module.exports.validateClient = validateClient;
module.exports.validateCar = validateCar;
