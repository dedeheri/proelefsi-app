import GETTAGS from "../../../api/fetching/main/tags";
import * as actionType from "../../actiontypes/main";

function tagsAction() {
  return async function (dispatch) {
    try {
      dispatch({ type: actionType.RELOG_ERROR_TAGS });
      const response = await GETTAGS();

      dispatch({
        type: actionType.SUCCESS_GET_TAGS,
        result: response.data.result,
        message: response.data.message,
      });
    } catch (error) {
      if (error.code === "ERR_NETWORK") {
        dispatch({
          type: actionType.FAILED_GET_TAGS,
          message: error?.message,
        });
      } else {
        dispatch({
          type: actionType.FAILED_GET_TAGS,
          message:
            error.response?.data?.message || error?.response?.data?.error,
        });
      }
    }
  };
}

export default tagsAction;
