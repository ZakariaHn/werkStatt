import { helpAddCar, helpFetchCars } from "../helpers";
import { GET_CARS, ADD_CAR_SUCCESS } from "./types";

export const fetchCarsAction = () => async (dispatch) => {
  const response = await helpFetchCars();
  dispatch({
    type: GET_CARS,
    payload: response.data,
  });
};

export const addCarAction = (newCar) => async (dispatch) => {
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };
  const body = JSON.stringify(newCar);

  try {
    const response = await helpAddCar(body, config);
    dispatch({
      type: ADD_CAR_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    console.log(error);
  }
};
