import { TOTALANYALYSIS } from "../../../../api/fetching/article";
import * as actionType from "../../../actiontypes/dashboard";

function totalAction() {
  return async function (dispatch) {
    try {
      const response = await TOTALANYALYSIS();

      dispatch({
        type: actionType.SUCCESS_TOTAL_ANALYSIS_ARTICLE,
        result: response.data.result,
        message: response.data.message,
      });
    } catch (error) {
      dispatch({
        type: actionType.FAILED_TOTAL_ANALYSIS_ARTICLE,
        message: error.response?.data?.message || error?.response?.data?.error,
      });
    }
  };
}

export default totalAction;
