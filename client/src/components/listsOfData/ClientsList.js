import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { fetchClientsAction } from "../../store/actions/clientsActions";
import { CLICKED, DELETE_CLIENT, SET_TARGET } from "../../store/actions/types";

export const ClientsList = () => {
  const dispatch = useDispatch();

  const myClients = useSelector((state) => state.clients.clientsArray);
  const isClicked = useSelector((state) => state.target.isClicked);
  useEffect(() => {
    dispatch(fetchClientsAction());
  }, [dispatch]);

  const handleEditClient = (client) => {
    dispatch({ type: SET_TARGET, payload: client });
    dispatch({ type: CLICKED, payload: "editClient" });
  };

  const renderLists = () => {
    return myClients.map((client) => (
      <div className="li-buttons-wrapper" key={client._id}>
        <li onClick={() => dispatch({ type: SET_TARGET, payload: client })}>
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
              type: CLICKED,
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
