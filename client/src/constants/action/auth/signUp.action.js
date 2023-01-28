import { SIGNOUT } from "../../../api/api.auth";
import toaster from "../../../utils/toaster";
import * as actionType from "../../actiontypes/auth";

const baseUrl = process.env.REACT_APP_BASE_URL;

function signupAction() {
  return async function (dispatch) {
    try {
      dispatch({ type: actionType.FETCHING_SIGNUP_ACCOUNT });
      const response = await SIGNOUT();
      if (response.status === 200) {
        setInterval(() => {
          window.location.href = `${baseUrl}/account`;
        }, 3000);
      }
      toaster("success", response.data.message);
      dispatch({
        type: actionType.SUCCESS_SIGNUP_ACCOUNT,
        message: response.data.message,
      });
    } catch (error) {
      if (error.response.status === 500) {
        return toaster("error", error.response.data.error);
      } else {
        return dispatch({
          type: actionType.FAILED_SIGNUP_ACCOUNT,
          message: error.response.data.message,
          validation: error.response.data.validation,
        });
      }
    }
  };
}

export default signupAction;
