import React from "react";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { CLICKED } from "../../store/actions/types";
import { loginAction } from "../../store/actions/authActions";

export const SignInForm = (props) => {
  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm();
  const { pageStyle, pageVariants, pageTransition } = props.Transition;

  const onSignIn = (data) => {
    console.log(data);
    let registerData = {
      email: data.email,
      password: "asdfasdf",
    };

    dispatch(loginAction(registerData));
  };

  const onSignUp = () => {
    dispatch({
      type: CLICKED,
      payload: "signUpClicked",
    });
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
      <strong>PLEASE SIGN IN</strong>
      <form onSubmit={handleSubmit(onSignIn)}>
        <div>
          <input type="text" name="email" placeholder="Email" ref={register} />
          {errors.email && <div>{errors.email.message}</div>}
        </div>
        <div>
          <input
            type="text"
            name="password"
            placeholder="Password"
            ref={register}
          />
          {errors.password && <div>{errors.password.message}</div>}
        </div>
        <input className="submit-button" type="submit" value="LOGIN" />
      </form>
      <div className="forgot-password">
        <p>Forgot password?</p>
        <p>
          Don't have an account? <span onClick={onSignUp}>Join Now</span>
        </p>
      </div>
    </motion.div>
  );
};
