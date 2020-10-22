import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCarsAction } from "../../store/actions/carsActions";
import { SET_TARGET } from "../../store/actions/types";
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
      <div>
        <li
          key={car._id}
          onClick={() => {
            dispatch({ type: SET_TARGET, payload: car });
          }}
        >
          {car.carModel}
        </li>
        <div>
          <button>
            <FontAwesomeIcon icon={faEdit} />
          </button>
          <button>
            <FontAwesomeIcon icon={faTrash} />
          </button>
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
