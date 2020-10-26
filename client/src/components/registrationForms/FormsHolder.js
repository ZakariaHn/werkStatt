import React from "react";
import { Route } from "react-router-dom";
import { RegisterCar } from "./RegisterCar";
import { RegisterClient } from "./RegisterClient";
import { RegisterOperation } from "./RegisterOperation";

export const FormsHolder = () => {
  return (
    <div className="registrationForms">
      <Route path="/registerCar" component={RegisterCar} />
      <Route path="/registerClient" component={RegisterClient} />
      <Route path="/registerOperation" component={RegisterOperation} />
    </div>
  );
};
