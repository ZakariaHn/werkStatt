import {
  USER_LOADING,
  USER_LOADED,
  REGISTER_SUCCESS,
  LOGIN_SUCCESS,
  AUTH_ERROR,
  LOGIN_FAIL,
  REGISTER_FAIL,
  LOGOUT_SUCCESS,
} from "../actions/types";

const initialState = {
  isAuthenticated: false,
  isLoading: false,
  user: null,
  errorMsg: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case USER_LOADING:
      return {
        ...state,
        token: localStorage.getItem("auth-token"),
        isLoading: true,
      };

    case USER_LOADED:
      let loadedState = {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        user: { ...state.user, ...action.payload },
        errorMsg: "",
      };
      return loadedState;

    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      localStorage.setItem("auth-token", action.payload.token);
      let loggedState = {
        ...state,
        token: localStorage.getItem("auth-token"),
        user: { ...state.user, ...action.payload }, // cuz payload already has user and token sent from api
        isAuthenticated: true,
        isLoading: false,
        errorMsg: "",
      };
      return loggedState;

    case AUTH_ERROR:
    case LOGIN_FAIL:
    case REGISTER_FAIL:
      localStorage.removeItem("auth-token");
      return {
        ...state,
        token: null,
        user: null,
        isAuthenticated: false,
        isLoading: false,
        errorMsg: action.payload,
      };

    case LOGOUT_SUCCESS:
      localStorage.removeItem("auth-token");
      return {
        ...state,
        token: null,
        user: null,
        isAuthenticated: false,
        isLoading: false,
        errorMsg: action.payload,
      };

    default:
      return state;
  }
}
