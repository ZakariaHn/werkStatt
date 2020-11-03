import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { editCarAction } from "../../store/actions/carsActions";

export const EditCar = () => {
  const dispatch = useDispatch();

  const history = useHistory();

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

  const onSubmitForm = (data) => {
    const Obj = Object.assign({ _id }, data);
    dispatch(editCarAction(Obj));

    history.push("/cars");
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

      <div className="input-field">
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

      <div className="input-field">
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

      <div className="input-field">
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

      <div className="input-field">
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
        <button type="submit">Register Car</button>
      </div>
    </form>
  );
};
