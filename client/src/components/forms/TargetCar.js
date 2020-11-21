import React from "react";
import { v4 as id } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { CLICKED, TARGET_CAR } from "../../store/actions/types";

export const TargetCar = () => {
  const car = useSelector((state) => state.cars.carsArray);
  const client = useSelector((state) => state.target.item);
  const dispatch = useDispatch();

  const handleTargetCar = (car) => {
    let listItems = [];
    for (const [key, value] of Object.entries(car)) {
      if (key !== "ops") {
        listItems.push(
          <li key={id()}>
            {key
              .split(/(?=[A-Z])/)
              .join(" ")[0]
              .toUpperCase() + key.slice(1)}
            : {value}
          </li>
        );
      }
    }
    return listItems;
  };

  // const handleCarChange = (e) => {
  //   const targetCar = cars.filter((car) => car.carModel === e.target.value);
  //   dispatch({ type: TARGET_CAR, payload: targetCar });
  //   dispatch({ type: CLICKED, payload: "targetCar" });
  // };
  const handleOperations = (ops) => (
    <select value="1">
      <option value="1" disabled>
        Operations
      </option>
      {ops.map((op) => (
        <option key={id()} value={op.name}>
          {op.name}
        </option>
      ))}
    </select>
  );

  let firstName = client.firstname[0].toUpperCase() + client.firstname.slice(1);
  let lastName = client.lastname[0].toUpperCase() + client.lastname.slice(1);
  let carModel = car[0].carModel[0].toUpperCase() + car[0].carModel.slice(1);

  return (
    <div className="targetCarWrapper">
      <div className="selected-item-header">
        <small>Car: {carModel}</small>
        <small>
          Owner: {firstName} {lastName}
        </small>
      </div>
      <ul className="targetCarList">{handleTargetCar(car[2])}</ul>
      {car.ops && handleOperations(car.ops)}
    </div>
  );
};
