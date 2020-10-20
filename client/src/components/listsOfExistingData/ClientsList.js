import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchClientsAction } from "../../store/actions/clientsActions";
import { SET_TARGET } from "../../store/actions/types";

export const ClientsList = () => {
  const dispatch = useDispatch();

  const myClients = useSelector((state) => state.clients.clientsArray);

  useEffect(() => {
    dispatch(fetchClientsAction());
  }, [dispatch]);

  const renderLists = () => {
    return myClients.map((client) => (
      <li
        key={client._id}
        onClick={() => {
          dispatch({ type: SET_TARGET, payload: client });
        }}
      >
        {client.email}
      </li>
    ));
  };

  return (
    <div className="clientsList">
      <ul>{renderLists()}</ul>
    </div>
  );
};
