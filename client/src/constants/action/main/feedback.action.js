import FEEDBACKARTILCE from "../../../api/fetching/main/feedback";
import * as actionType from "../../actiontypes/main";
function feedbackArticleAction(id, emoji, label) {
  return async function (dispatch) {
    try {
      dispatch({
        type: actionType.FETCHING_FEEDBACK_ARTICLE,
      });
      const response = await FEEDBACKARTILCE(id, emoji, label);
      dispatch({
        type: actionType.SUCCESS_FEEDBACK_ARTICLE,
        message: response.data.result,
      });
    } catch (error) {
      dispatch({
        type: actionType.SUCCESS_FEEDBACK_ARTICLE,
        message: error.response?.data?.message || error?.response?.data?.error,
      });
    }
  };
}

export default feedbackArticleAction;
