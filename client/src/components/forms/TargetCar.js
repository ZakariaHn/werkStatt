import React from "react";
import { v4 as id } from "uuid";
import { useSelector } from "react-redux";

export const TargetCar = () => {
  const car = useSelector((state) => state.cars.car);
  console.log("car", car);
  const handleTargetCar = (car, value) => {
    // delete car._id;
    // delete car.ownerId;

    let listItems = [];
    for (const [key, value] of Object.entries(car)) {
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

    return listItems;
  };

  return (
    <div className="targetCarWrapper">
      <div className="selected-item-header">
        <small>
          {` Operations on 
          ${car[0].carModel[0].toUpperCase() + car[0].carModel.slice(1)}`}
        </small>
      </div>
      <ul className="targetCarList">{handleTargetCar(car[0])}</ul>
    </div>
  );
};
