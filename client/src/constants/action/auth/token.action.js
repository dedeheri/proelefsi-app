import { VERIFYTOKEN } from "../../../api/api.auth";
import * as actionType from "../../actiontypes/auth";

function tokenAction(token) {
  return async function (dispatch) {
    try {
      const response = await VERIFYTOKEN(token);
      dispatch({
        type: actionType.SUCCESS_JWT_EXPIRED_ACCOUNT,
        message: response.data.message,
      });
    } catch (error) {
      dispatch({
        type: actionType.FAILED_JWT_EXPIRED_ACCOUNT,
        message: error.response.data.message,
      });

      console.clear();
    }
  };
}

export default tokenAction;
