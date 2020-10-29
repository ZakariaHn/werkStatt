import React, { useEffect } from "react";
import ReactModal from "react-modal";
import { styles } from "../content/styles";
import { useModal } from "react-modal-hook";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { RegisterClient } from "../registrationForms/RegisterClient";
import { fetchClientsAction } from "../../store/actions/clientsActions";
import {
  DELETE_CLIENT,
  EDIT_CLIENT,
  SET_TARGET,
} from "../../store/actions/types";

export const ClientsList = () => {
  const dispatch = useDispatch();

  const myClients = useSelector((state) => state.clients.clientsArray);

  useEffect(() => {
    dispatch(fetchClientsAction());
  }, [dispatch]);

  const handleEditClient = (client) => {
    console.log(client);
    showClientModal();
    // dispatch({ type: EDIT_CLIENT, payload: client });
  };

  const [showClientModal, hideClientModal] = useModal(() => (
    <ReactModal ariaHideApp={false} isOpen style={styles}>
      <button onClick={hideClientModal}>X</button>
      <RegisterClient hide={hideClientModal} updateForm={true} />
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
            onClick={(_) => handleEditClient(client)}
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
