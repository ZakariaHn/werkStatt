import React from "react";
import { useSelector } from "react-redux";
import { GetSelectedItem } from "./GetSelectedItem";
import { Link } from "react-router-dom";

export const Details = () => {
  const target = useSelector((state) => state.target.item);
  console.log(target);
  return (
    <div className="details">
      {Object.keys(target).length > 0 && <GetSelectedItem target={target} />}
      <div className="navigateToForm">
        {target.hasOwnProperty("parts") && (
          <Link to="/registerOperation">Add Operation</Link>
        )}
        {target.hasOwnProperty("address") && (
          <Link to="/registerClient">Add Client</Link>
        )}
        {target.hasOwnProperty("ops") && <Link to="/registerCar">Add Car</Link>}
      </div>
    </div>
  );
};
