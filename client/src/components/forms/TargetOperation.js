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
          {key
            .split(/(?=[A-Z])/)
            .join(" ")[0]
            .toUpperCase() + key.slice(1)}
          : {value}
        </li>
      );
    }
    return listItems;
  };

  return (
    <Fragment>
      <ul className="targetOperationList">
        {handleTargetOperation(operation[0])}
      </ul>
    </Fragment>
  );
};
