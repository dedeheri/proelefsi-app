import { TOTALANYALYSISCHART } from "../../../../api/fetching/article";
import * as actionType from "../../../actiontypes/dashboard";

function totalChartAction() {
  return async function (dispatch) {
    try {
      const response = await TOTALANYALYSISCHART();
      dispatch({
        type: actionType.SUCCESS_ANAYLISYS_CHART_ARTICLE,
        result: response.data.result,
        message: response.data.message,
      });
    } catch (error) {
      dispatch({
        type: actionType.FAILED_ANAYLISYS_CHART_ARTICLE,
        message: error.response?.data?.message || error?.response?.data?.error,
      });
    }
  };
}

export default totalChartAction;
