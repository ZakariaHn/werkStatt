import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchCarsAction } from "../../store/actions/carsActions";
import { SET_CAR } from "../../store/actions/types";

export const CarsList = (props) => {
  const dispatch = useDispatch();

  const AllCars = useSelector((state) => state.cars.carsArray);

  useEffect(() => {
    dispatch(fetchCarsAction());
  }, [dispatch]);

  const renderLists = () => {
    return AllCars.map((car) => (
      <Link
        to="carInfos"
        key={car._id}
        onClick={() => {
          dispatch({ type: SET_CAR, payload: car });
        }}
      >
        <li>{car.carModel}</li>
      </Link>
    ));
  };
  return (
    <div className="carsList">
      <ul>{renderLists()}</ul>
    </div>
  );
};
