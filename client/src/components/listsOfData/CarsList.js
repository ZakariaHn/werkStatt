import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCarsAction } from "../../store/actions/carsActions";
import {
  CLICKED,
  DELETE_CAR,
  EDIT_CAR,
  SET_TARGET,
} from "../../store/actions/types";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { v4 as id } from "uuid";

export const CarsList = () => {
  const dispatch = useDispatch();

  const allCars = useSelector((state) => state.cars.carsArray);

  useEffect(() => {
    dispatch(fetchCarsAction());
  }, [dispatch]);

  const handleEditCar = (car) => {
    dispatch({ type: SET_TARGET, payload: car });
    dispatch({ type: CLICKED, payload: "editCar" });
  };

  const renderLists = () => {
    return allCars.map((car) => (
      <div className="li-buttons-wrapper" key={id()}>
        <li
          onClick={() => {
            dispatch({ type: SET_TARGET, payload: car });
          }}
        >
          {car.carModel}
        </li>
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
