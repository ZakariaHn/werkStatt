import {
  GET_OPERATIONS,
  DELETE_OPERATION,
  EDIT_OPERATION,
  TARGET_OPERATION,
} from "../actions/types";
import { helpEditOperation, helpDeleteOperation } from "../helpers";

const initialState = { operationsArray: [], operation: {} };

const OperationsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_OPERATIONS:
      return {
        ...state,
        operationsArray: payload,
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
    case TARGET_OPERATION:
      return {
        ...state,
        operation: payload,
      };

    default:
      return state;
  }
};
export default OperationsReducer;
