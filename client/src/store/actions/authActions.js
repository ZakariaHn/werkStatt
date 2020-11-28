import { helpRegisterUser } from "../helpers/index";
import { helpLoginUser } from "../helpers/index";
import { helpFetchMe } from "../helpers/index";
import { fetchClientsAction } from "./clientsActions";
import { fetchCarsAction } from "./carsActions";
import {
  USER_LOADED,
  AUTH_ERROR,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  USER_LOADING,
} from "./types";

export const loadUser = () => async (dispatch, getState) => {
  dispatch({ type: USER_LOADING });

  const token = getState().auth.token || localStorage.getItem("auth-token");
  if (token) {
    try {
      const response = await helpFetchMe(tokenConfig(token));
      dispatch({
        type: USER_LOADED,
        payload: response.data,
      });

      dispatch(fetchClientsAction()); // is it best practice to dispatch these actions here and on login ??
      dispatch(fetchCarsAction());
    } catch (error) {
      dispatch({
        type: AUTH_ERROR,
      });
    }
  }
};

export const registerAction = (registerData) => async (dispatch) => {
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };
  const body = JSON.stringify(registerData);

  try {
    const response = await helpRegisterUser(body, config);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: REGISTER_FAIL,
      payload: error.response.data,
    });
  }
};

export const loginAction = (loginData) => async (dispatch) => {
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };
  const body = JSON.stringify(loginData);

  try {
    const response = await helpLoginUser(body, config);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: response.data,
    });

    dispatch(fetchClientsAction());
    dispatch(fetchCarsAction());
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
      payload: error,
    });
  }
};

export const logout = () => {
  return { type: LOGOUT_SUCCESS }; // we return instead of dispatch because its logout sync
};

// setup config/headers and token
export const tokenConfig = (token) => {
  // shouldnt we provide token here ? do we even need this ?
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };

  if (token) {
    config.headers["auth-token"] = token; // try this on other objs
  }
  return config;
};
