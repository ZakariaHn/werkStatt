import React, { Fragment } from "react";
import { v4 as id } from "uuid";

export const GetSelectedItem = ({ target }) => {
  const { cars, ops } = target;

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
    <ul>
      cars:
      {cars.map((car) => (
        <li key={car._id}>{car.carModel}</li>
      ))}
    </ul>
  );

  const handleOps = (ops) => (
    <ul>
      ops:
      {ops.map((operation) => (
        <li key={operation._id}>{operation.name}</li>
      ))}
    </ul>
  );

  return (
    <Fragment>
      <ul className="targetsInfos">{handleTargetObject(target)}</ul>
      {cars && handleCars(cars)}
      {ops && handleOps(ops)}
    </Fragment>
  );
};
