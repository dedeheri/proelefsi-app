import { FORGETPASSWORD } from "../../../api/api.auth";
import toaster from "../../../utils/toaster";
import * as actionType from "../../actiontypes/auth";

function forgetPasswordAction(email) {
  return async function (dispatch) {
    try {
      dispatch({ type: actionType.FETCHING_FORGET_PASSWORD_ACCOUNT });
      const response = await FORGETPASSWORD(email);
      dispatch({ type: actionType.SUCCESS_FORGET_PASSWORD_ACCOUNT });
      toaster("success", response.data.message);
    } catch (error) {
      if (error.response.status === 500) {
        toaster(
          "error",
          error.response.data.error || error.response.data.message
        );
        return dispatch({
          type: actionType.FAILED_FORGET_PASSWORD_ACCOUNT,
        });
      } else {
        return dispatch({
          type: actionType.FAILED_FORGET_PASSWORD_ACCOUNT,
          message: error.response.data.message,
          validation: error.response.data.validation,
        });
      }
    }
  };
}

export default forgetPasswordAction;
