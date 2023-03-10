import mongoose from "mongoose";
import shortId from "../utils/shortId.js";
import moment from "moment";

const shortLink = mongoose.Schema({
  _id: { type: String, default: shortId() },
  articleId: { type: String, default: null },
  shortLink: { type: String, default: null },
  clicked: { type: Number, default: 0 },
  timestamps: {
    type: String,
    default: () => moment().format("dddd, MMMM Do YYYY, h:mm:ss a"),
  },
});

const shortLinks = mongoose.model("shortLink", shortLink);
export default shortLinks;
