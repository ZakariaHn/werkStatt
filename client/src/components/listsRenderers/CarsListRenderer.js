import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCarsAction } from "../../store/actions/carsActions";
import { SET_TARGET, EDIT_CAR, DELETE_CAR } from "../../store/actions/types";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export const CarsList = () => {
  const dispatch = useDispatch();

  const allCars = useSelector((state) => state.cars.carsArray);

  useEffect(() => {
    dispatch(fetchCarsAction());
  }, [dispatch]);

  const renderLists = () => {
    return allCars.map((car) => (
      <div className="li-buttons-wrapper" key={car._id}>
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
            onClick={(_) => dispatch({ type: EDIT_CAR, payload: car })}
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
