import React, { Fragment } from "react";
import { CarsList } from "./listsOfExistingData/CarsList";
import { ClientsList } from "./listsOfExistingData/ClientsList";
import { OperationsList } from "./listsOfExistingData/OperationsList";
import { Route, Switch } from "react-router-dom";
import { Description } from "./Description";
import { RegisterCar } from "./registrationForms/RegisterCar";
import { RegisterClient } from "./registrationForms/RegisterClient";
import { RegisterOperation } from "./registrationForms/RegisterOperation";
import { useSelector } from "react-redux";
import { GetSelectedItem } from "./GetSelectedItem";

export const Content = () => {
  const target = useSelector((state) => state.target.item);
  return (
    <div className="content">
      <Switch>
        <Route exact path="/" component={Description} />
        <Fragment>
          <div className="lists">
            <Route path="/clients" component={ClientsList} />
            <Route path="/cars" component={CarsList} />
            <Route path="/operations" component={OperationsList} />
            <Route path="/registerClient" component={RegisterClient} />
            <Route path="/registerCar" component={RegisterCar} />
            <Route path="/registerOperation" component={RegisterOperation} />
          </div>
        </Fragment>
      </Switch>
      <div className="selectedItem">
        {Object.keys(target).length > 0 && <GetSelectedItem target={target} />}
      </div>
    </div>
  );
};
