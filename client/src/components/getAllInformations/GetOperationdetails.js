import React from "react";
import { useSelector } from "react-redux";

export const GetOperationDetails = () => {
  const selectedOperation = useSelector((state) => state.operations.operation);
  const { name, description, carId, parts, cost } = selectedOperation;
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
