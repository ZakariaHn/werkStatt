import React, { useState } from "react";
import { CLICKED } from "../../store/actions/types";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { loginAction } from "../../store/actions/authActions";

export const SignUpForm = (props) => {
  const { register, handleSubmit, errors } = useForm();
  const dispatch = useDispatch();

  const [Transition] = useState({
    pageVariants: {
      initial: {
        opacity: 0,
        x: "-100vw",
        scale: 0.8,
      },
      in: {
        opacity: 1,
        x: 0,
        scale: 1,
      },
      out: {
        opacity: 0,
        x: "100vw",
        scale: 1.2,
      },
    },
    pageTransition: {
      type: "tween",
      ease: "anticipate",
      duration: 1,
    },
    pageStyle: {
      position: "absolute",
    },
  });
  const { pageStyle, pageVariants, pageTransition } = Transition;

  const onSignIn = (data) => {
    console.log(data);
    let registerData = {
      email: data.email,
      password: "asdfasdf",
    };

    dispatch(loginAction(registerData)); // dispatching type and payload inside this dispatched action
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
      <form onSubmit={handleSubmit(onSignIn)}>
        <div>
          <input type="text" name="name" placeholder="Name" ref={register} />
          {errors.email && <div>{errors.email.message}</div>}
        </div>
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
        <div>
          <input
            type="text"
            name="secondePassword"
            placeholder="Confirm Password"
            ref={register}
          />
          {errors.password && <div>{errors.password.message}</div>}
        </div>
        <input className="submit-button" type="submit" value="SIGN UP" />
      </form>
      <div
        className="back"
        onClick={() => dispatch({ type: CLICKED, payload: "" })}
      >
        {"<"}
      </div>
    </motion.div>
  );
};
