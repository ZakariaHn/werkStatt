import React from "react";
import ReactModal from "react-modal";
import { useModal } from "react-modal-hook";
import { RegisterCar } from "../registrationForms/RegisterCar";
import { RegisterOperation } from "../registrationForms/RegisterOperation";
import { useSelector } from "react-redux";
import { styles } from "./styles";

export const RrgstrationFormsRenderer = () => {
  const [showOperationModal, hideOperationModal] = useModal(() => (
    <ReactModal isOpen ariaHideApp={false} style={styles}>
      <button onClick={hideOperationModal}>X</button>
      <RegisterOperation />
    </ReactModal>
  ));

  const [showCarModal, hideCarModal] = useModal(() => (
    <ReactModal isOpen ariaHideApp={false} style={styles}>
      <button onClick={hideCarModal}>X</button>
      <RegisterCar />
    </ReactModal>
  ));

  const target = useSelector((state) => state.target.item);

  return (
    <div>
      {target.hasOwnProperty("engine") && (
        <button onClick={showOperationModal}>Add Operation</button>
      )}
      {target.hasOwnProperty("address") && (
        <button onClick={showCarModal}>Add Car</button>
      )}
    </div>
  );
};
