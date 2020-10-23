import React from "react";
import { useSelector } from "react-redux";
import { GetSelectedItem } from "./GetSelectedItem";
import ReactModal from "react-modal";
import { useModal } from "react-modal-hook";
import { RegisterClient } from "./registrationForms/RegisterClient";
import { RegisterOperation } from "./registrationForms/RegisterOperation";

export const Details = () => {
  const styles = {
    overlay: {
      width: "31rem",
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
    <div className="details">
      {Object.keys(target).length > 0 && <GetSelectedItem target={target} />}

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
