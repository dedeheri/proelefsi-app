import * as actionType from "../../actiontypes/other";

const initialState = {
  modal: false,
};

function modalLogoutReducer(state = initialState, action) {
  switch (action.type) {
    case actionType.MODAL_LOGOUT: {
      return {
        ...state,
        modal: action.modal,
      };
    }

    default:
      return state;
  }
}

export default modalLogoutReducer;
