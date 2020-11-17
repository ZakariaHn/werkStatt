import React from "react";
import { v4 as id } from "uuid";
import { useSelector } from "react-redux";

export const TargetCar = () => {
  const car = useSelector((state) => state.cars.car);
  const client = useSelector((state) => state.target.item);

  const handleTargetCar = (car) => {
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
          Car: {car[0].carModel[0].toUpperCase() + car[0].carModel.slice(1)}
        </small>
        <small>
          Owner:{" "}
          {client.firstname[0].toUpperCase() + client.firstname.slice(1) + " "}
          {client.lastname[0].toUpperCase() + client.lastname.slice(1)}
        </small>
      </div>
      <ul className="targetCarList">{handleTargetCar(car[0])}</ul>
    </div>
  );
};
