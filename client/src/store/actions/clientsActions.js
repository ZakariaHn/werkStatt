import { helpAddClient, helpFetchClients } from "../helpers";
import { ADD_CLIENT_SUCCESS, GET_CLIENTS } from "./types";

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
