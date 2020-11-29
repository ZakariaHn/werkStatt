import React, { Fragment } from "react";
import { v4 as id } from "uuid";
import { useDispatch } from "react-redux";
import {
  CLICKED,
  TARGET_OPERATION,
  TARGET_CAR,
} from "../../store/actions/types";
import { fetchCarOperationsAction } from "../../store/actions/operationsAction";
import { motion } from "framer-motion";

// Render data from  mongoDB in lists. Clients/ cars/ operations

export const GetSelectedItem = ({ target, Transition }) => {
  const { cars, ops, firstname, lastname, carModel, name } = target;
  const dispatch = useDispatch();
  const { pageStyle, pageVariants, pageTransition } = Transition;

  let listItems = [];
  const handleTargetObject = (target) => {
    for (const [key, value] of Object.entries(target)) {
      if (
        key !== "cars" &&
        key !== "ops" &&
        key !== "firstname" &&
        key !== "lastname" &&
        key !== "carModel" &&
        key !== "_id"
      ) {
        listItems.push(
          <li key={id()}>
            {key[0].toUpperCase() +
              key
                .slice(1)
                .split(/(?=[A-Z])/)
                .join(" ")}
            :<span> {value}</span>
          </li>
        );
      }
    }

    return listItems;
  };

  const handleHeader = () => {
    return (
      <div className="selected-item-header">
        <small>
          {cars &&
            `${firstname[0].toUpperCase() + firstname.slice(1)} ${
              lastname[0].toUpperCase() + lastname.slice(1)
            }`}
          {ops && `${carModel[0].toUpperCase() + carModel.slice(1)}`}
          {name && `${name[0].toUpperCase() + name.slice(1)}`}{" "}
        </small>
        {/* <small
          className="close"
          onClick={() => dispatch({ type: TARGET_CAR, payload: {} })}
        >
          x
        </small> */}
      </div>
    );
  };

  // Set cars owned by the selected client in a drop down list and show its data

  const handleCarChange = (e) => {
    const targetCar = cars.filter((car) => car.carModel === e.target.value);
    dispatch({ type: TARGET_CAR, payload: targetCar });
    dispatch({ type: CLICKED, payload: "targetCar" });
    let carId = targetCar[0]._id;
    dispatch(fetchCarOperationsAction(carId));
  };

  const handleCars = (cars) => (
    <select value="1" onChange={handleCarChange}>
      <option value="1" disabled>
        Cars
      </option>
      {cars.map((car) => (
        <option key={id()} value={car.carModel}>
          {car.carModel}
        </option>
      ))}
    </select>
  );

  // Set the related operations to the selected car in a drop down list and show its data

  const handleOperationChange = (e) => {
    const targetOperation = ops.filter((op) => op.name === e.target.value);
    dispatch({ type: TARGET_OPERATION, payload: targetOperation });
    dispatch({ type: CLICKED, payload: "targetOperation" });
  };

  const handleOperations = (ops) => (
    <select value="1" onChange={handleOperationChange}>
      <option value="1" disabled>
        Operations
      </option>
      {ops.map((op) => (
        <option key={id()} value={op.name}>
          {op.name}
        </option>
      ))}
    </select>
  );

  return (
    <motion.div
      style={pageStyle}
      initial="out"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="container"
    >
      <Fragment>
        {handleHeader()}

        <ul>{handleTargetObject(target)}</ul>
        {cars && handleCars(cars)}
        {ops && handleOperations(ops)}
      </Fragment>
    </motion.div>
  );
};
