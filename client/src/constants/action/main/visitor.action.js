import CREATEVISITOR from "../../../api/fetching/main/visitor.api";
import * as actionType from "../../actiontypes/main";

function visitorAction() {
  return async function (dispatch) {
    try {
      const response = await CREATEVISITOR();
      dispatch({
        type: actionType.SUCCESS_CREATE_VISITOR,
        result: response.data.result,
        message: response.data.message,
      });

      console.log(response);
    } catch (error) {
      dispatch({
        type: actionType.FAILED_CREATE_VISITOR,
        message: error.response?.data?.message || error?.response?.data?.error,
      });
    }
  };
}

export default visitorAction;
