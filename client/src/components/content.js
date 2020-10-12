import React from "react";
import { CarsList } from "./listsOfExistingData/CarsList";
import { ClientsList } from "./listsOfExistingData/ClientsList";
import { OperationsList } from "./listsOfExistingData/OperationsList";
import { Route, Switch } from "react-router-dom";
import { Description } from "./description";
import { RegisterCar } from "./registrationForms/RegisterCar";
import { RegisterClient } from "./registrationForms/RegisterClient";
import { RegisterOperation } from "./registrationForms/RegisterOperation";
export const Content = () => {
  return (
    <div className="content">
      <Switch>
        <Route exact path="/" component={Description} />
        <Route path="/clients" component={ClientsList} />
        <Route path="/cars" component={CarsList}></Route>
        <Route path="/operations" component={OperationsList}></Route>
        <Route path="/registerClient" component={RegisterClient} />
        <Route path="/registerCar" component={RegisterCar}></Route>
        <Route path="/registerOperation" component={RegisterOperation}></Route>
      </Switch>
    </div>
  );
};
