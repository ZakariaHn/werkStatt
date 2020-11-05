import React, { Fragment } from "react";
import { v4 as id } from "uuid";
import { useSelector } from "react-redux";

export const TargetCar = () => {
  const car = useSelector((state) => state.cars.car);

  const handleTargetCar = (car) => {
    let listItems = [];
    for (const [key, value] of Object.entries(car)) {
      listItems.push(
        <li key={id()}>
          {key.split(/(?=[A-Z])/).join(" ")}: {value}
        </li>
      );
    }

    return listItems;
  };

  return (
    <Fragment>
      <ul className="targetsInfos">{handleTargetCar(car[0])}</ul>
    </Fragment>
  );
};
