import { BUTTON_CLICKED, SET_TARGET } from "../actions/types";

const initialState = { item: {}, isClicked: "" };

export const targetReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_TARGET:
      return {
        ...state,
        item: payload,
      };
    case BUTTON_CLICKED:
      return {
        ...state,
        isClicked: payload,
      };
    default:
      return state;
  }
};
