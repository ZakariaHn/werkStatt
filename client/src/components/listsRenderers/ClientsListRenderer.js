import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchClientsAction } from "../../store/actions/clientsActions";
import { SET_TARGET } from "../../store/actions/types";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";

export const ClientsList = () => {
  const dispatch = useDispatch();

  const myClients = useSelector((state) => state.clients.clientsArray);

  useEffect(() => {
    dispatch(fetchClientsAction());
  }, [dispatch]);

  const renderLists = () => {
    return myClients.map((client) => (
      <div className="li-buttons-wrapper" key={client._id}>
        <li
          onClick={() => {
            dispatch({ type: SET_TARGET, payload: client });
          }}
        >
          {client.lastname}
        </li>
        <div>
          <FontAwesomeIcon className="icon" icon={faEdit} />
          <FontAwesomeIcon className="icon" icon={faTrash} />
        </div>
      </div>
    ));
  };

  return (
    <div className="clientsList">
      <ul>{renderLists()}</ul>
    </div>
  );
};
