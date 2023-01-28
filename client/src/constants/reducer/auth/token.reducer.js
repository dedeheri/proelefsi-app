import * as actionType from "../../actiontypes/auth";

const intialState = {
  loading: true,
  success: false,
  error: false,
  message: "",
};

function tokenReducer(state = intialState, action) {
  switch (action.type) {
    case actionType.SUCCESS_JWT_EXPIRED_ACCOUNT: {
      return {
        ...state,
        message: action.message,
        success: true,
        error: false,
        loading: false,
      };
    }
    case actionType.FAILED_JWT_EXPIRED_ACCOUNT: {
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

export default tokenReducer;
