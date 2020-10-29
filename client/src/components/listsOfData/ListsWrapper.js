import React from "react";
import { Route } from "react-router-dom";
import { CarsList } from "./CarsList";
import { ClientsList } from "./ClientsList";
import { OperationsList } from "./OperationsList";

export const ListsWrapper = () => {
  return (
    <div className="lists">
      <Route path="/cars" component={CarsList} />
      <Route path="/clients" component={ClientsList} />
      <Route path="/operations" component={OperationsList} />
    </div>
  );
};
