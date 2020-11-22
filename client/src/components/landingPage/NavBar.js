import React from "react";
import { useDispatch } from "react-redux";
import { CLICKED } from "../../store/actions/types";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faLaravel } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const NavBar = () => {
  const dispatch = useDispatch();

  const onSignUp = () => {
    dispatch({
      type: CLICKED,
      payload: "signUpClicked",
    });
  };

  return (
    <div className="landing-pag-nav-bar">
      <div className="logo">
        <FontAwesomeIcon icon={faLaravel} />
        <small>AUTOMOBUS</small>
      </div>
      <div className="setting">
        <li
          onClick={() =>
            dispatch({
              type: CLICKED,
              payload: "AboutTabClicked",
            })
          }
        >
          ABOUT
        </li>
        <li>PRICING</li>
        <li onClick={onSignUp}>SIGN UP</li>
        <FontAwesomeIcon icon={faBars} />
      </div>
    </div>
  );
};
