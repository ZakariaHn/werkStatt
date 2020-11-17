import React from "react";
import { useDispatch } from "react-redux";
import { loginAction, registerAction } from "../store/actions/authActions";

export const Landing = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    let registerData = {
      email: e.target[0].value,
      password: "asdfasdf",
    };

    dispatch(loginAction(registerData)); // dispatching type and payload inside this dispatched action
  };

  return (
    <div className="description">
      <form onSubmit={handleSubmit}>
        <input type="text" name="user" id="" />
        <input type="text" name="password" id="" />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};
