import { OTPSEND } from "../../../api/api.auth";
import toaster from "../../../utils/toaster";
import * as actionType from "../../actiontypes/auth";

const baseUrl = process.env.REACT_APP_BASE_URL;

function OTPAction(data) {
  return async function (dispatch) {
    try {
      dispatch({ type: actionType.FETCHING_OTP_ACCOUNT });
      const response = await OTPSEND(data);
      console.log(response);
      toaster("success", response.data.message.OTP);
      dispatch({
        type: actionType.SUCCESS_OTP_ACCOUNT,
        message: response.data.message.OTP,
      });
      if (response.status === 200) {
        setInterval(() => {
          window.location.href = `${baseUrl}/dashboard`;
        }, 3000);
      }
    } catch (error) {
      if (error.response.status === 500) {
        toaster("error", error?.response?.data?.error);
      } else if (error.response.status === 422) {
        toaster("error", error?.response?.data?.message?.OTP);
      }
      return dispatch({
        type: actionType.FAILED_OTP_ACCOUNT,
        message: error.response.data.message,
        validation: error.response.data.validation,
      });
    }
  };
}

export default OTPAction;
