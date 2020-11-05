import { CLICKED, SET_TARGET, TAB_CLICKED } from "../actions/types";

const initialState = { item: {}, isClicked: "", clickedTab: "" };

export const targetReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_TARGET:
      return {
        ...state,
        item: payload,
      };

    case CLICKED:
      return {
        ...state,
        isClicked: payload,
      };

    case TAB_CLICKED:
      return {
        ...state,
        clickedTab: payload,
      };

    default:
      return state;
  }
};
