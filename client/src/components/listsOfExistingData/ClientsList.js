import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const ClientsList = (props) => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      const res = await axios.get("http://localhost:5000/api/clients");
      setClients(res.data);
    };

    fetchdata();
  }, []);

  const renderLists = () => {
    return clients.map((client) => (
      <li key={client._id}>
        <Link
          value={JSON.stringify(client)}
          onClick={(e) => {
            props.getSelectedClient(client);
          }}
          to="clientInfos"
        >
          {client.lastName}
        </Link>
      </li>
    ));
  };

  return (
    <div className="clientsList">
      <ul>{renderLists()}</ul>
    </div>
  );
};
