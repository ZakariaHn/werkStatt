import React from "react";
import { CarsList } from "./listsOfExistingData/CarsList";
import { ClientsList } from "./listsOfExistingData/ClientsList";
import { OperationsList } from "./listsOfExistingData/OperationsList";
import { Route, Switch } from "react-router-dom";
import { Description } from "./description";
export const Content = () => {
  return (
    <div className="content">
      <Switch>
        <Route exact path="/" component={Description} />
        <Route path="/clients" component={ClientsList} />
        <Route path="/cars" component={CarsList}></Route>
        <Route path="/operations" component={OperationsList}></Route>
      </Switch>
    </div>
  );
};
