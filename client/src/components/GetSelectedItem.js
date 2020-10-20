import React from "react";

export const GetSelectedItem = (props) => {
  const handleTargetObject = (target) => {
    let listItems = [];
    for (const [key, value] of Object.entries(target)) {
      listItems.push(
        <li key={key}>
          {key}: {value}
        </li>
      );
    }
    return listItems;
  };

  return <ul className="targetsInfos">{handleTargetObject(props.target)}</ul>;
};
