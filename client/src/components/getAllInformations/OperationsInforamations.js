import React from "react";

export const OperationsInformations = (props) => {
  const { name, description, carId, parts, cost } = props.operationInfos;
  return (
    <ul>
      <li>{`Name: ${name}`}</li>
      <li>{`Description: ${description}`}</li>
      <li>{`Car Id: ${carId}`}</li>
      <li>{`Parts: ${parts}`}</li>
      <li>{`Cost: ${cost}`}</li>
    </ul>
  );
};
