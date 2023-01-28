import api from "../../base";
import config from "../../config";

function GETTAGS() {
  return api.get(`/api/v1/main/tags`, config.headers);
}

export default GETTAGS;
