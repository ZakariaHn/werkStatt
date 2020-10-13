import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const ClientsList = (props) => {
  const [clients, setClients] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      const res = await axios.get("http://localhost:5000/api/clients");
      setClients(res.data);
    };
    fetchdata();
  }, []);

  const renderLists = () => {
    return clients.map((client) => (
      <Link
        to="clientInfos"
        key={client._id}
        onClick={() => {
          props.getSelectedClient(client);
        }}
      >
        <li>{client.lastName}</li>
      </Link>
    ));
  };

  const changeHandler = (e) => {
    setUserInput(e.target.value.trim());
    // const userText = userInput.toLowerCase();
    let newArr = clients.filter((client) => client.lastName === userInput);
    userInput === "" ? setFilteredData([]) : setFilteredData(newArr);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const userText = userInput.toLowerCase();
    const searchText = userText ? userText : "";
    let newArr = clients.filter((client) => client.lastName === searchText);
    setFilteredData(newArr);
    console.log(filteredData);
  };

  return (
    <div className="clientsList">
      <form onSubmit={submitHandler}>
        <input type="text" onChange={changeHandler} value={userInput} />
        <input type="submit" value="filter" />
      </form>
      <ul>{renderLists()}</ul>
    </div>
  );
};
