import React from "react";
import { RegisterCar } from "./RegisterCar";
import { RegisterClient } from "./RegisterClient";
import { RegisterOperation } from "./RegisterOperation";
import { useSelector } from "react-redux";
import { EditClient } from "./EditClient";
import { EditCar } from "./EditCar";
import { EditOperation } from "./EditOperation";
import { TargetCar } from "./TargetCar";
import { TargetOperation } from "./TargetOperation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faExclamationCircle,
} from "@fortawesome/free-solid-svg-icons";

export const FormsWrapper = () => {
  const isClicked = useSelector((state) => state.target.isClicked);
  const Transition = {
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
  };

  const icons = () => {
    return (
      <div>
        <FontAwesomeIcon className="fas fa-check-circle" icon={faCheckCircle} />
        <FontAwesomeIcon
          className="fas fa-exclamation-circle"
          icon={faExclamationCircle}
        />
      </div>
    );
  };

  return (
    <div className="registrationForms">
      {isClicked === "" && <div className="logo">AUTOMOBUS</div>}

      {isClicked === "editCar" && <EditCar Transition={Transition} />}

      {isClicked === "addCar" && (
        <RegisterCar icons={icons} Transition={Transition} />
      )}

      {isClicked === "editClient" && <EditClient Transition={Transition} />}

      {isClicked === "addClient" && (
        <RegisterClient icons={icons} Transition={Transition} />
      )}

      {isClicked === "editOperation" && (
        <EditOperation Transition={Transition} />
      )}

      {isClicked === "addOperation" && (
        <RegisterOperation icons={icons} Transition={Transition} />
      )}

      {isClicked === "targetCar" && <TargetCar Transition={Transition} />}

      {isClicked === "targetOperation" && (
        <TargetOperation Transition={Transition} />
      )}
    </div>
  );
};
