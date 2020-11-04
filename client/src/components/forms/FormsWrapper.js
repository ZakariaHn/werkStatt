import React from "react";
import { RegisterCar } from "./RegisterCar";
import { RegisterClient } from "./RegisterClient";
import { RegisterOperation } from "./RegisterOperation";
import { useSelector } from "react-redux";
import { EditClient } from "./EditClient";
import { EditCar } from "./EditCar";
import { EditOperation } from "./EditOperation";
import { TargetCar } from "./TargetCar";
export const FormsWrapper = () => {
  const isClicked = useSelector((state) => state.target.isClicked);
  const car = useSelector((state) => state.cars.car);
  return (
    <div className="registrationForms">
      {isClicked === "addClient" && <RegisterClient />}
      {isClicked === "addCar" && <RegisterCar />}
      {isClicked === "addOperation" && <RegisterOperation />}
      {isClicked === "editClient" && <EditClient />}
      {isClicked === "editCar" && <EditCar />}
      {isClicked === "editOperation" && <EditOperation />}
      {car.length > 0 && <TargetCar car={car[0]} />}
    </div>
  );
};
