import React, { Fragment } from "react";
import { v4 as id } from "uuid";
import { useSelector } from "react-redux";

export const TargetOperation = () => {
  const operation = useSelector((state) => state.operations.operation);

  const handleTargetOperation = (operation) => {
    let listItems = [];
    for (const [key, value] of Object.entries(operation)) {
      listItems.push(
        <li key={id()}>
          {key.split(/(?=[A-Z])/).join(" ")}: {value}
        </li>
      );
    }
    return listItems;
  };

  return (
    <Fragment>
      <ul className="targetsInfos">{handleTargetOperation(operation[0])}</ul>
    </Fragment>
  );
};
