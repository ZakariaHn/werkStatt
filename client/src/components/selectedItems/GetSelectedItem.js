import React, { Fragment } from "react";
import { v4 as id } from "uuid";
import { useDispatch } from "react-redux";
import {
  CLICKED,
  TARGET_OPERATION,
  TARGET_CAR,
} from "../../store/actions/types";

// Render data from an mongoDB in lists. Clients/ cars/ operations

export const GetSelectedItem = ({ target }) => {
  const { cars, ops } = target;

  const dispatch = useDispatch();

  const handleTargetObject = (target) => {
    let listItems = [];
    for (const [key, value] of Object.entries(target)) {
      if (key !== "cars" && key !== "ops") {
        listItems.push(
          <li key={id()}>
            {key.split(/(?=[A-Z])/).join(" ")}: {value}
          </li>
        );
      }
    }

    return listItems;
  };

  // Set cars owned by the selected client in a drop down list and show its data
  const handleCarChange = (e) => {
    const targetCar = cars.filter((car) => car.carModel === e.target.value);
    dispatch({ type: TARGET_CAR, payload: targetCar });
    dispatch({ type: CLICKED, payload: "targetCar" });
  };

  const handleCars = (cars) => (
    <select onChange={handleCarChange}>
      <option>Cars</option>
      {cars.map((car) => (
        <option key={id()} value={car.carModel}>
          {car.carModel}
        </option>
      ))}
    </select>
  );

  // Set the related operations to the selected car in a drop down list and show its data

  const handleOperationChange = (e) => {
    const targetOperation = ops.filter((op) => op.name === e.target.value);
    dispatch({ type: TARGET_OPERATION, payload: targetOperation });
    dispatch({ type: CLICKED, payload: "targetOperation" });
  };

  const handleOperations = (ops) => (
    <select onChange={handleOperationChange}>
      <option>Operations</option>
      {ops.map((op) => (
        <option key={id()} value={op.name}>
          {op.name}
        </option>
      ))}
    </select>
  );

  return (
    <Fragment>
      <ul>{handleTargetObject(target)}</ul>
      {cars && handleCars(cars)}
      {ops && handleOperations(ops)}
    </Fragment>
  );
};
