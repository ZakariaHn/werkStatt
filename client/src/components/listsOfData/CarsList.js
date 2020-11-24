import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCarsAction } from "../../store/actions/carsActions";
import { CLICKED, DELETE_CAR, SET_TARGET } from "../../store/actions/types";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { v4 as id } from "uuid";

import ListItem from "@material-ui/core/ListItem";

export const CarsList = (props) => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const classes = props.styles();

  const dispatch = useDispatch();

  const myCars = useSelector((state) => state.cars.carsArray);
  const foundCar = useSelector((state) => state.cars.foundCars);

  useEffect(() => {
    dispatch(fetchCarsAction());
  }, [dispatch]);

  const handleEditCar = (car) => {
    dispatch({ type: SET_TARGET, payload: car });
    dispatch({ type: CLICKED, payload: "editCar" });
  };

  const handleDeleteCar = (car) => {
    if (window.confirm(`Are you sure you want to delete ${car.carModel} ?`)) {
      return dispatch({ type: DELETE_CAR, payload: car._id });
    }
  };

  const handleOnClickListItem = (car, index) => {
    setSelectedIndex(index);
    dispatch({ type: SET_TARGET, payload: car });
    dispatch({ type: CLICKED, payload: "" });
  };

  const renderLists = () => {
    let render;

    foundCar.length > 0 ? (render = foundCar) : (render = myCars);
    return render.map((car, index) => (
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
            onClick={() => handleDeleteCar(car)}
          />
        </div>
      </div>
    ));
  };

  return (
    <div className="carsList">
      <div className="selected-item-header">
        <small>
          {myCars.length > 0 ? "All registered cars" : "No cars registered"}
        </small>
      </div>
      <ul>{renderLists()}</ul>
    </div>
  );
};
