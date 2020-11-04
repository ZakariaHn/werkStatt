import React, { Fragment } from "react";
import { SelectedItemWrapper } from "./selectedItems/SelectedItemWrapper";
import { ListsWrapper } from "./listsOfData/ListsWrapper";
import { FormsWrapper } from "./forms/FormsWrapper";

export const Content = () => {
  return (
    <Fragment>
      <section className="content">
        <ListsWrapper />
        <SelectedItemWrapper />
        <FormsWrapper />
      </section>
    </Fragment>
  );
};
