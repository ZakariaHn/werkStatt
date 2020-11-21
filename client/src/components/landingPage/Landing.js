import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { faLaravel } from "@fortawesome/free-brands-svg-icons";
import { Footer } from "../footer";
import { NavBar } from "./NavBar";
import { SignUpForm } from "./SignUpForm";
import { SignInForm } from "./SignInForm";
import { About } from "./About";

export const Landing = () => {
  const [Transition] = useState({
    pageVariants: {
      initial: {
        opacity: 0,
        x: "-10vw",
        scale: 0.2,
      },
      in: {
        opacity: 1,
        scale: 1,
      },
      out: {
        opacity: 0,
        scale: 2,
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
  const loginHeader = () => (
    <div className="login-header">
      <div>
        <FontAwesomeIcon icon={faLaravel} />
        <strong>AUTOMOBUS</strong>
      </div>
    </div>
  );

  const isClicked = useSelector((state) => state.target.isClicked);

  return (
    <div className="landing-page">
      <NavBar />
      <div className="landing-content">
        {loginHeader()}

        {isClicked === "signUpClicked" ? (
          <SignUpForm Transition={Transition} />
        ) : isClicked === "AboutTabClicked" ? (
          <About />
        ) : (
          <SignInForm Transition={Transition} />
        )}
      </div>
      <Footer />
    </div>
  );
};
