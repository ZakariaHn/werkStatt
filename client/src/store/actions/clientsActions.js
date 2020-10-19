import { helpFetchClients } from "../helpers";
import { GET_CLIENTS } from "./types";

export const fetchClientsAction = () => async (dispatch) => {
  const response = await helpFetchClients();
  console.log("action: ", response.data);
  dispatch({
    type: GET_CLIENTS,
    payload: response.data,
  });
};
