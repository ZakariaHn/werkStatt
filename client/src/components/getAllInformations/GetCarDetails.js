import React from "react";
import { useSelector } from "react-redux";

export const GetCarDetails = () => {
  const selectedCar = useSelector((state) => state.cars.car);
  const {
    owner,
    carModel,
    carModelType,
    chassyNr,
    engine,
    plateNr,
    huau,
    ops,
  } = selectedCar;
  return (
    <ul className="carsInfos">
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
