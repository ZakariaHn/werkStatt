import {
  GET_CLIENTS,
  DELETE_CLIENT,
  EDIT_CLIENT,
} from "../actions/types";
import { helpDeleteClient, helpEditClient } from "../helpers";

const initialState = { clientsArray: [], client: {} };

const clientsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_CLIENTS:
      return {
        ...state,
        clientsArray: payload,
      };
    case EDIT_CLIENT:
      helpEditClient(payload);
      return {
        ...state,
      };
    case DELETE_CLIENT:
      helpDeleteClient(payload);
      return {
        ...state,
        clientsArray: state.clientsArray.filter(
          (client) => client._id !== payload
        ),
      };
    default:
      return state;
  }
};

export default clientsReducer;
