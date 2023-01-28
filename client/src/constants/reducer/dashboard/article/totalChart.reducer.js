import * as actionTypes from "../../../actiontypes/dashboard";

const initialState = {
  result: {},
  message: "",
  loading: true,
  error: false,
  success: false,
};

function totalChartReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SUCCESS_ANAYLISYS_CHART_ARTICLE: {
      return {
        ...state,
        message: action.message,
        success: true,
        error: false,
        loading: false,
        result: action.result,
      };
    }
    case actionTypes.FAILED_ANAYLISYS_CHART_ARTICLE: {
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

export default totalChartReducer;
