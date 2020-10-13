import React, { useState } from "react";
import { CarsList } from "./listsOfExistingData/CarsList";
import { ClientsList } from "./listsOfExistingData/ClientsList";
import { OperationsList } from "./listsOfExistingData/OperationsList";
import { Route, Switch } from "react-router-dom";
import { Description } from "./description";
import { RegisterCar } from "./registrationForms/RegisterCar";
import { RegisterClient } from "./registrationForms/RegisterClient";
import { RegisterOperation } from "./registrationForms/RegisterOperation";
import { ClientsInformations } from "./getAllInformations/ClientsInformations";
import { CarsInformations } from "./getAllInformations/CarsInformations";
import { OperationsInformations } from "./getAllInformations/OperationsInforamations";

export const Content = () => {
  const [ClientInfos, setClientInfos] = useState("");
  const [CarInfos, setCarInfos] = useState("");
  const [OperationInfos, setOperationInfos] = useState("");

  const getSelectedClient = (selectedClient) => {
    setClientInfos(selectedClient);
  };
  const getSelectedCar = (selectedCar) => {
    setCarInfos(selectedCar);
  };
  const getSelectedOperation = (selectedOperation) => {
    setOperationInfos(selectedOperation);
  };

  return (
    <div className="content">
      <div className="lists">
        <Switch>
          <Route exact path="/" component={Description} />
          <Route
            path="/clients"
            render={() => <ClientsList getSelectedClient={getSelectedClient} />}
          />
          <Route
            path="/cars"
            render={() => <CarsList getSelectedCar={getSelectedCar} />}
          />
          <Route
            path="/operations"
            render={() => (
              <OperationsList getSelectedOperation={getSelectedOperation} />
            )}
          />
          <Route path="/registerClient" component={RegisterClient} />
          <Route path="/registerCar" component={RegisterCar} />
          <Route path="/registerOperation" component={RegisterOperation} />
        </Switch>
      </div>
      <div className="infos">
        <Route
          path="/clientInfos"
          render={() => <ClientsInformations clientInfos={ClientInfos} />}
        ></Route>
        <Route
          path="/carInfos"
          render={() => <CarsInformations carInfos={CarInfos} />}
        ></Route>
        <Route
          path="/operationInfos"
          render={() => (
            <OperationsInformations operationInfos={OperationInfos} />
          )}
        ></Route>
      </div>
    </div>
  );
};
