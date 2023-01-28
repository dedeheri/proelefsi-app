import * as actionType from "../../actiontypes/auth";

const intialState = {
  loading: true,
  success: false,
  error: false,
  message: "",
  result: "",
};

function emailVerificationReducer(state = intialState, action) {
  switch (action.type) {
    case actionType.SUCCESS_EMAIL_VERIFICATION_ACCOUNT: {
      return {
        ...state,
        message: action.message,
        success: true,
        error: false,
        loading: false,
        result: action.result,
      };
    }
    case actionType.FAILED_EMAIL_VERIFICATION_ACCOUNT: {
      return {
        ...state,
        message: action.message,
        success: false,
        error: true,
        loading: false,
      };
    }

    default:
      return intialState;
  }
}

export default emailVerificationReducer;
