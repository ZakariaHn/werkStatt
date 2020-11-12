import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addOperationAction } from "../../store/actions/operationsAction";
import { CLICKED } from "../../store/actions/types";

export const RegisterOperation = (props) => {
  const { handleSubmit, register, errors } = useForm();
  const dispatch = useDispatch();

  const carId = useSelector((state) => state.target.item._id);

  const onSubmitForm = (data) => {
    dispatch(addOperationAction(data));
    dispatch({ type: CLICKED, payload: "" });
  };
  const { icons } = props;
  return (
    <div className="container">
      <div className="header">
        <small>Register new operation</small>
        <small
          className="close"
          onClick={() => dispatch({ type: CLICKED, payload: "" })}
        >
          x
        </small>
      </div>
      <form onSubmit={handleSubmit(onSubmitForm)}>
        <div className="form-control success">
          <label htmlFor="carId"></label>
          <input
            type="text"
            name="carId"
            autoComplete="off"
            placeholder="Car Id"
            defaultValue={carId}
            ref={register({
              required: true,
              minLength: 4,
            })}
          />
          {icons()}
          <small>At least 2 characters long!</small>
        </div>

        <div className="form-control error">
          <label htmlFor="name"></label>
          <input
            type="text"
            name="name"
            autoComplete="off"
            placeholder="Operation Name"
            ref={register({
              required: true,
              minLength: 2,
            })}
          />
          {icons()}
          <small>At least 2 characters long!</small>
        </div>

        <div className="form-control">
          <label htmlFor="description"></label>
          <input
            type="text"
            name="description"
            autoComplete="off"
            placeholder="Description"
            ref={register({
              required: true,
              minLength: 2,
            })}
          />
          {icons()}
          <small>At least 2 characters long!</small>
        </div>

        <div className="form-control">
          <label htmlFor="Parts"></label>
          <input
            type="text"
            name="Parts"
            autoComplete="off"
            placeholder="Parts"
            ref={register({
              required: true,
              minLength: 2,
            })}
          />
          {icons()}
          <small>At least 2 characters long!</small>
        </div>

        <div className="form-control">
          <label htmlFor="costs"></label>
          <input
            type="text"
            name="costs"
            autoComplete="off"
            placeholder="Costs"
            ref={register({
              required: true,
              minLength: 2,
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
