import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const CarsList = (props) => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      const res = await axios.get("http://localhost:5000/api/cars");
      setCars(res.data);
    };
    fetchdata();
  }, []);

  const renderLists = () => {
    return cars.map((car) => (
      <Link
        to="carInfos"
        key={car._id}
        onClick={() => {
          props.getSelectedCar(car);
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
