import React, { Fragment } from "react";
import { v4 as id } from "uuid";
import { useSelector } from "react-redux";

export const TargetCar = () => {
  const car = useSelector((state) => state.cars.car);
  console.log("car", car);
  const handleTargetCar = (car) => {
    // delete car._id;
    // delete car.ownerId;

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
      <ul className="targetCarList">{handleTargetCar(car[0])}</ul>
    </Fragment>
  );
};
