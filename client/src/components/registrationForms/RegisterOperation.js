import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { addOperationAction } from "../../store/actions/operationsAction";

export const RegisterOperation = () => {
  const { handleSubmit, register, errors } = useForm();
  const dispatch = useDispatch();
  const history = useHistory();

  const onSubmitForm = (data) => {
    dispatch(addOperationAction(data));
    history.push("/operations");
  };

  return (
    <form onSubmit={handleSubmit(onSubmitForm)}>
      <div className="input-field">
        <label htmlFor="carId"></label>
        <input
          type="text"
          name="carId"
          autoComplete="off"
          placeholder="Car Id"
          ref={register({
            required: true,
            minLength: 4,
          })}
        />
        {errors.name && (
          <p className="form-error">At least 2 characters long!</p>
        )}
      </div>

      <div className="input-field">
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
        {errors.name && (
          <p className="form-error">At least 2 characters long!</p>
        )}
      </div>

      <div className="input-field">
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
        {errors.name && (
          <p className="form-error">At least 2 characters long!</p>
        )}
      </div>

      <div className="input-field">
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
        {errors.name && (
          <p className="form-error">At least 2 characters long!</p>
        )}
      </div>

      <div className="input-field">
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
        {errors.name && (
          <p className="form-error">At least 2 characters long!</p>
        )}
      </div>

      <button type="submit">Register Operation</button>
    </form>
  );
};
