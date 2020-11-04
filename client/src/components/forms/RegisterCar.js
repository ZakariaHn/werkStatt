import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addCarAction } from "../../store/actions/carsActions";
import { CLICKED } from "../../store/actions/types";

export const RegisterCar = () => {
  const { handleSubmit, register, errors } = useForm();

  const dispatch = useDispatch();

  const ownerId = useSelector((state) => state.target.item._id);

  const onSubmitForm = (data) => {
    dispatch(addCarAction(data));
    dispatch({ type: CLICKED, payload: "" });
  };

  return (
    <form onSubmit={handleSubmit(onSubmitForm)}>
      <div className="input-field">
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

      <div className="input-field">
        <label htmlFor="carModel"></label>
        <input
          type="text"
          name="carModel"
          autoComplete="off"
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

      <div className="input-field">
        <label htmlFor="carModelType"></label>
        <input
          type="text"
          name="carModelType"
          autoComplete="off"
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

      <div className="input-field">
        <label htmlFor="chassyNr"></label>
        <input
          type="text"
          name="chassyNr"
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

      <div className="input-field">
        <label htmlFor="engine"></label>
        <input
          type="text"
          name="engine"
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

      <div className="input-field">
        <label htmlFor="plateNr"></label>
        <input
          type="text"
          name="plateNr"
          autoComplete="off"
          placeholder="Plate Number"
          ref={register({
            required: true,
            // pattern: {
            //   value: /^[A-ZÄÖÜ]{1,3}/i,
            //   message: "invalid plate number",
            // },
          })}
        />
        {errors.name && (
          <p className="form-error">At least 2 characters long!</p>
        )}
      </div>

      <div className="buttonWrapper">
        <button type="submit">Register Car</button>
      </div>
    </form>
  );
};
