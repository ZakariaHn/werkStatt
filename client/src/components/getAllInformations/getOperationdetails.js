import React from "react";

export const GetOperationDetails = (props) => {
  const { name, description, carId, parts, cost } = props.operationInfos;
  return (
    <ul className="operationsInfos">
      <li>{`Name: ${name}`}</li>
      <li>{`Description: ${description}`}</li>
      <li>{`Car Id: ${carId}`}</li>
      <li>{`Parts: ${parts}`}</li>
      <li>{`Cost: ${cost}`}</li>
    </ul>
  );
};
