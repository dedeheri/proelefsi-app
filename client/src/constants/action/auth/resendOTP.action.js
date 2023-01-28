import { OTPRESEND } from "../../../api/api.auth";
import toaster from "../../../utils/toaster";
import * as actionType from "../../actiontypes/auth";

function resendOTPAction() {
  return async function (dispatch) {
    try {
      dispatch({ type: actionType.FETCHING_RESEND_OTP_ACCOUNT });
      const response = await OTPRESEND();
      console.log(response);
      toaster("success", response.data.message);
      dispatch({
        type: actionType.SUCCESS_RESEND_OTP_ACCOUNT,
        message: response.data.message,
      });
    } catch (error) {
      if (error.response.status === 500) {
        toaster("error", error?.response?.data?.error);
      } else if (error.response.status === 422) {
        toaster("error", error?.response?.data?.message);
      }
      return dispatch({
        type: actionType.FAILED_RESEND_OTP_ACCOUNT,
        message: error.response.data.message,
        validation: error.response.data.validation,
      });
    }
  };
}

export default resendOTPAction;
