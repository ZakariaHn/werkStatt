import React from "react";
import { Route } from "react-router-dom";
import { RegisterCar } from "../registrationForms/RegisterCar";
import { RegisterClient } from "../registrationForms/RegisterClient";
import { RegisterOperation } from "../registrationForms/RegisterOperation";

export const RegistrationsForms = () => {
  return (
    <div className="registrationForms">
      <Route path="/registerCar" component={RegisterCar} />
      <Route path="/registerClient" component={RegisterClient} />
      <Route path="/registerOperation" component={RegisterOperation} />
    </div>
  );
};
