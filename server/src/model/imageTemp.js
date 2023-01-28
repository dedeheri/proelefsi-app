import moment from "moment";
import mongoose from "mongoose";
import shortId from "../utils/shortId.js";

const imageTemp = mongoose.Schema({
  _id: { type: String, default: shortId() },
  authId: { type: String, default: null },
  image_content: { type: String },
  cloudinary_id: { type: String },
  createdAt: { type: Date, default: Date.now, index: { expires: 300000 } },
  timestamps: {
    type: String,
    default: () => moment().format("dddd, MMMM Do YYYY, h:mm:ss a"),
  },
});

const imageTempModel = mongoose.model("imageTemp", imageTemp);
export default imageTempModel;
