import * as actionTypes from "../../../actiontypes/dashboard";

const initialState = {
  result: {},
  message: "",
  loading: true,
  error: false,
  success: false,
};

function totalReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SUCCESS_TOTAL_ANALYSIS_ARTICLE: {
      return {
        ...state,
        message: action.message,
        success: true,
        error: false,
        loading: false,
        result: action.result,
      };
    }
    case actionTypes.FAILED_TOTAL_ANALYSIS_ARTICLE: {
      return {
        ...state,
        message: action.message,
        success: false,
        error: true,
        loading: false,
        result: action.result,
      };
    }

    default:
      return state;
  }
}

export default totalReducer;
