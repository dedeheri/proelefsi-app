import moment from "moment";
import mongoose from "mongoose";
import shortId from "../utils/shortId.js";

const otp = mongoose.Schema({
  _id: { type: String, default: shortId() },
  authId: { type: String, default: null },
  OTP: { type: String, default: null },
  createdAt: { type: Date, default: Date.now, index: { expires: 300000 } },
  timestamps: {
    type: String,
    default: () => moment().format("dddd, MMMM Do YYYY, h:mm:ss a"),
  },
});

const otpModel = mongoose.model("otp", otp);
export default otpModel;
