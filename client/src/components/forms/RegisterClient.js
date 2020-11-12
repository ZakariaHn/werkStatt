import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { addClientAction } from "../../store/actions/clientsActions";
import { CLICKED } from "../../store/actions/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faExclamationCircle,
} from "@fortawesome/free-solid-svg-icons";

export const RegisterClient = () => {
  const dispatch = useDispatch();
  const { handleSubmit, register, errors } = useForm();

  const onSubmitForm = (data) => {
    // checkInputs();
    dispatch(addClientAction(data));
    dispatch({ type: CLICKED, payload: "" });
  };
  // const mainform = useRef(null);
  // const lastname = useRef(null);
  // const firstname = useRef(null);
  // const email = useRef(null);
  // const address = useRef(null);
  // const birthday = useRef(null);
  // console.log(lastname);

  // React.useEffect(() => {
  //   mainform.current.focus();
  // }, []);

  // function checkInputs() {
  //   // trim to remove the whitespaces
  //   const lastnamevalue = lastname.value.trim();
  //   const firstnamevalue = firstname.value.trim();
  //   const emailValue = email.value.trim();
  //   const addressValue = address.value.trim();
  //   const birthdayValue = birthday.value.trim();

  //   let errorMessage = "Field cannot be blank";
  //   if (lastnamevalue === "") {
  //     setErrorFor(lastname, errorMessage);
  //   } else {
  //     setSuccessFor(lastname);
  //   }

  //   if (firstnamevalue === "") {
  //     setErrorFor(firstname, errorMessage);
  //   } else {
  //     setSuccessFor(firstname);
  //   }

  //   if (emailValue === "") {
  //     setErrorFor(email);
  //   } else if (!isEmail(emailValue)) {
  //     setErrorFor(email, errorMessage);
  //   } else {
  //     setSuccessFor(email);
  //   }

  //   if (addressValue === "") {
  //     setErrorFor(address, errorMessage);
  //   } else {
  //     setSuccessFor(address);
  //   }

  //   if (birthdayValue === "") {
  //     setErrorFor(birthday, errorMessage);
  //   } else {
  //     setSuccessFor(birthday);
  //   }
  // }

  // function setErrorFor(input, message) {
  //   const formControl = input.parentElement;
  //   const small = formControl.querySelector("small");
  //   formControl.className = "form-control error";
  //   small.innerText = message;
  // }

  // function setSuccessFor(input) {
  //   const formControl = input.parentElement;
  //   formControl.className = "form-control success";
  // }

  // function isEmail(email) {
  //   return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
  //     email
  //   );
  // }

  // // SOCIAL PANEL JS
  // const floating_btn = document.querySelector(".floating-btn");
  // const close_btn = document.querySelector(".close-btn");
  // const social_panel_container = document.querySelector(
  //   ".social-panel-container"
  // );

  // floating_btn.addEventListener("click", () => {
  //   social_panel_container.classList.toggle("visible");
  // });

  // close_btn.addEventListener("click", () => {
  //   social_panel_container.classList.remove("visible");
  // });
  return (
    <div className="container">
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
        <div className="form-control success">
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
          <FontAwesomeIcon
            className="fas fa-check-circle"
            icon={faCheckCircle}
          />
          <FontAwesomeIcon
            className="fas fa-exclamation-circle"
            icon={faExclamationCircle}
          />
          <small>At least 2 characters long!</small>
        </div>

        <div className="form-control error">
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
          <FontAwesomeIcon
            className="fas fa-check-circle"
            icon={faCheckCircle}
          />
          <FontAwesomeIcon
            className="fas fa-exclamation-circle"
            icon={faExclamationCircle}
          />
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
          <FontAwesomeIcon
            className="fas fa-check-circle"
            icon={faCheckCircle}
          />
          <FontAwesomeIcon
            className="fas fa-exclamation-circle"
            icon={faExclamationCircle}
          />
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
          <FontAwesomeIcon
            className="fas fa-check-circle"
            icon={faCheckCircle}
          />
          <FontAwesomeIcon
            className="fas fa-exclamation-circle"
            icon={faExclamationCircle}
          />
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
          <FontAwesomeIcon
            className="fas fa-check-circle"
            icon={faCheckCircle}
          />
          <FontAwesomeIcon
            className="fas fa-exclamation-circle"
            icon={faExclamationCircle}
          />
          <small>At least 2 characters long!</small>
        </div>

        {/* {error && <p className="form-error" style={{ textAlign: "center" }}>{error}</p>}
            {errorMsg && <p className="form-error" style={{ textAlign: "center" }}>{errorMsg}</p>} */}

        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
};
