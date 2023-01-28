import * as actionType from "../../actiontypes/auth";

const intialState = {
  fetching: false,
  success: false,
  error: false,
  message: "",
  validation: "",
};

function resetPasswordReducer(state = intialState, action) {
  switch (action.type) {
    case actionType.FETCHING_RESET_PASSWORD_ACCOUNT: {
      return {
        ...state,
        fetching: true,
      };
    }
    case actionType.SUCCESS_RESET_PASSWORD_ACCOUNT: {
      return {
        ...state,
        message: action.message,
        success: true,
        fetching: false,
      };
    }
    case actionType.FAILED_RESET_PASSWORD_ACCOUNT: {
      return {
        ...state,
        message: action.message,
        validation: action.validation,
        success: false,
        error: true,
        fetching: false,
      };
    }
    case actionType.CLEAR_RESET_PASSWORD_ACCOUNT: {
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

export default resetPasswordReducer;
