import { GET_CLIENTS, SET_CLIENT } from "../actions/types";

const initialState = { clientsArray: [], client: {} };

const clientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CLIENTS:
      console.log("reducer: ", action.payload);
      return {
        ...state,
        clientsArray: action.payload,
      };
    case SET_CLIENT:
      return {
        ...state,
        client: action.payload,
      };
    default:
      return state;
  }
};
export default clientsReducer;
