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
  delete target._id;
  const dispatch = useDispatch();

  const handleTargetObject = (target) => {
    let listItems = [];
    for (const [key, value] of Object.entries(target)) {
      if (key !== "cars" && key !== "ops") {
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

  const handleHeader = () => {
    return (
      <div className="selected-item-header">
        <small>
          {cars &&
            `${target.firstname[0].toUpperCase() + target.firstname.slice(1)} ${
              target.lastname[0].toUpperCase() + target.lastname.slice(1)
            }`}
          {ops &&
            `${target.carModel[0].toUpperCase() + target.carModel.slice(1)}`}
        </small>
      </div>
    );
  };

  // Set cars owned by the selected client in a drop down list and show its data
  const handleCarChange = (e) => {
    const targetCar = cars.filter((car) => car.carModel === e.target.value);
    dispatch({ type: TARGET_CAR, payload: targetCar });
    dispatch({ type: CLICKED, payload: "targetCar" });
  };

  const handleCars = (cars) => (
    <select onChange={handleCarChange}>
      <option>Operations</option>
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
      {handleHeader()}
      <ul>{handleTargetObject(target)}</ul>
      {cars && handleCars(cars)}
      {ops && handleOperations(ops)}
    </Fragment>
  );
};
