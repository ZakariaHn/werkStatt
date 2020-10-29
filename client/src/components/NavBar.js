import React from "react";
import { NavLink } from "react-router-dom";
import {
  faSearch,
  faCog,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import { faLaravel } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Navbar = () => {
  return (
    <div className="navBar">
      <div className="logo">
        <FontAwesomeIcon icon={faLaravel} />
      </div>
      <div className="all">
        <ul className="taps">
          <NavLink
            className="nav-link"
            activeClassName="nav-link-active"
            to="/clients"
          >
            <p>Clients</p>
          </NavLink>

          <NavLink
            className="nav-link"
            activeClassName="nav-link-active"
            to="/cars"
          >
            <p> Cars</p>
          </NavLink>

          <NavLink
            className="nav-link"
            activeClassName="nav-link-active"
            to="/operations"
          >
            <p>Operations</p>
          </NavLink>
        </ul>
        <div className="searchBarHolder">
          <input placeholder="Search for a client, car or an operaiton"></input>
          <button>
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
        <div className="setting">
          <FontAwesomeIcon icon={faUserCircle} />
          <FontAwesomeIcon icon={faCog} />
        </div>
      </div>
    </div>
  );
};
