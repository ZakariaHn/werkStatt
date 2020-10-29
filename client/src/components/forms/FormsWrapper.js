import React from "react";
import { RegisterCar } from "./RegisterCar";
import { RegisterClient } from "./RegisterClient";
import { RegisterOperation } from "./RegisterOperation";
import { useSelector } from "react-redux";

export const FormsWrapper = () => {
  const isClicked = useSelector((state) => state.target.isClicked);

  return (
    <div className="registrationForms">
      {isClicked === "addClient" && <RegisterClient />}
      {isClicked === "addCar" && <RegisterCar />}
      {isClicked === "addOperation" && <RegisterOperation />}
    </div>
  );
};
