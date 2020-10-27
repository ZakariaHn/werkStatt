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
      <div className="logo">
        <FontAwesomeIcon icon={faLaravel} />
      </div>
      <div className="all">
        <div className="searchBarHolder">
          <input placeholder="Search for a client, car or an operaiton"></input>
          <button>
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
        <div className="tapsAndSetting">
          <div className="taps">
            <div>
              <Link to="/clients">Clients</Link>
            </div>
            <div>
              <Link to="/cars">Cars</Link>
            </div>
            <div>
              <Link to="/operations">Operations</Link>
            </div>
          </div>
          <div className="setting">
            <FontAwesomeIcon icon={faUserCircle} />
            <FontAwesomeIcon icon={faCog} />
          </div>
        </div>
      </div>
    </div>
  );
};
