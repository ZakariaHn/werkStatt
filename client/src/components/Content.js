import React from "react";
import { CarsList } from "./listsOfExistingData/CarsList";
import { ClientsList } from "./listsOfExistingData/ClientsList";
import { OperationsList } from "./listsOfExistingData/OperationsList";
import { Route, Switch } from "react-router-dom";
import { Description } from "./Description";
import { RegisterCar } from "./registrationForms/RegisterCar";
import { RegisterClient } from "./registrationForms/RegisterClient";
import { RegisterOperation } from "./registrationForms/RegisterOperation";
import { GetClientDetails } from "./getAllInformations/GetClientDetails";
import { GetCarDetails } from "./getAllInformations/GetCarDetails";
import { GetOperationDetails } from "./getAllInformations/GetOperationdetails";

export const Content = () => {
  return (
    <div className="content">
      <div className="lists">
        <Switch>
          <Route path="/clients" component={ClientsList} />
          <Route path="/cars" component={CarsList} />
          <Route path="/operations" component={OperationsList} />
          <Route path="/registerClient" component={RegisterClient} />
          <Route path="/registerCar" component={RegisterCar} />
          <Route path="/registerOperation" component={RegisterOperation} />
          <Route exact path="/" component={Description} />
        </Switch>
      </div>
      <div className="detailedInfos">
        <Switch>
          <Route path="/clientInfos" component={GetClientDetails} />
          <Route path="/carInfos" component={GetCarDetails} />
          <Route path="/operationInfos" component={GetOperationDetails} />
        </Switch>
      </div>
    </div>
  );
};
