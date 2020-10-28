import React from "react";
import { Route } from "react-router-dom";
import { Description } from "../Description";
import { InfosOfSelectedItem } from "./InfosOfSelectedItem";
import { ListsHolder } from "../listsRenderers/ListsHolder";
import { FormsHolder } from "../registrationForms/FormsHolder";

export const ComponentsHolder = () => {
  return (
    <div className="content">
      <Route exact path="/" component={Description} />
      <ListsHolder />
      <InfosOfSelectedItem />
      <FormsHolder />
    </div>
  );
};
