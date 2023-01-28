import api from "./base";
import config from "./config";

function ACTIVITYARTICLE() {
  return api.get("/api/v1/home/new", config.headers);
}

export default ACTIVITYARTICLE;
