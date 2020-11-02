import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { fetchClientsAction } from "../../store/actions/clientsActions";
import {
  BUTTON_CLICKED,
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

    // dispatch({ type: EDIT_CLIENT, payload: client });
  };

  const activeItem = useRef();

  const renderLists = () => {
    return myClients.map((client) => (
      <div className="li-buttons-wrapper" key={client._id}>
        <li
          ref={activeItem}
          onClick={() => dispatch({ type: SET_TARGET, payload: client })}
        >
          {client.lastname}
        </li>

        <div>
          <FontAwesomeIcon
            className="icon"
            icon={faEdit}
            onClick={() => handleEditClient(client)}
          />

          <FontAwesomeIcon
            className="icon"
            icon={faTrash}
            onClick={() =>
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
      <div className="buttonWrapper">
        <button
          onClick={() =>
            dispatch({
              type: BUTTON_CLICKED,
              payload: "addClient",
            })
          }
        >
          Add Client
        </button>
      </div>
    </div>
  );
};
