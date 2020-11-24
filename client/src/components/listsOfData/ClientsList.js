import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { fetchClientsAction } from "../../store/actions/clientsActions";
import { CLICKED, DELETE_CLIENT, SET_TARGET } from "../../store/actions/types";
import ListItem from "@material-ui/core/ListItem";

export const ClientsList = (props) => {
  const classes = props.styles();

  const dispatch = useDispatch();

  const [selectedIndex, setSelectedIndex] = useState(null);

  const myClients = useSelector((state) => state.clients.clientsArray);
  const foundClient = useSelector((state) => state.clients.foundClients);

  useEffect(() => {
    dispatch(fetchClientsAction());
  }, []);

  // useEffect(() => {

  // }, [myClients]);

  const handleEditClient = (client) => {
    dispatch({ type: SET_TARGET, payload: client });
    dispatch({ type: CLICKED, payload: "editClient" });
  };

  const handleDeleteClient = (client) => {
    if (
      window.confirm(`Are you sure you want to delete ${client.lastname} ?`)
    ) {
      return dispatch({ type: DELETE_CLIENT, payload: client._id });
    }
  };

  const handleOnClickListItem = (client, index) => {
    setSelectedIndex(index);
    dispatch({ type: SET_TARGET, payload: client });
    dispatch({ type: CLICKED, payload: "" });
  };

  const renderLists = () => {
    let render;

    foundClient.length > 0 ? (render = foundClient) : (render = myClients);
    return render.map((client, index) => (
      <div className="li-buttons-wrapper" key={client._id}>
        <ListItem
          button
          className={classes.root}
          selected={selectedIndex === index}
          classes={{ selected: classes.selected }}
          onClick={() => handleOnClickListItem(client, index)}
        >
          {client.lastname[0].toUpperCase() + client.lastname.slice(1)}
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
            onClick={() => handleDeleteClient(client)}
          />
        </div>
      </div>
    ));
  };

  return (
    <div className="clientsList">
      <div className="selected-item-header">
        <small>
          {myClients.length > 0
            ? "All registered clients"
            : "No clients registered"}
        </small>
      </div>
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
