import React from "react";

export const GetSelectedItem = ({ target }) => {
  const handleTargetObject = (target) => {
    let listItems = [];
    for (const [key, value] of Object.entries(target)) {
      listItems.push(
        <li key={key}>
          {key.split(/(?=[A-Z])/).join(" ")}: {value}
        </li> // splitted on Uppercase letters
      );
    }
    return listItems;
  };
  return <ul className="targetsInfos">{handleTargetObject(target)}</ul>;
};
