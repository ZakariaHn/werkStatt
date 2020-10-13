import React from "react";

export const CarsInformations = (props) => {
  const {
    owner,
    carModel,
    carModelType,
    chassyNr,
    engine,
    plateNr,
    huau,
    ops,
  } = props.carInfos;
  return (
    <ul>
      <li>{`owner: ${owner}`}</li>
      <li>{`Car model: ${carModel}`}</li>
      <li>{`Car model type: ${carModelType}`}</li>
      <li>{`Chassy number: ${chassyNr}`}</li>
      <li>{`Engine: ${engine}`}</li>
      <li>{`Plate number: ${plateNr}`}</li>
      <li>{`Huau: ${huau}`}</li>
      <li>{`Operations: ${ops}`}</li>
    </ul>
  );
};
