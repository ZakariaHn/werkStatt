import React from "react";
import { Route } from "react-router-dom";
import { CarsList } from "./CarsListRenderer";
import { ClientsList } from "./ClientsListRenderer";
import { OperationsList } from "./OperationsListRenderer";

export const ListsHolder = () => {
  return (
    <div className="lists">
      <Route path="/cars" component={CarsList} />
      <Route path="/clients" component={ClientsList} />
      <Route path="/operations" component={OperationsList} />
    </div>
  );
};
