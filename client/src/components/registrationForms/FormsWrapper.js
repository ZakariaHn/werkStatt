import React from "react";
import { RegisterCar } from "./RegisterCar";
import { RegisterClient } from "./RegisterClient";
import { RegisterOperation } from "./RegisterOperation";
import { useSelector } from "react-redux";

export const FormsWrapper = () => {
  const ifClicked = useSelector((state) => state.clients.ifClicked);
  return (
    <div className="registrationForms">
      {ifClicked === "addClient" && <RegisterClient />}
      {ifClicked === "addCar" && <RegisterCar />}
      {ifClicked === "addOperation" && <RegisterOperation />}
    </div>
  );
};
