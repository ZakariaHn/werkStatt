import React, { Fragment } from "react";
import { v4 as id } from "uuid";
import { useDispatch } from "react-redux";
import { SET_TARGET, TARGET_CAR } from "../../store/actions/types";

// Render the fetched data from an endpoint in a list. Clients/ cars/ operations

export const GetSelectedItem = ({ target }) => {
  const { cars, ops } = target;

  const dispatch = useDispatch();

  const handleTargetObject = (target) => {
    let listItems = [];
    for (const [key, value] of Object.entries(target)) {
      if (key !== "cars" && key !== "ops") {
        // there must be a way to extract 'index' from a for of loop
        listItems.push(
          <li key={id()}>
            {key.split(/(?=[A-Z])/).join(" ")}: {value}
          </li>
        );
      }
    }
    return listItems;
  };

  // Set cars in a drop down list and show its data

  const handleCarChange = (e) => {
    const targetCar = cars.filter((car) => car.carModel === e.target.value);
    dispatch({ type: TARGET_CAR, payload: targetCar });
  };

  const handleCars = (cars) => (
    <select onChange={handleCarChange}>
      {cars.map((car) => (
        <option key={car._id} value={car.carModel}>
          {car.carModel}
        </option>
      ))}
    </select>
  );

  // Set operations in a drop down list and show its data

  const handleOperationChange = (e) => {
    const targetOperation = ops.filter(
      (operation) => operation.name === e.target.value
    );
    dispatch({ type: SET_TARGET, payload: targetOperation });
  };

  const handleOperations = (ops) => (
    <select onChange={handleOperationChange}>
      {ops.map((operation) => (
        <option key={operation._id}>{operation.name}</option>
      ))}
    </select>
  );

  return (
    <Fragment>
      <ul className="targetsInfos">{handleTargetObject(target)}</ul>
      {cars && handleCars(cars)}
      {ops && handleOperations(ops)}
    </Fragment>
  );
};
