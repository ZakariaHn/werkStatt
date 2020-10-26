import { SET_TARGET } from "../actions/types";

const initialState = { item: {} };

export const targetReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TARGET:
      return {
        ...state,
        item: action.payload,
      };
    default:
      return state;
  }
};
