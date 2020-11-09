import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { fetchClientsAction } from "../../store/actions/clientsActions";
import { CLICKED, DELETE_CLIENT, SET_TARGET } from "../../store/actions/types";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

export const ClientsList = () => {
  const [selectedIndex, setSelectedIndex] = useState("");
  const dispatch = useDispatch();

  const myClients = useSelector((state) => state.clients.clientsArray);

  useEffect(() => {
    dispatch(fetchClientsAction());
  }, [dispatch]);

  const handleEditClient = (client) => {
    dispatch({ type: SET_TARGET, payload: client });
    dispatch({ type: CLICKED, payload: "editClient" });
  };

  const handleOnClickListItem = (client, index) => {
    setSelectedIndex(index);
    dispatch({ type: SET_TARGET, payload: client });
    dispatch({ type: CLICKED, payload: "" });
  };

  const renderLists = () => {
    return myClients.map((client, index) => (
      <List className="li-buttons-wrapper" key={client._id}>
        <ListItem
          button
          selected={selectedIndex === index}
          onClick={() => handleOnClickListItem(client, index)}
        >
          {client.lastname}
        </ListItem>

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
      </List>
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
