import React, { useState } from "react";
import { CarsList } from "./listsOfExistingData/CarsList";
import { ClientsList } from "./listsOfExistingData/ClientsList";
import { OperationsList } from "./listsOfExistingData/OperationsList";
import { Route, Switch } from "react-router-dom";
import { Description } from "./description";
import { RegisterCar } from "./registrationForms/RegisterCar";
import { RegisterClient } from "./registrationForms/RegisterClient";
import { RegisterOperation } from "./registrationForms/RegisterOperation";
import { GetClientDetails } from "./getAllInformations/getClientDetails";
import { GetCarDetails } from "./getAllInformations/getCarDetails";
import { GetOperationDetails } from "./getAllInformations/getOperationdetails";

export const Content = () => {
  const [clientInfos, setClientInfos] = useState("");
  const [carInfos, setCarInfos] = useState("");
  const [operationInfos, setOperationInfos] = useState("");

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
          <Route exact path="/" component={Description} />
        </Switch>
      </div>
      <div className="infos">
        <Route
          path="/clientInfos"
          render={() => <GetClientDetails clientInfos={clientInfos} />}
        ></Route>
        <Route
          path="/carInfos"
          render={() => <GetCarDetails carInfos={carInfos} />}
        ></Route>
        <Route
          path="/operationInfos"
          render={() => <GetOperationDetails operationInfos={operationInfos} />}
        ></Route>
      </div>
    </div>
  );
};
