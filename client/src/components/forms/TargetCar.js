import React, { Fragment } from "react";
import { v4 as id } from "uuid";

export const TargetCar = ({ car }) => {
  const handleTargetCar = (car) => {
    let listItems = [];
    for (const [key, value] of Object.entries(car)) {
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

  return (
    <Fragment>
      <ul className="targetsInfos">{handleTargetCar(car)}</ul>
    </Fragment>
  );
};
