import React, { useState, useEffect } from "react";
import axios from "axios";
import { RegisterCar } from "./RegisterCar";

export const CarsList = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      const res = await axios.get("http://localhost:5000/api/cars");
      setCars(res.data);
    };
    fetchdata();
  }, []);

  return (
    <div>
      <RegisterCar />
      <ul>
        {cars.map((cars) => (
          <li key={cars._id}>{cars.carModel}</li>
        ))}
      </ul>
    </div>
  );
};
