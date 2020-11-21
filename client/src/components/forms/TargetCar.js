import React from "react";
import { v4 as id } from "uuid";
import { useSelector } from "react-redux";

export const TargetCar = () => {
  const car = useSelector((state) => state.cars.car);
  console.log(car);
  const client = useSelector((state) => state.target.item);

  const handleTargetCar = (car) => {
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

  const handleOperations = (ops) => (
    <select>
      <option>Operations</option>
      {ops.map((op) => (
        <option key={id()} value={op.name}>
          {op.name}
        </option>
      ))}
    </select>
  );

  let firstName = client.firstname[0].toUpperCase() + client.firstname.slice(1);
  let lastName = client.lastname[0].toUpperCase() + client.lastname.slice(1);
  let carModel = car[0].carModel[0].toUpperCase() + car[0].carModel.slice(1);

  return (
    <div className="targetCarWrapper">
      <div className="selected-item-header">
        <small>Car: {carModel}</small>
        <small>
          Owner: {firstName} {lastName}
        </small>
      </div>
      <ul className="targetCarList">{handleTargetCar(car[0])}</ul>
      {car.ops && handleOperations(car.ops)}
    </div>
  );
};
