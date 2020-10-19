import { helpFetchCars } from "../helpers";
import { GET_CARS } from "./types";

export const fetchCarsAction = () => async (dispatch) => {
  const response = await helpFetchCars();
  console.log("action: ", response.data);
  dispatch({
    type: GET_CARS,
    payload: response.data,
  });
};
