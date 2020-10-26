import { helpEditOperation, helpDeleteOperation } from "../helpers";
import {
  GET_OPERATIONS,
  SET_OPERATION,
  EDIT_OPERATION,
  DELETE_OPERATION,
} from "../actions/types";

const initialState = { operationsArray: [], operation: {} };

const OperationsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_OPERATIONS:
      return {
        ...state,
        operationsArray: payload,
      };
    case SET_OPERATION:
      return {
        ...state,
        operation: payload,
      };
    case EDIT_OPERATION:
      helpEditOperation(payload);
      return {
        ...state,
      };
    case DELETE_OPERATION:
      helpDeleteOperation(payload);
      return {
        ...state,
        operationsArray: state.operationsArray.filter(
          (operation) => operation._id !== payload
        ),
      };
    default:
      return state;
  }
};
export default OperationsReducer;
