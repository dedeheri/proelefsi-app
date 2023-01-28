import mongoose from "mongoose";
import shortId from "../utils/shortId.js";
import moment from "moment";

const feedback = mongoose.Schema({
  _id: { type: String, default: shortId() },
  user_id: { type: String, default: null },
  feedback: { type: String, default: null },
  timestamps: {
    type: String,
    default: () => moment().format("dddd, MMMM Do YYYY, h:mm:ss a"),
  },
});

const feedbackModel = mongoose.model("feedback", feedback);
export default feedbackModel;
