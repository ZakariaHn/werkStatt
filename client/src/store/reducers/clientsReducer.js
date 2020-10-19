import { GET_CLIENTS } from "../actions/types";

const initialState = { clientsArray: [] };

const clientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CLIENTS:
      console.log("reducer: ", action.payload);
      return {
        ...state,
        clientsArray: action.payload,
      };
    default:
      return state;
  }
};
export default clientsReducer;
