import * as main from "../../actiontypes/main";

const initialState = {
  error: false,
  success: false,
  result: "",
  message: {},
};

function visitorReducer(state = initialState, action) {
  switch (action.type) {
    case main.SUCCESS_CREATE_VISITOR: {
      return {
        ...state,
        error: false,
        success: true,
        result: action.result,
        message: action.message,
      };
    }
    case main.FAILED_CREATE_VISITOR: {
      return {
        ...state,
        error: true,
        success: false,
        message: action.message,
      };
    }

    default:
      return state;
  }
}

export default visitorReducer;
