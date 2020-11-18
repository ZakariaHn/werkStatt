import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { loginAction } from "../store/actions/authActions";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faLaravel } from "@fortawesome/free-brands-svg-icons";
import { Footer } from "./footer";

export const Landing = () => {
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
        <li>SIGN UP</li>
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
          Don't have an account? <span>Join Now</span>
        </p>
      </div>
    </div>
  );

  return (
    <div className="landing-page">
      {landingPageNavBar()}
      {loginHeader()}
      {loginForm()}
      <Footer />
    </div>
  );
};
