import { RESETPASSWORD } from "../../../api/api.auth";
import toaster from "../../../utils/toaster";
import * as actionType from "../../actiontypes/auth";

function resetPasswordAction(token, password, repeatPassword) {
  return async function (dispatch) {
    try {
      dispatch({ type: actionType.FETCHING_RESET_PASSWORD_ACCOUNT });
      const response = await RESETPASSWORD(token, password, repeatPassword);
      dispatch({ type: actionType.SUCCESS_RESET_PASSWORD_ACCOUNT });
    } catch (error) {
      console.log(error);
      dispatch({
        type: actionType.FAILED_RESET_PASSWORD_ACCOUNT,
        message: error.response.data.message,
        validation: error.response.data.validation,
      });
    }
  };
}

export default resetPasswordAction;
