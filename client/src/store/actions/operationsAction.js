import { helpAddOperation, helpFetchOperations } from "../helpers";
import { ADD_OPERATION_SUCCESS, GET_OPERATIONS } from "./types";

export const fetchOperationsAction = () => async (dispatch) => {
  const response = await helpFetchOperations();
  dispatch({
    type: GET_OPERATIONS,
    payload: response.data,
  });
};

export const addOperationAction = (newOperation) => async (dispatch) => {
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };
  const body = JSON.stringify(newOperation);

  try {
    const response = await helpAddOperation(body, config);
    dispatch({
      type: ADD_OPERATION_SUCCESS,
      payload: response.data,
    });
  } catch(error) {
    console.log(error);
  }
};
