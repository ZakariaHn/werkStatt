import axios from 'axios';

export const fetchClients = async () => await axios.get('http://localhost:5000/api/clients');