import Axios from "axios";

export const helpFetchClients = async () =>
  await Axios.get("http://localhost:5000/api/clients");

export const helpFetchCars = async () =>
  await Axios.get("http://localhost:5000/api/cars");

export const helpFetchOperations = async () =>
  await Axios.get("http://localhost:5000/api/Operations");
