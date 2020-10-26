import React from "react";
import { Route } from "react-router-dom";
import { CarsList } from "../listsRenderers/CarsListRenderer";
import { ClientsList } from "../listsRenderers/ClientsListRenderer";
import { OperationsList } from "../listsRenderers/OperationsListRenderer";

export const RenderedListsHolder = () => {
  return (
    <div className="lists">
      <Route path="/cars" component={CarsList} />
      <Route path="/clients" component={ClientsList} />
      <Route path="/operations" component={OperationsList} />
    </div>
  );
};
