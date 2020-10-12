import React, { useState } from "react";
import { CarsList } from "./listsOfExistingData/CarsList";
import { ClientsList } from "./listsOfExistingData/ClientsList";
import { OperationsList } from "./listsOfExistingData/OperationsList";
import { Route, Switch } from "react-router-dom";
import { Description } from "./description";
import { RegisterCar } from "./registrationForms/RegisterCar";
import { RegisterClient } from "./registrationForms/RegisterClient";
import { RegisterOperation } from "./registrationForms/RegisterOperation";
import { ClientsInformations } from "./ClientsInformations";

export const Content = () => {
  const [infos, setInfos] = useState("");

  const getSelectedClient = (selectedClient) => {
    setInfos(selectedClient);
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
          <Route path="/cars" component={CarsList} />
          <Route path="/operations" component={OperationsList} />
          <Route path="/registerClient" component={RegisterClient} />
          <Route path="/registerCar" component={RegisterCar} />
          <Route path="/registerOperation" component={RegisterOperation} />
        </Switch>
      </div>
      <div className="infos">
        <Route
          path="/clientInfos"
          render={() => <ClientsInformations infos={infos} />}
        ></Route>
      </div>
    </div>
  );
};
