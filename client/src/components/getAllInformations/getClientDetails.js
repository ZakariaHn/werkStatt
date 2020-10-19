import React from "react";
import { useSelector } from "react-redux";

export const GetClientDetails = (props) => {
  console.log("selectenClient", props.client);
  // console.log("myClients: ", myClients);
  // const targetClient = myClients.filter((client) => client._id === sl._id);
  // console.log("target:", targetClient);
  const { lastName, firstName, birthdate, address, email } = props.clientInfos;

  return (
    <ul className="clientsInfos">
      <li>{`First name: ${firstName}`}</li>
      <li>{`Last name: ${lastName}`}</li>
      <li>{`Date of birth: ${birthdate}`}</li>
      <li>{`Address: ${address}`}</li>
      <li>{`Email: ${email}`}</li>
    </ul>
  );
};
