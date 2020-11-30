import React from "react";
import { v4 as id } from "uuid";
import { useSelector } from "react-redux";

export const TargetCar = () => {
  const car = useSelector((state) => state.cars.car);
  const client = useSelector((state) => state.target.item);
  const carOps = useSelector((state) => state.operations.operationsArray);
  console.log("this one", client);

  const handleTargetCar = (car) => {
    let listItems = [];
    for (const [key, value] of Object.entries(car)) {
      if (key !== "ops" && key !== "_id" && key !== "carModel") {
        listItems.push(
          <li key={id()}>
            {key[0].toUpperCase() +
              key
                .slice(1)
                .split(/(?=[A-Z])/)
                .join(" ")}
            :
            <span>
              {key === "createdAt" || key === "updatedAt"
                ? " " + value.substring(0, 10)
                : " " + value}
            </span>
          </li>
        );
      }
    }

    console.log(car.ops);
    console.log("listitems: ", listItems);
    return listItems;
  };

  const handleOperations = (ops) => (
    <div className="selectWrapper">
      <select placeholder="Operations">
        {ops.map((op) => (
          <option key={id()} value={op.name}>
            {op.name}
          </option>
        ))}
      </select>
    </div>
  );

  let firstname = client.firstname[0].toUpperCase() + client.firstname.slice(1);
  let lastname = client.lastname[0].toUpperCase() + client.lastname.slice(1);
  let carModel = car[0].carModel[0].toUpperCase() + car[0].carModel.slice(1);

  return (
    <div className="targetCarWrapper">
      <div className="selected-item-header">
        <small>Car: {carModel}</small>
        <small>
          Owner: {firstname} {lastname}
        </small>
      </div>
      <ul className="targetCarList">{handleTargetCar(car[0])}</ul>
      {carOps && handleOperations(carOps)}
    </div>
  );
};
