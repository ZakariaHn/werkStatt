import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { editOperationAction } from "../../store/actions/operationsAction";
import { CLICKED, SET_TARGET } from "../../store/actions/types";

export const EditOperation = () => {
  const dispatch = useDispatch();

  const { handleSubmit, register, errors } = useForm();

  const operation = useSelector((state) => state.target.item);

  const { _id, carId, name, description, parts, cost } = operation;

  const onSubmitForm = (data) => {
    const Obj = Object.assign({ _id }, data);
    dispatch(editOperationAction(Obj));
    dispatch({ type: CLICKED, payload: "" });
    dispatch({ type: SET_TARGET, payload: Obj });
  };

  return (
    <form onSubmit={handleSubmit(onSubmitForm)}>
      <div className="input-field">
        <label htmlFor="carId"></label>
        <input
          type="text"
          name="carId"
          defaultValue={carId}
          autoComplete="off"
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
          defaultValue={name}
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
          defaultValue={description}
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
          defaultValue={parts}
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
          defaultValue={cost}
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
      <div className="buttonWrapper">
        <button type="submit">Update Operation</button>
      </div>
    </form>
  );
};
