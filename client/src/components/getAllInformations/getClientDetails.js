import React from "react";
import { useSelector } from "react-redux";

export const GetClientDetails = () => {
  const client = useSelector((state) => state.clients.client);
  const { firstName, lastName, birthdate, address, email } = client;
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
