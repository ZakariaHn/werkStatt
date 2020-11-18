import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../store/actions/authActions";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faLaravel } from "@fortawesome/free-brands-svg-icons";
import { Footer } from "./footer";
import { CLICKED } from "../store/actions/types";
import { motion } from "framer-motion";

export const Landing = () => {
  const [signUpTransition] = useState({
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
  const { pageStyle, pageVariants, pageTransition } = signUpTransition;
  const dispatch = useDispatch();

  const { register, handleSubmit, errors } = useForm();

  const onSignIn = (data) => {
    console.log(data);
    let registerData = {
      email: data.email,
      password: "asdfasdf",
    };

    dispatch(loginAction(registerData)); // dispatching type and payload inside this dispatched action
  };

  const landingPageNavBar = () => (
    <div className="navBar">
      <div className="logo">
        <FontAwesomeIcon icon={faLaravel} />
        <small>AUTOMOBUS</small>
      </div>
      <div className="setting">
        <li>ABOUT</li>
        <li>PRICING</li>
        <li onClick={onSignIUp}>SIGN UP</li>
        <FontAwesomeIcon icon={faBars} />
      </div>
    </div>
  );

  const loginHeader = () => (
    <div className="login-header">
      <div>
        <FontAwesomeIcon icon={faLaravel} />
        <strong>AUTOMOBUS</strong>
      </div>
    </div>
  );

  const loginForm = () => (
    <div className="login-form">
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
          Don't have an account? <span onClick={onSignIUp}>Join Now</span>
        </p>
      </div>
    </div>
  );

  const onSignIUp = () => {
    dispatch({
      type: CLICKED,
      payload: "signUpClicked",
    });
  };

  const signUpForm = () => (
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

  const isClicked = useSelector((state) => state.target.isClicked);

  return (
    <div className="landing-page">
      {landingPageNavBar()}
      <div className="landing-content">
        {loginHeader()}
        {isClicked === "signUpClicked" ? signUpForm() : loginForm()}
      </div>
      <Footer />
    </div>
  );
};
