import Axios from "axios";

export const helpFetchClients = async () =>
  await Axios.get("http://localhost:5000/api/clients");

export const helpAddClient = async (body, config) =>
  await Axios.post("http://localhost:5000/api/clients/add", body, config);

export const helpFetchCars = async () =>
  await Axios.get("http://localhost:5000/api/cars");

export const helpAddCar = async (body, config) =>
  await Axios.post("http://localhost:5000/api/cars/add", body, config);

export const helpFetchOperations = async () =>
  await Axios.get("http://localhost:5000/api/operations");

export const helpAddOperation = async (body, config) =>
  await Axios.post("http://localhost:5000/api/operations/add", body, config);
