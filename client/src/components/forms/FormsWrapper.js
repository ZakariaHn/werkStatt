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
      {isClicked === "editCar" && <EditCar />}
      {isClicked === "addCar" && <RegisterCar icons={icons} />}
      {isClicked === "targetCar" && <TargetCar />}
      {isClicked === "editClient" && <EditClient />}
      {isClicked === "addClient" && <RegisterClient icons={icons} />}
      {isClicked === "editOperation" && <EditOperation />}
      {isClicked === "addOperation" && <RegisterOperation icons={icons} />}
      {isClicked === "targetOperation" && <TargetOperation />}
    </div>
  );
};
