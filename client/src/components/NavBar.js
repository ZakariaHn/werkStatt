import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { TAB_CLICKED } from "../store/actions/types";
import { makeStyles } from "@material-ui/core/styles";
import { faLaravel } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog, faUserCircle } from "@fortawesome/free-solid-svg-icons";

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: "30%",
    borderRadius: "1rem",
  },
  selected: {
    color: "#e74c3c",
  },
}));

export const NavBar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [search, setSearch] = useState("");
  /* Functions determines the selected Tab in the navbar*/

  const clientsList = () => {
    setSelectedIndex(0);
    dispatch({
      type: TAB_CLICKED,
      payload: "clientsList",
    });
  };

  const carsList = () => {
    setSelectedIndex(1);
    dispatch({
      type: TAB_CLICKED,
      payload: "carsList",
    });
  };

  const operationsList = () => {
    setSelectedIndex(2);
    dispatch({
      type: TAB_CLICKED,
      payload: "operationsList",
    });
  };

  // Handling search bar _______________________________________

  let client = useSelector((state) => state.clients.clientsArray);
  let car = useSelector((state) => state.cars.carsArray);

  const handleInputOnChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
    console.log(client, car);
  };

  if (input.length > 0) {
    client = client.filter((i) => i.lastname.match(input));
    car = car.filter((i) => i.carModel.match(input));

    console.log(input);
  }

  const handleSelectOnChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  // if (search === "client") {
  //   dispatch({
  //     type: TAB_CLICKED,
  //     payload: "clientsList",
  //   });
  // } else if (search === "car") {
  //   dispatch({
  //     type: TAB_CLICKED,
  //     payload: "carsList",
  //   });
  // }

  const placeHolder = () => {
    if (search === "client") {
      return "Enter Client Name";
    } else if (search === "car") {
      return "Enter plate Number";
    } else if (search === "operation") {
      return "Enter Operation Name";
    } else {
      return "What are you looking for?";
    }
  };

  return (
    <div className="navBar">
      <div className="all">
        <div className="logo">
          <FontAwesomeIcon icon={faLaravel} />
          <small>AUTOMOBUS</small>
        </div>
        <List className="taps">
          <ListItem
            button
            onClick={clientsList}
            className={classes.root}
            selected={selectedIndex === 0}
            classes={{ selected: classes.selected }}
          >
            Clients
          </ListItem>
          <ListItem
            button
            onClick={carsList}
            className={classes.root}
            selected={selectedIndex === 1}
            classes={{ selected: classes.selected }}
          >
            Cars
          </ListItem>
          <ListItem
            button
            onClick={operationsList}
            className={classes.root}
            selected={selectedIndex === 2}
            classes={{ selected: classes.selected }}
          >
            Operations
          </ListItem>
        </List>

        <div className="searchBarHolder">
          <input
            type="text"
            value={input}
            onChange={handleInputOnChange}
            placeholder={placeHolder()}
          />

          <select onChange={handleSelectOnChange}>
            <option>I'm looking for...</option>
            <option value="client">Client</option>
            <option value="car">Car</option>
            <option value="operation">Operation</option>
          </select>
        </div>
      </div>
      <div className="setting">
        <FontAwesomeIcon icon={faUserCircle} />
        <FontAwesomeIcon icon={faCog} />
      </div>
    </div>
  );
};
