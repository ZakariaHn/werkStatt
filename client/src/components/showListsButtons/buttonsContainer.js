import React from "react";
import ShowCarsButton from "./showCarsButton";
import ShowClientsButton from "./ShowClientsButton";
import ShowOperationsButton from "./showOperationsButton";
import { Link } from "react-router-dom";

export const ButtonsContainer = () => {
  return (
    <div className="buttonsContainer">
      <Link to="clients">
        <ShowClientsButton />
      </Link>
      <Link to="/cars">
        <ShowCarsButton />
      </Link>
      <Link to="/operations">
        <ShowOperationsButton />
      </Link>
    </div>
  );
};
