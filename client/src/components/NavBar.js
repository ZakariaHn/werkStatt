import React, { useState } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { faLaravel } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  TAB_CLICKED,
  FIND_CLIENTS,
  FIND_CARS,
  LOGOUT_SUCCESS,
} from "../store/actions/types";

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: "30%",
    borderRadius: "1rem",
  },
  selected: {
    color: "#d8a461",
  },
}));

export const NavBar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const [search, setSearch] = useState("client");
  const [selectedIndex, setSelectedIndex] = useState(null);

  /* Functions determines the selected Tab in the navbar*/

  const clientsList = () => {
    setSelectedIndex(0);
    dispatch({
      type: TAB_CLICKED,
      payload: "clientsList",
    });

    dispatch({
      type: FIND_CLIENTS,
      payload: "",
    });
  };

  const carsList = () => {
    setSelectedIndex(1);
    dispatch({
      type: TAB_CLICKED,
      payload: "carsList",
    });
    dispatch({
      type: FIND_CARS,
      payload: "",
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

  let myClients = useSelector((state) => state.clients.clientsArray);
  let myCars = useSelector((state) => state.cars.carsArray);

  const handleInputOnChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  if (input.length > 0) {
    if (search === "client") {
      let foundClients = myClients.filter(
        (client) => client.lastname.toLowerCase() === input
      );

      dispatch({
        type: FIND_CLIENTS,
        payload: foundClients,
      });
    } else {
      let foundCars = myCars.filter((car) =>
        car.carModel.toLowerCase().match(input)
      );

      dispatch({
        type: FIND_CARS,
        payload: foundCars,
      });
    }
  }

  const handleSelectOnChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const placeHolder = () => {
    return search === "client"
      ? "Enter Client Name"
      : search === "car"
      ? "Enter Car Model"
      : "Enter Operation Name";
  };

  // Set first letter of first and seconde name of registered user in the navBar
  // const userName = useSelector((state) => state.auth.user);

  // const userIcon = () => {
  //   let matches = userName.name.match(/\b(\w)/g).join("");
  //   let firstLetter = matches[0].toUpperCase();
  //   let secondeLetter = matches[1].toUpperCase();
  //   let icon = firstLetter + secondeLetter;
  //   return;
  // };

  return (
    <div className="navBar">
      <div className="all">
        <div className="logo">
          <FontAwesomeIcon icon={faLaravel} />
          <small>AutoMoBus</small>
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
            <option value="client">Client</option>
            <option value="car">Car</option>
            <option value="operation">Operation</option>
          </select>
        </div>
      </div>
      <div className="setting">
        <div>FA</div>
        <span
          onClick={() =>
            dispatch({
              type: LOGOUT_SUCCESS,
              payload: "",
            })
          }
        >
          Log out
        </span>
      </div>
    </div>
  );
};
