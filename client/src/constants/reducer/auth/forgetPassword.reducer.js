import * as actionType from "../../actiontypes/auth";

const intialState = {
  fetching: false,
  success: false,
  error: false,
  message: "",
  validation: "",
};

function forgetPasswordReducer(state = intialState, action) {
  switch (action.type) {
    case actionType.FETCHING_FORGET_PASSWORD_ACCOUNT: {
      return {
        ...state,
        fetching: true,
      };
    }
    case actionType.SUCCESS_FORGET_PASSWORD_ACCOUNT: {
      return {
        ...state,
        message: action.message,
        success: true,
        fetching: false,
      };
    }
    case actionType.FAILED_FORGET_PASSWORD_ACCOUNT: {
      return {
        ...state,
        message: action.message,
        validation: action.validation,
        success: false,
        error: true,
        fetching: false,
      };
    }
    case actionType.CLEAR_FORGET_PASSWORD_ACCOUNT: {
      return {
        ...state,
        message: "",
        validation: "",
        success: false,
        error: false,
        fetching: false,
      };
    }

    default:
      return intialState;
  }
}

export default forgetPasswordReducer;
