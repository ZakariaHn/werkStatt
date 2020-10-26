import React from "react";
import { Route } from "react-router-dom";
import { Description } from "../Description";
import { InfosOfSelectedItem } from "./InfosOfSelectedItem";
import { RenderedListsHolder } from "./RenderedListsHolder";
import { RegistrationsForms } from "./RegistrationsForms";

export const ComponentsHolder = () => {
  return (
    <div className="content">
      <Route exact path="/" component={Description} />
      <RenderedListsHolder />
      <InfosOfSelectedItem />
      <RegistrationsForms />
    </div>
  );
};
