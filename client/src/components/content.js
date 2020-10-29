import React from "react";
import { Route } from "react-router-dom";
import { Description } from "./Description";
import { SelectedItemWrapper } from "./selectedItem/SelectedItemWrapper";
import { ListsWrapper } from "./listsRenderers/ListsWrapper";
import { FormsWrapper } from "./registrationForms/FormsWrapper";

export const Content = () => {
  return (
    <div className="content">
      <Route exact path="/" component={Description} />
      <ListsWrapper />
      <SelectedItemWrapper />
      <FormsWrapper />
    </div>
  );
};
