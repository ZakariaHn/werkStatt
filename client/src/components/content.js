import React from "react";
import { CarsList } from "./listsOfExistingData/CarsList";
import { ClientsList } from "./listsOfExistingData/ClientsList";
import { OperationsList } from "./listsOfExistingData/OperationsList";
import { Route, Switch, useLocation } from "react-router-dom";
import { Description } from "./description";
export const Content = () => {
  const location = useLocation();
  return (
    <div className="content">
      <Switch location={location} key={location.pathname}>
        <Route exact path="/" component={Description} />
        <Route path="/clients" component={ClientsList} />
        <Route path="/cars" component={CarsList}></Route>
        <Route path="/operations" component={OperationsList}></Route>
      </Switch>
    </div>
  );
};
