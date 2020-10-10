import React, { useState, useEffect } from "react";
import axios from "axios";

export const ClientsList = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      const res = await axios.get("http://localhost:5000/api/clients");
      setClients(res.data);
    };
    fetchdata();
  }, []);

  return (
    <div className="clientsList">
      <ul>
        {clients.map((client) => (
          <li key={client._id}>{client.lastName}</li>
        ))}
      </ul>
    </div>
  );
};
