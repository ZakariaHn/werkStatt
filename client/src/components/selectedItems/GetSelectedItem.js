import React, { Fragment, useState } from "react";
import { v4 as id } from "uuid";
import { GET_CARS } from "../../store/actions/types";

export const GetSelectedItem = ({ target }) => {
  const { cars, ops } = target;
  // delete target._id;

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

  const handleChange = e => {
    const targetCar = cars.filter(car => car.carModel === e.target.value);
  }

  const handleCars = (cars) => (
    <select onChange={handleChange}>
      {cars.map((car) => (
        <option key={car._id} value={car.carModel}>{car.carModel}</option>
      ))}
    </select>
  );

  const handleOperations = (ops) => (
    <select>
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
}