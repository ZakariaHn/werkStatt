import React from "react";
import { Link } from "react-router-dom";

export const ToggleLists = () => {
  return (
    <div className="buttonsContainer">
      <Link to="clients">Clients</Link>
      <Link to="/cars">Cars</Link>
      <Link to="/operations">Operations</Link>
    </div>
  );
};
