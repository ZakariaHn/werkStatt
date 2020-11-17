import {
  USER_LOADED,
  USER_LOADING,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  AUTH_ERROR,
} from "../actions/types";

const initialState = {
  isAuthenticated: false,
  isLoading: false,
  user: null,
  errorMsg: "",
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
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
        user: { ...state.user, ...payload },
        errorMsg: "",
      };
      return loadedState;

    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      localStorage.setItem("auth-token", payload.token);
      let loggedState = {
        ...state,
        token: localStorage.getItem("auth-token"),
        user: { ...state.user, ...payload },
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
        errorMsg: payload,
      };

    case LOGOUT_SUCCESS:
      localStorage.removeItem("auth-token");
      return {
        ...state,
        token: null,
        user: null,
        isAuthenticated: false,
        isLoading: false,
        errorMsg: payload,
      };

    default:
      return state;
  }
}
