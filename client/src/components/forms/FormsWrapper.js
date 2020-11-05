import React from "react";
import { RegisterCar } from "./RegisterCar";
import { RegisterClient } from "./RegisterClient";
import { RegisterOperation } from "./RegisterOperation";
import { useSelector } from "react-redux";
import { EditClient } from "./EditClient";
import { EditCar } from "./EditCar";
import { EditOperation } from "./EditOperation";
import { TargetCar } from "./TargetCar";
import { TargetOperation } from "./TargetOperation";

export const FormsWrapper = () => {
  const isClicked = useSelector((state) => state.target.isClicked);
  return (
    <div className="registrationForms">
      {isClicked === "editCar" && <EditCar />}
      {isClicked === "addCar" && <RegisterCar />}
      {isClicked === "targetCar" && <TargetCar />}
      {isClicked === "editClient" && <EditClient />}
      {isClicked === "addClient" && <RegisterClient />}
      {isClicked === "editOperation" && <EditOperation />}
      {isClicked === "addOperation" && <RegisterOperation />}
      {isClicked === "targetOperation" && <TargetOperation />}
    </div>
  );
};
