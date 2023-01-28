import moment from "moment";
import mongoose from "mongoose";
import shortId from "../utils/shortId.js";

const role = mongoose.Schema({
  _id: { type: String, default: shortId() },
  role: { type: String, required: true, trim: true },
  timestamps: {
    type: String,
    default: () => moment().format("dddd, MMMM Do YYYY, h:mm:ss a"),
  },
});

const roles = mongoose.model("role", role);
export default roles;
