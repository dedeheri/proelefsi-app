import mongoose from "mongoose";
import shortid from "shortid";
import moment from "moment";
import shortId from "../utils/shortId.js";

const config = { type: String };
const users = mongoose.Schema({
  _id: { ...config, default: shortId() },
  cloudinary_id: { ...config, required: true },
  email: { ...config, required: true },
  password: { ...config, required: true },
  email_verify: { type: Boolean, default: false },
  timestamps: {
    type: String,
    default: () => moment().format("dddd, MMMM Do YYYY, h:mm:ss a"),
  },
});

const userModel = mongoose.model("users", users);
export default userModel;
