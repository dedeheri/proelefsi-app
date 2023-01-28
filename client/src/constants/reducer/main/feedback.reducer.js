import * as actionType from "../../actiontypes/main";

const initialState = {
  error: false,
  success: false,
  fetching: false,
  message: "",
};

function feedbackReducer(state = initialState, action) {
  switch (action.type) {
    case actionType.FETCHING_FEEDBACK_ARTICLE: {
      return {
        ...state,
        fetching: true,
      };
    }
    case actionType.SUCCESS_FEEDBACK_ARTICLE: {
      return {
        ...state,
        error: false,
        success: true,
        fetching: false,
        message: action.message,
      };
    }
    case actionType.FAILED_FEEDBACK_ARTICLE: {
      return {
        ...state,
        error: true,
        success: false,
        fetching: false,
        message: action.message,
      };
    }

    default:
      return state;
  }
}

export default feedbackReducer;
