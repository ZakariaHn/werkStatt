import { GET_OPERATIONS, SET_OPERATION } from "../actions/types";

const initialState = { operationsArray: [], operation: {} };

const OperationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_OPERATIONS:
      return {
        ...state,
        operationsArray: action.payload,
      };
    case SET_OPERATION:
      return {
        ...state,
        operation: action.payload,
      };
    default:
      return state;
  }
};
export default OperationsReducer;
