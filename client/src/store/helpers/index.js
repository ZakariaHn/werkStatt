import Axios from "axios";

export const helpFetchClients = async () => await Axios.get("http://localhost:5000/api/clients");