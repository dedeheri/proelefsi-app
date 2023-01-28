import * as actionTypes from "../../actiontypes/dashboard";

const initialState = {
  loading: true,
  error: false,
  success: false,
  message: "",
  result: {},
};

function homeReducer(state = initialState, action) {
  switch (action.type) {
    // get
    case actionTypes.SUCCESS_HOME: {
      return {
        ...state,
        loading: false,
        error: false,
        success: true,
        message: action.message,
        result: action.result,
      };
    }
    case actionTypes.FAILED_HOME: {
      return {
        ...state,
        loading: false,
        error: true,
        success: false,
        message: action.message,
      };
    }

    default:
      return state;
  }
}

export default homeReducer;
