import Axios from "axios";

//Clients Helpers

export const helpFetchClients = async () =>
  await Axios.get("http://localhost:5000/api/clients");

export const helpAddClient = async (body, config) =>
  await Axios.post("http://localhost:5000/api/clients/add", body, config);

export const helpDeleteClient = async (_id) =>
  await Axios.delete(`http://localhost:5000/api/clients/delete/${_id}`);

export const helpEditClient = async (client) =>
  await Axios.patch(
    `http://localhost:5000/api/clients/update/${client._id}`,
    client
  );

// Cars Helpers

export const helpFetchCars = async () =>
  await Axios.get("http://localhost:5000/api/cars");

export const helpAddCar = async (body, config) =>
  await Axios.post("http://localhost:5000/api/cars/add", body, config);

export const helpDeleteCar = async (id) =>
  await Axios.delete(`http://localhost:5000/api/cars/delete/${id}`);

export const helpEditCar = async (car) =>
  await Axios.patch(`http://localhost:5000/api/cars/update/${car._id}`, car);

// Operations Helpers

export const helpFetchOperations = async () =>
  await Axios.get("http://localhost:5000/api/operations");

export const helpAddOperation = async (body, config) =>
  await Axios.post("http://localhost:5000/api/operations/add", body, config);

export const helpDeleteOperation = async (id) =>
  await Axios.delete(`http://localhost:5000/api/operations/delete/${id}`);

export const helpEditOperation = async (operation) =>
  await Axios.patch(
    `http://localhost:5000/api/operations/update/${operation._id}`,
    operation
  );
