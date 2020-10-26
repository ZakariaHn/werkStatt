import { DELETE_CAR, EDIT_CAR, GET_CARS, SET_CAR } from "../actions/types";
import { helpEditCar, helpDeleteCar } from "../helpers/index";

const initialState = { carsArray: [], car: {} };

const carsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_CARS:
      return {
        ...state,
        carsArray: payload,
      };
    case SET_CAR:
      return {
        ...state,
        car: payload,
      };
    case EDIT_CAR:
      helpEditCar(payload);
      return {
        ...state,
      };
    case DELETE_CAR:
      helpDeleteCar(payload);
      return {
        ...state,
        carsArray: state.carsArray.filter((car) => car._id !== payload),
      };
    default:
      return state;
  }
};
export default carsReducer;
