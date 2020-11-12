import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { editClientAction } from "../../store/actions/clientsActions";
import { CLICKED, SET_TARGET } from "../../store/actions/types";

export const EditClient = () => {
  const dispatch = useDispatch();

  const { handleSubmit, register, errors } = useForm();

  const client = useSelector((state) => state.target.item);

  const { firstname, lastname, address, birthdate, email, _id } = client;

  const onSubmitForm = (data) => {
    const Obj = Object.assign({ _id }, data);
    dispatch(editClientAction(Obj));
    dispatch({ type: CLICKED, payload: "" });
    dispatch({ type: SET_TARGET, payload: Obj });
  };

  return (
    <div className="container">
      <div className="header">
        <small>
          Update {client.firstname} {client.lastname}
        </small>
        <small
          className="close"
          onClick={() => dispatch({ type: CLICKED, payload: "" })}
        >
          x
        </small>
      </div>
      <form onSubmit={handleSubmit(onSubmitForm)}>
        <div className="form-control">
          <label htmlFor="firstname"></label>
          <input
            type="text"
            name="firstname"
            defaultValue={firstname}
            autoComplete="off"
            placeholder="First Name"
            ref={register({
              required: true,
              minLength: 2,
            })}
          />
          {errors.name && (
            <p className="form-error">At least 2 characters long!</p>
          )}
        </div>

        <div className="form-control">
          <label htmlFor="lastname"></label>
          <input
            type="text"
            name="lastname"
            defaultValue={lastname}
            autoComplete="off"
            placeholder="Last Name"
            ref={register({
              required: true,
              minLength: 2,
            })}
          />
          {errors.name && (
            <p className="form-error">At least 2 characters long!</p>
          )}
        </div>

        <div className="form-control">
          <label htmlFor="address"></label>
          <input
            type="text"
            name="address"
            defaultValue={address}
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

        <div className="form-control">
          <label htmlFor="birthdate"></label>
          <input
            type="date"
            name="birthdate"
            defaultValue={birthdate}
            autoComplete="off"
            placeholder="Date of birth"
            ref={register({
              minLength: 8,
            })}
          />
          {errors.name && (
            <p className="form-error">At least 8 characters long!</p>
          )}
        </div>

        <div className="form-control">
          <label htmlFor="email"></label>
          <input
            type="email"
            name="email"
            defaultValue={email}
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
        <div className="buttonWrapper">
          <button type="submit">Update Client</button>
        </div>
      </form>
    </div>
  );
};
