import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCarsAction } from "../../store/actions/carsActions";
import { SET_TARGET } from "../../store/actions/types";

export const CarsList = () => {
  const dispatch = useDispatch();

  const allCars = useSelector((state) => state.cars.carsArray);

  useEffect(() => {
    dispatch(fetchCarsAction());
  }, [dispatch]);

  const renderLists = () => {
    return allCars.map((car) => (
      <li
        key={car._id}
        onClick={() => {
          dispatch({ type: SET_TARGET, payload: car });
        }}
      >
        {car.carModel}
      </li>
    ));
  };
  return (
    <div className="carsList">
      <ul>{renderLists()}</ul>
    </div>
  );
};
