import React from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { addClientAction } from "../../store/actions/clientsActions";
import { CLICKED } from "../../store/actions/types";
import { motion } from "framer-motion";

export const RegisterClient = (props) => {
  const dispatch = useDispatch();
  const { handleSubmit, register, errors } = useForm();

  const onSubmitForm = (data) => {
    dispatch(addClientAction(data));
    dispatch({ type: CLICKED, payload: "" });
  };

  const { icons, Transition } = props;
  const { pageStyle, pageVariants, pageTransition } = Transition;

  return (
    <motion.div
      style={pageStyle}
      initial="out"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="container"
    >
      <div className="header">
        <small>Register new client</small>
        <small
          className="close"
          onClick={() => dispatch({ type: CLICKED, payload: "" })}
        >
          x
        </small>
      </div>
      <form onSubmit={handleSubmit(onSubmitForm)}>
        <div className="form-control">
          <label htmlFor="firstname">First Name</label>
          <input
            type="text"
            name="firstname"
            autoComplete="off"
            placeholder="First Name"
            ref={register({
              required: true,
              minLength: 2,
            })}
          />
          {icons()}
          <small>At least 2 characters long!</small>
        </div>

        <div className="form-control">
          <label htmlFor="lastname">Last Name</label>
          <input
            id="lastname"
            type="text"
            name="lastname"
            autoComplete="off"
            placeholder="Last Name"
            ref={register({
              required: true,
              minLength: 2,
            })}
          />
          {icons()}
          <small>At least 2 characters long!</small>
        </div>

        <div className="form-control">
          <label htmlFor="address">Address</label>
          <input
            id="address"
            type="text"
            name="address"
            autoComplete="off"
            placeholder="Address"
            ref={register({
              required: true,
              minLength: 8,
            })}
          />
          {icons()}
          <small>At least 2 characters long!</small>
        </div>

        <div className="form-control">
          <label htmlFor="birthdate">Birthday</label>
          <input
            id="birthday"
            type="date"
            name="birthdate"
            autoComplete="off"
            placeholder="Date of birth"
            ref={register({
              minLength: 8,
            })}
          />
          {icons()}
          <small>At least 2 characters long!</small>
        </div>

        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input
            id="email"
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
          {icons()}
          <small>At least 2 characters long!</small>
        </div>

        {/* {error && <p className="form-error" style={{ textAlign: "center" }}>{error}</p>}
            {errorMsg && <p className="form-error" style={{ textAlign: "center" }}>{errorMsg}</p>} */}

        <button className="btn" type="submit">
          SUBMIT
        </button>
      </form>
    </motion.div>
  );
};
