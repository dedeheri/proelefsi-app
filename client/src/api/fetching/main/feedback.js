import api from "../../base";
import config from "../../config";

function FEEDBACKARTICLE(id, emoji, label) {
  return api.post(
    `/api/v1/main/article/response`,
    {
      articleId: id,
      emoji: emoji,
      label: label,
    },
    config.headers
  );
}

export default FEEDBACKARTICLE;
