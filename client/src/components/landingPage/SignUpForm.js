import React from "react";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { CLICKED } from "../../store/actions/types";
import { registerAction } from "../../store/actions/authActions";

export const SignUpForm = (props) => {
  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm();
  const { pageStyle, pageVariants, pageTransition } = props.Transition;

  const onSignUp = (data) => {
    console.log(data);
    dispatch(registerAction(data));
  };

  return (
    <motion.div
      style={pageStyle}
      initial="out"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="login-form"
    >
      <strong>PLEASE SIGN UP</strong>
      <form onSubmit={handleSubmit(onSignUp)}>
        <div>
          <input type="text" name="name" placeholder="Name" ref={register} />
          {errors.lastname && <div>{errors.lastname.message}</div>}
        </div>
        <div>
          <input type="text" name="email" placeholder="Email" ref={register} />
          {errors.email && <div>{errors.email.message}</div>}
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="Password"
            ref={register}
          />
          {errors.password && <div>{errors.password.message}</div>}
        </div>
        <input className="submit-button" type="submit" value="SIGN UP" />
      </form>
      <div className="forgot-password">
        <p></p>
        <p>
          Already have an account?{" "}
          <span onClick={() => dispatch({ type: CLICKED, payload: "" })}>
            Login
          </span>
        </p>
      </div>
    </motion.div>
  );
};
