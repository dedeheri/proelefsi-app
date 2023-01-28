import * as actionType from "../../actiontypes/auth";

const intialState = {
  fetching: false,
  success: false,
  error: false,
  validation: "",
  message: "",
};

function OTPReducer(state = intialState, action) {
  switch (action.type) {
    case actionType.FETCHING_OTP_ACCOUNT: {
      return {
        ...state,
        fetching: true,
      };
    }
    case actionType.SUCCESS_OTP_ACCOUNT: {
      return {
        ...state,
        message: action.message,
        success: true,
        fetching: false,
      };
    }
    case actionType.FAILED_OTP_ACCOUNT: {
      return {
        ...state,
        message: action.message,
        validation: action.validation,
        success: false,
        error: true,
        fetching: false,
      };
    }

    default:
      return intialState;
  }
}

export default OTPReducer;
