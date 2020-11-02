import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { addOperationAction } from "../../store/actions/operationsAction";

export const RegisterOperation = () => {
  const dispatch = useDispatch();

  const history = useHistory();

  const { handleSubmit, register, errors } = useForm();

  const operation = useSelector((state) => state.target.item);

  const { _id, carId, name, description, parts, cost } = operation;

  const onSubmitForm = (data) => {
    const Obj = Object.assign({ _id }, data);
    dispatch(addOperationAction(Obj));
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
          defaultValue={carId}
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
          defaultValue={name}
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
          defaultValue={description}
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
          defaultValue={parts}
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
          defaultValue={cost}
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
        <button type="submit">Register Operation</button>
      </div>
    </form>
  );
};
