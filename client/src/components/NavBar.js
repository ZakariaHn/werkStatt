import React from "react";
import {
  faSearch,
  faCog,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import { faLaravel } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TAB_CLICKED } from "../store/actions/types";
import { useDispatch } from "react-redux";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

export const NavBar = () => {
  const dispatch = useDispatch();

  const clientsList = () => {
    dispatch({
      type: TAB_CLICKED,
      payload: "clientsList",
    });
  };

  const carsList = () => {
    dispatch({
      type: TAB_CLICKED,
      payload: "carsList",
    });
  };

  const operationsList = () => {
    dispatch({
      type: TAB_CLICKED,
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
        <List className="taps">
          <ListItem onClick={clientsList}>Clients</ListItem>
          <ListItem onClick={carsList}>Cars</ListItem>
          <ListItem onClick={operationsList}>Operations</ListItem>
        </List>

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
