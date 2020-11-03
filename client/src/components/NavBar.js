import React from "react";
import {
  faSearch,
  faCog,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import { faLaravel } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CLICKED } from "../store/actions/types";
import { useDispatch } from "react-redux";

export const Navbar = () => {
  const dispatch = useDispatch();

  const clientsList = () => {
    dispatch({
      type: CLICKED,
      payload: "clientsList",
    });
  };

  const carsList = () => {
    dispatch({
      type: CLICKED,
      payload: "carsList",
    });
  };

  const operationsList = () => {
    dispatch({
      type: CLICKED,
      payload: "operationsList",
    });
  };

  return (
    <div className="navBar">
      <div className="all">
        <div className="logo">
          <FontAwesomeIcon icon={faLaravel} />
          <small>AUTOMOBUS</small>
        </div>
        <ul className="taps">
          <li onClick={clientsList}>Clients</li>
          <li onClick={carsList}>Cars</li>
          <li onClick={operationsList}>Operations</li>
        </ul>

        <div className="searchBarHolder">
          <input placeholder="Search for a client, car or an operaiton" />
          <button>
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
      </div>
      <div className="setting">
        <FontAwesomeIcon icon={faUserCircle} />
        <FontAwesomeIcon icon={faCog} />
      </div>
    </div>
  );
};
