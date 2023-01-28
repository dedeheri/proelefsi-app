import moment from "moment";
import mongoose from "mongoose";
import shortId from "../utils/shortId.js";

const chart = mongoose.Schema({
  _id: { type: String, default: shortId() },
  authourId: { type: String, default: null },
  articleId: { type: String, default: null },
  view: { type: Number, default: 0 },
  report: { type: Number, default: 0 },
  timestamps: {
    type: String,
    default: () => moment().format("DD MMMM YYYY"),
  },
});

const chartModel = mongoose.model("chart", chart);
export default chartModel;
