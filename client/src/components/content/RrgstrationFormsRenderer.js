import React from "react";
import ReactModal from "react-modal";
import { useModal } from "react-modal-hook";
import { RegisterClient } from "../registrationForms/RegisterClient";
import { RegisterOperation } from "../registrationForms/RegisterOperation";
import { useSelector } from "react-redux";

export const RrgstrationFormsRenderer = () => {
  const styles = {
    overlay: {
      width: "31%",
      height: "70%",
      position: "absolute",
      left: "34.6%",
      top: "10",
      backgroundColor: "rgba(0, 0, 0, 0.828)",
    },
    content: {
      width: "22rem",
      position: "absolute",
      left: "11%",
    },
  };

  const [showOperationModal, hideOperationModal] = useModal(() => (
    <ReactModal isOpen style={styles}>
      <button onClick={hideOperationModal}>X</button>
      <RegisterOperation />
    </ReactModal>
  ));

  const [showClientModal, hideClientModal] = useModal(() => (
    <ReactModal isOpen style={styles}>
      <button onClick={hideClientModal}>X</button>
      <RegisterClient />
    </ReactModal>
  ));

  const [showCarModal, hideCarModal] = useModal(() => (
    <ReactModal isOpen style={styles}>
      <button onClick={hideCarModal}>X</button>
      <RegisterClient />
    </ReactModal>
  ));

  const target = useSelector((state) => state.target.item);

  return (
    <div>
      {target.hasOwnProperty("parts") && (
        <button onClick={showOperationModal}>Add Operation</button>
      )}
      {target.hasOwnProperty("address") && (
        <button onClick={showClientModal}>Add Client</button>
      )}
      {target.hasOwnProperty("ops") && (
        <button onClick={showCarModal}>Add Car</button>
      )}
    </div>
  );
};
