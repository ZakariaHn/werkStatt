import React from "react";
import { useForm } from "react-hook-form";

export const RegisterCar = () => {
  const { handleSubmit, register, errors } = useForm();

  const onSubmitForm = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmitForm)}>
      <div className="input-field">
        <label htmlFor="fiOwnerrstname"></label>
        <input
          type="text"
          name="Owner"
          autoComplete="off"
          placeholder="Owner"
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
        <label htmlFor="carModel"></label>
        <input
          type="text"
          name="carModel"
          autoComplete="off"
          placeholder="Car Model"
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
        <label htmlFor="carModelType"></label>
        <input
          type="text"
          name="carModelType"
          autoComplete="off"
          placeholder="Car model type"
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
        <label htmlFor="chassyNr"></label>
        <input
          type="text"
          name="chassyNr"
          autoComplete="off"
          placeholder="Chassy Nr"
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
        <label htmlFor="engine"></label>
        <input
          type="text"
          name="engine"
          autoComplete="off"
          placeholder="engine"
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
        <label htmlFor="plateNr"></label>
        <input
          type="text"
          name="plateNr"
          autoComplete="off"
          placeholder="Plate Number"
          ref={register({
            required: true,
          })}
        />
        {errors.name && (
          <p className="form-error">At least 8 characters long!</p>
        )}
      </div>
      <div className="input-field">
        <label htmlFor="plateNr"></label>
        <input
          type="text"
          name="plateNr"
          autoComplete="off"
          placeholder="Email"
          ref={register({
            required: true,
          })}
        />
        {errors.name && (
          <p className="form-error">At least 8 characters long!</p>
        )}
      </div>
      <button type="submit">Register Car</button>
    </form>
  );
};
