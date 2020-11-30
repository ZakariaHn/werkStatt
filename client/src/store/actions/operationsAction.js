import {
  helpAddOperation,
  helpEditOperation,
  helpFetchCarOperations,
  helpFetchOperations,
} from "../helpers";
import { ADD_OPERATION_SUCCESS, EDIT_OPERATION, GET_OPERATIONS } from "./types";

export const fetchOperationsAction = () => async (dispatch) => {
  const response = await helpFetchOperations();
  dispatch({
    type: GET_OPERATIONS,
    payload: response.data,
  });
};

export const fetchCarOperationsAction = (carId) => async (dispatch) => {
  const response = await helpFetchCarOperations(carId);
  console.log('response here: ', response);
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
  } catch (error) {
    console.log(error);
  }
};

export const editOperationAction = (operation) => async (dispatch) => {
  try {
    const response = await helpEditOperation(operation);
    dispatch({
      type: EDIT_OPERATION,
      payload: response.data,
    });
  } catch (error) {
    console.log(error);
  }
};
