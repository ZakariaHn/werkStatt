import {
  GET_CLIENTS,
  DELETE_CLIENT,
  EDIT_CLIENT,
  FIND_CLIENTS,
  ERROR_MSG,
} from "../actions/types";
import { helpDeleteClient, helpEditClient } from "../helpers";

const initialState = {
  clientsArray: [],
  foundClients: [],
  client: {},
  errorMsg: "",
};

const clientsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_CLIENTS:
      return {
        ...state,
        clientsArray: payload,
      };

    case FIND_CLIENTS:
      let foundClients = {
        ...state,
        foundClients: payload,
      };
      console.log("found here ", foundClients);
      return foundClients;

    case ERROR_MSG:
      // localStorage.removeItem('auth-token');
      return {
        ...state,
        errorMsg: payload,
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
