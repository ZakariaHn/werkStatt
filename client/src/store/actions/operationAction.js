import { helpFetchOperations } from "../helpers";
import { GET_OPERATIONS } from "./types";

export const fetchOperationsAction = () => async (dispatch) => {
  const response = await helpFetchOperations();
  dispatch({
    type: GET_OPERATIONS,
    payload: response.data,
  });
};
