import React from "react";
import { useForm } from "react-hook-form";

export const RegisterClient = () => {
  const { handleSubmit, register, errors } = useForm();

  const onSubmitForm = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmitForm)}>
      <div className="input-field">
        <label htmlFor="firstname"></label>
        <input
          type="text"
          name="firstname"
          autoComplete="off"
          placeholder="First Name"
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
        <label htmlFor="lastname"></label>
        <input
          type="text"
          name="lastname"
          autoComplete="off"
          placeholder="Last Name"
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
        <label htmlFor="address"></label>
        <input
          type="text"
          name="address"
          autoComplete="off"
          placeholder="Address"
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
        <label htmlFor="birthdate"></label>
        <input
          type="date"
          name="birthdate"
          autoComplete="off"
          placeholder="Date of birth"
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
        <label htmlFor="email"></label>
        <input
          type="email"
          name="email"
          autoComplete="off"
          placeholder="Email"
          ref={register({
            required: true,
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid Email Address!",
            },
          })}
        />
        {errors.email && (
          <p className="form-error">Must enter a valid Email!</p>
        )}
      </div>

      {/* {error && <p className="form-error" style={{ textAlign: "center" }}>{error}</p>}
            {errorMsg && <p className="form-error" style={{ textAlign: "center" }}>{errorMsg}</p>} */}
      <button type="submit">Register Client</button>
    </form>
  );
};