import { ACTIVITYARTICLE } from "../../../api";
import * as actionType from "../../actiontypes/dashboard";

function homeAction() {
  return async function (dispatch) {
    try {
      const response = await ACTIVITYARTICLE();
      dispatch({
        type: actionType.SUCCESS_HOME,
        message: response.data.message,
        result: response.data.data,
      });
    } catch (error) {
      dispatch({
        type: actionType.FAILED_HOME,
        message: error.response.data.message || error.response.data.error,
      });
    }
  };
}

export { homeAction };
