import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addCarAction } from "../../store/actions/carsActions";
import { CLICKED } from "../../store/actions/types";

export const RegisterCar = (props) => {
  const { handleSubmit, register, errors } = useForm();

  const dispatch = useDispatch();

  const ownerId = useSelector((state) => state.target.item._id);

  const onSubmitForm = (data) => {
    dispatch(addCarAction(data));
    dispatch({ type: CLICKED, payload: "" });
  };

  const { icons } = props;
  return (
    <div className="container">
      <div className="header">
        <small>Register new car</small>
        <small
          className="close"
          onClick={() => dispatch({ type: CLICKED, payload: "" })}
        >
          x
        </small>
      </div>
      <form className="carsForm" onSubmit={handleSubmit(onSubmitForm)}>
        <div className="form-control success">
          <label htmlFor="ownerId">Owner Id</label>
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
          {icons()}
          <small>At least 2 characters long!</small>
        </div>

        <div className="form-control error">
          <label htmlFor="carModel">Car Model</label>
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
          {icons()}
          <small>At least 2 characters long!</small>
        </div>

        <div className="form-control">
          <label htmlFor="carModelType">Model Type</label>
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
          {icons()}
          <small>At least 2 characters long!</small>
        </div>

        <div className="form-control">
          <label htmlFor="chassyNr">Chassy number</label>
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
          {icons()}
          <small>At least 2 characters long!</small>
        </div>

        <div className="form-control">
          <label htmlFor="engine">Engine</label>
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
          {icons()}
          <small>At least 2 characters long!</small>
        </div>

        <div className="form-control">
          <label htmlFor="plateNr">Plate Number</label>
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
          {icons()}
          <small>At least 2 characters long!</small>
        </div>

        <div className="buttonWrapper">
          <button type="submit">SUBMIT</button>
        </div>
      </form>
    </div>
  );
};
