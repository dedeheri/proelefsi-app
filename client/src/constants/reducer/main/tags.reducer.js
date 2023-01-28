import * as main from "../../actiontypes/main";

const initialState = {
  error: false,
  success: false,
  loading: true,
  result: [],
  message: {},
};

function tags(state = initialState, action) {
  switch (action.type) {
    case main.RELOG_ERROR_TAGS: {
      return {
        ...state,
        loading: true,
      };
    }
    case main.SUCCESS_GET_TAGS: {
      return {
        ...state,
        error: false,
        success: true,
        loading: false,
        result: action.result,
        message: action.message,
      };
    }
    case main.FAILED_GET_TAGS: {
      return {
        ...state,
        error: true,
        success: false,
        loading: false,
        message: action.message,
      };
    }

    default:
      return state;
  }
}

export default tags;
