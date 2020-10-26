import React from "react";
import { GetSelectedItem } from "./GetSelectedItem";
import { useSelector } from "react-redux";
import { RrgstrationFormsRenderer } from "./RrgstrationFormsRenderer";

export const InfosOfSelectedItem = () => {
  const target = useSelector((state) => state.target.item);

  return (
    <div className="details">
      {Object.keys(target).length > 0 && <GetSelectedItem target={target} />}
      <RrgstrationFormsRenderer />
    </div>
  );
};
