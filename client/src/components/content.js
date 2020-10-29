import React from "react";
import { Route } from "react-router-dom";
import { Description } from "./Description";
import { SelectedItemWrapper } from "./selectedItems/SelectedItemWrapper";
import { ListsWrapper } from "./listsOfData/ListsWrapper";
import { FormsWrapper } from "./forms/FormsWrapper";

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
