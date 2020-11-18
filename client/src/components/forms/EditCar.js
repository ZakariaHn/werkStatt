import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { editCarAction } from "../../store/actions/carsActions";
import { CLICKED, SET_TARGET } from "../../store/actions/types";
import { motion } from "framer-motion";

export const EditCar = (props) => {
  const dispatch = useDispatch();

  const { handleSubmit, register, errors } = useForm();

  const car = useSelector((state) => state.target.item);

  const {
    _id,
    ownerId,
    carModel,
    carModelType,
    chassyNr,
    engine,
    plateNr,
  } = car;

  const { Transition } = props;
  const { pageStyle, pageVariants, pageTransition } = Transition;

  const onSubmitForm = (data) => {
    const Obj = Object.assign({ _id }, data);
    dispatch(editCarAction(Obj));
    dispatch({ type: CLICKED, payload: "" });
    dispatch({ type: SET_TARGET, payload: Obj });
  };

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
      <div className="header">
        <small>Update {car.carModel}</small>
        <small
          className="close"
          onClick={() => dispatch({ type: CLICKED, payload: "" })}
        >
          x
        </small>
      </div>
      <form onSubmit={handleSubmit(onSubmitForm)}>
        <div className="form-control">
          <label htmlFor="ownerId"></label>
          <input
            type="text"
            name="ownerId"
            autoComplete="off"
            placeholder="ownerId"
            defaultValue={ownerId}
            ref={register({
              required: true,
              minLength: 2,
            })}
          />
          {errors.name && (
            <p className="form-error">At least 2 characters long!</p>
          )}
        </div>

        <div className="form-control">
          <label htmlFor="carModel"></label>
          <input
            type="text"
            name="carModel"
            autoComplete="off"
            defaultValue={carModel}
            placeholder="Car Model"
            ref={register({
              required: true,
              minLength: 2,
            })}
          />
          {errors.name && (
            <p className="form-error">At least 2 characters long!</p>
          )}
        </div>

        <div className="form-control">
          <label htmlFor="carModelType"></label>
          <input
            type="text"
            name="carModelType"
            autoComplete="off"
            defaultValue={carModelType}
            placeholder="Car model type"
            ref={register({
              required: true,
              minLength: 2,
            })}
          />
          {errors.name && (
            <p className="form-error">At least 2 characters long!</p>
          )}
        </div>

        <div className="form-control">
          <label htmlFor="chassyNr"></label>
          <input
            type="text"
            name="chassyNr"
            defaultValue={chassyNr}
            autoComplete="off"
            placeholder="Chassy Nr"
            ref={register({
              required: true,
              minLength: 2,
            })}
          />
          {errors.name && (
            <p className="form-error">At least 2 characters long!</p>
          )}
        </div>

        <div className="form-control">
          <label htmlFor="engine"></label>
          <input
            type="text"
            name="engine"
            defaultValue={engine}
            autoComplete="off"
            placeholder="engine"
            ref={register({
              required: true,
              minLength: 2,
            })}
          />
          {errors.name && (
            <p className="form-error">At least 2 characters long!</p>
          )}
        </div>

        <div className="form-control">
          <label htmlFor="plateNr"></label>
          <input
            type="text"
            name="plateNr"
            defaultValue={plateNr}
            autoComplete="off"
            placeholder="Plate Number"
            ref={register({
              required: true,
              minLength: 2,
            })}
          />
          {errors.name && (
            <p className="form-error">At least 2 characters long!</p>
          )}
        </div>

        <div className="buttonWrapper">
          <button type="submit">Update Car</button>
        </div>
      </form>
    </motion.div>
  );
};
