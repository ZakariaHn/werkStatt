import { GET_CARS, EDIT_CAR, DELETE_CAR, TARGET_CAR } from "../actions/types";
import { helpDeleteCar, helpEditCar } from "../helpers";

const initialState = { carsArray: [], car: {} };

const carsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_CARS:
      return {
        ...state,
        carsArray: payload,
      };

    case EDIT_CAR:
      helpEditCar(payload);
      return { ...state };

    case DELETE_CAR:
      helpDeleteCar(payload);
      return {
        ...state,
        carsArray: state.carsArray.filter((car) => car._id !== payload),
      };
    case TARGET_CAR:
      return {
        ...state,
        car: payload,
      };
    default:
      return state;
  }
};
export default carsReducer;
