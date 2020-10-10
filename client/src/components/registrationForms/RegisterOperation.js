import React from "react";
import { useForm } from "react-hook-form";

export const RegisterOperation = () => {
  const { handleSubmit, register, errors } = useForm();

  const onSubmitForm = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmitForm)}>
      <div className="input-field">
        <label htmlFor="operation"></label>
        <input
          type="text"
          name="operation"
          autoComplete="off"
          placeholder="Operation"
          ref={register({
            required: true,
            minLength: 8,
          })}
        />
        {errors.name && (
          <p className="form-error">At least 8 characters long!</p>
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
            minLength: 8,
          })}
        />
        {errors.name && (
          <p className="form-error">At least 8 characters long!</p>
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
            minLength: 8,
          })}
        />
        {errors.name && (
          <p className="form-error">At least 8 characters long!</p>
        )}
      </div>
      <button type="submit">Register Operation</button>
    </form>
  );
};
