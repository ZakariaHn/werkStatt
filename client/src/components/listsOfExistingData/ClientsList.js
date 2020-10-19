import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchClientsAction } from "../../store/actions/clientsActions";
import { GetClientDetails } from "../getAllInformations/getClientDetails";

export const ClientsList = (props) => {
  const [clientInfos, setClientInfos] = useState({});

  // const [clients, setClients] = useState([]);
  // const [userInput, setUserInput] = useState("");
  // const [filteredData, setFilteredData] = useState([]);

  const dispatch = useDispatch();

  const myClients = useSelector((state) => state.clients.clientsArray);

  useEffect(() => {
    dispatch(fetchClientsAction());
    console.log("component: ", myClients);
  }, []);

  const renderLists = () => {
    return myClients.map((client) => (
      <Link
        to="clientInfos"
        key={client._id}
        onClick={() => {
          props.getSelectedClient(client);
          // return <GetClientDetails clientInfos={client} />;
        }}
      >
        <li>{client.lastName}</li>
      </Link>
    ));
  };

  // const changeHandler = (e) => {
  //   setUserInput(e.target.value.trim());
  //   // const userText = userInput.toLowerCase();
  //   let newArr = clients.filter((client) => client.lastName === userInput);
  //   userInput === "" ? setFilteredData([]) : setFilteredData(newArr);
  // };

  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   const userText = userInput.toLowerCase();
  //   const searchText = userText ? userText : "";
  //   let newArr = clients.filter((client) => client.lastName === searchText);
  //   setFilteredData(newArr);
  //   console.log(filteredData);
  // };

  return (
    <div className="clientsList">
      {/* <form onSubmit={submitHandler}>
        <input type="text" onChange={changeHandler} value={userInput} />
        <input type="submit" value="filter" />
      </form> */}
      <ul>{renderLists()}</ul>
    </div>
  );
};
