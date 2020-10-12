import React from "react";
import { Link } from "react-router-dom";

export const AddingDataButtons = () => {
  return (
    <div className="addingDataButton">
      {/* <Link to="/">Description</Link> */}
      <Link to="/registerClient">+</Link>
      <Link to="/registerCar">+</Link>
      <Link to="/registerOperation">+</Link>
    </div>
  );
};
