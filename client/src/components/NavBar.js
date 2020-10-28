import React from "react";
import { Link } from "react-router-dom";
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
      <FontAwesomeIcon className="logo" icon={faLaravel} />
      <div className="all">
        <div className="searchBarWrapper">
          <input placeholder="Search for a client, car or an operaiton"></input>
          <button>
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
        <div className="tapsAndSetting">
          <ul className="taps">
            <li>
              <Link to="/clients">Clients</Link>
            </li>
            <li>
              <Link to="/cars">Cars</Link>
            </li>
            <li>
              <Link to="/operations">Operations</Link>
            </li>
          </ul>
          <div className="setting">
            <FontAwesomeIcon icon={faUserCircle} />
            <FontAwesomeIcon icon={faCog} />
          </div>
        </div>
      </div>
    </div>
  );
};
