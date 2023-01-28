import { EMAILVERIFICATION } from "../../../api/api.auth";
import * as actionType from "../../actiontypes/auth";

function emailVerificationAction() {
  return async function (dispatch) {
    try {
      const response = await EMAILVERIFICATION();
      dispatch({
        type: actionType.SUCCESS_EMAIL_VERIFICATION_ACCOUNT,
        message: response.data.message,
        result: response.data.result,
      });
    } catch (error) {
      return dispatch({
        type: actionType.FAILED_EMAIL_VERIFICATION_ACCOUNT,
        message: error.response.data.message,
        validation: error.response.data.validation,
      });
    }
  };
}

export default emailVerificationAction;
