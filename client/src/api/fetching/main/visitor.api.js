import api from "../../base";
import config from "../../config";

function CREATEVISITOR() {
  return api.get(`/api/v1/main/visitor/create`, config.headers);
}

export default CREATEVISITOR;
