import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useSelector } from "react-redux";
import { faLaravel } from "@fortawesome/free-brands-svg-icons";
import { Footer } from "../footer";
import { NavBar } from "./NavBar";
import { SignUpForm } from "./SignUpForm";
import { SignInForm } from "./SignInForm";
import { About } from "./About";

export const Landing = () => {
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
          <SignUpForm />
        ) : isClicked === "AboutTabClicked" ? (
          <About />
        ) : (
          <SignInForm />
        )}
      </div>
      <Footer />
    </div>
  );
};
