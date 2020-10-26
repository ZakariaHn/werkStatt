import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactModal from "react-modal";
import { fetchClientsAction } from "../../store/actions/clientsActions";
import {
  DELETE_CLIENT,
  EDIT_CLIENT,
  SET_TARGET,
} from "../../store/actions/types";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { RegisterClient } from "../registrationForms/RegisterClient";
import { useModal } from "react-modal-hook";
import { styles } from "../content/styles";

export const ClientsList = () => {
  const dispatch = useDispatch();

  const myClients = useSelector((state) => state.clients.clientsArray);

  useEffect(() => {
    dispatch(fetchClientsAction());
  }, [dispatch]);

  const [showClientModal, hideClientModal] = useModal(() => (
    <ReactModal isOpen style={styles}>
      <button onClick={hideClientModal}>X</button>
      <RegisterClient />
    </ReactModal>
  ));

  const renderLists = () => {
    return myClients.map((client) => (
      <div className="li-buttons-wrapper" key={client._id}>
        <li onClick={(_) => dispatch({ type: SET_TARGET, payload: client })}>
          {client.lastname}
        </li>
        <div>
          <FontAwesomeIcon
            className="icon"
            icon={faEdit}
            onClick={(_) => dispatch({ type: EDIT_CLIENT, payload: client })}
          />
          <FontAwesomeIcon
            className="icon"
            icon={faTrash}
            onClick={(_) =>
              dispatch({ type: DELETE_CLIENT, payload: client._id })
            }
          />
        </div>
      </div>
    ));
  };

  return (
    <div className="clientsList">
      <ul>{renderLists()}</ul>
      <button onClick={showClientModal}>Add Client</button>
    </div>
  );
};
