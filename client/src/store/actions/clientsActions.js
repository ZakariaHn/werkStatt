import { helpAddClient, helpFetchClients, helpEditClient } from "../helpers";
import { ADD_CLIENT_SUCCESS, EDIT_CLIENT, GET_CLIENTS } from "./types";

export const fetchClientsAction = () => async (dispatch) => {
  const response = await helpFetchClients();
  dispatch({
    type: GET_CLIENTS,
    payload: response.data,
  });
};

export const addClientAction = (newClient) => async (dispatch) => {
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };
  const body = JSON.stringify(newClient);
  try {
    const response = await helpAddClient(body, config);
    dispatch({
      type: ADD_CLIENT_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const editClientAction = (client) => async (dispatch) => {
  try {
    const response = await helpEditClient(client);
    dispatch({
      type: EDIT_CLIENT,
      payload: response.data,
    });
  } catch (error) {
    console.log(error);
  }
};
