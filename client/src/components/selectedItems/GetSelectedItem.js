import React, { Fragment } from "react";
import { v4 as id } from "uuid";

export const GetSelectedItem = ({ target }) => {
  const { cars, ops } = target;
  delete target._id;
  const handleTargetObject = (target) => {
    let listItems = [];
    for (const [key, value] of Object.entries(target)) {
      if (key !== "cars" && key !== "ops") {
        //fix push li key
        listItems.push(
          <li key={id()}>
            {key.split(/(?=[A-Z])/).join(" ")}: {value}
          </li>
        );
      }
    }
    return listItems;
  };

  const handleCars = (cars) => (
    <select>
      <option style={{ display: "none" }}>Cars</option>
      {cars.map((car) => (
        <option key={car._id}>{car.carModel}</option>
      ))}
    </select>
  );

  const handleOperations = (ops) => (
    <select>
      <option style={{ display: "none" }}>Operations</option>
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
