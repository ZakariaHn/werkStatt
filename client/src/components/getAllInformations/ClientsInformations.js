import React from "react";

export const ClientsInformations = (props) => {
  const { lastName, firstName, birthdate, address, email } = props.clientInfos;
  return (
    <ul>
      <li>{`First name: ${firstName}`}</li>
      <li>{`Last name: ${lastName}`}</li>
      <li>{`Date of birth: ${birthdate}`}</li>
      <li>{`Address: ${address}`}</li>
      <li>{`Email: ${email}`}</li>
    </ul>
  );
};
