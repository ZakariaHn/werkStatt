import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCarsAction } from "../../store/actions/carsActions";
import { CLICKED, DELETE_CAR, SET_TARGET } from "../../store/actions/types";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { v4 as id } from "uuid";

import ListItem from "@material-ui/core/ListItem";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "30%",
    borderRadius: "1rem",
  },
  selected: {
    color: "#b8632b",
  },
}));

export const CarsList = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const classes = useStyles();

  const dispatch = useDispatch();

  const allCars = useSelector((state) => state.cars.carsArray);

  useEffect(() => {
    dispatch(fetchCarsAction());
  }, [dispatch]);

  const handleEditCar = (car) => {
    dispatch({ type: SET_TARGET, payload: car });
    dispatch({ type: CLICKED, payload: "editCar" });
  };

  const handleOnClickListItem = (car, index) => {
    setSelectedIndex(index);
    dispatch({ type: SET_TARGET, payload: car });
    dispatch({ type: CLICKED, payload: "" });
  };

  const renderLists = () => {
    return allCars.map((car, index) => (
      <div className="li-buttons-wrapper" key={id()}>
        <ListItem
          button
          className={classes.root}
          selected={selectedIndex === index}
          classes={{ selected: classes.selected }}
          onClick={() => handleOnClickListItem(car, index)}
        >
          {car.carModel}
        </ListItem>
        <div>
          <FontAwesomeIcon
            className="icon"
            icon={faEdit}
            onClick={() => handleEditCar(car)}
          />
          <FontAwesomeIcon
            className="icon"
            icon={faTrash}
            onClick={() => dispatch({ type: DELETE_CAR, payload: car._id })}
          />
        </div>
      </div>
    ));
  };

  return (
    <div className="carsList">
      <ul>{renderLists()}</ul>
    </div>
  );
};
