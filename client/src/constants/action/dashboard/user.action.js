import { CONFIG, GETUSER, PROFILE, ROLE } from "../../../api/fetching/user";
import * as actionType from "../../actiontypes/dashboard";

function userAction(query) {
  return async function (dispatch) {
    try {
      dispatch({ type: actionType.FETCHING_GET_ALL_USERS });
      const response = await GETUSER(query);
      dispatch({
        type: actionType.SUCCESS_GET_ALL_USERS,
        result: response.data.users,
        page: response.data.page,
      });
    } catch (error) {
      if (error.code === "ERR_NETWORK") {
        dispatch({
          type: actionType.FAILED_GET_ALL_USERS,
          message: error?.message,
        });
      } else {
        dispatch({
          type: actionType.FAILED_GET_ALL_USERS,
          message:
            error.response?.data?.message || error?.response?.data?.error,
        });
      }
    }
  };
}

function userConfigAction() {
  return async function (dispatch) {
    try {
      const response = await CONFIG();
      dispatch({
        message: response.data.message,
        type: actionType.SUCCESS_GET_ALL_USERS_CONFIG,
        result: response.data.result,
      });
    } catch (error) {
      dispatch({
        type: actionType.FAILED_GET_ALL_USERS_CONFIG,
        message: error?.response.data.error,
      });
    }
  };
}

function profileAction() {
  return async function (dispatch) {
    try {
      const response = await PROFILE();
      dispatch({
        type: actionType.SUCCESS_GET_PROFILE_USER,
        payload: response.data.user,
        message: response.data.message,
      });
    } catch (error) {
      dispatch({
        type: actionType.FAILED_GET_PROFILE_USER,
        message: error.response?.data?.message || error?.response?.data?.error,
      });
    }
  };
}

function roleAction() {
  return async function (dispatch) {
    try {
      const response = await ROLE();

      dispatch({
        type: actionType.SUCCESS_GET_ROLE,
        payload: response.data.result,
        message: response.data.message,
      });
    } catch (error) {
      dispatch({
        type: actionType.FAILED_GET_ROLE,
        message: error.response?.data?.message || error?.response?.data?.error,
      });
    }
  };
}

export { userAction, userConfigAction, profileAction, roleAction };
