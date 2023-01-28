import authModel from "../../model/auth.js";

async function emailOtp(req, res) {
  const _id = req.cookies.uid;
  try {
    const user = await authModel.findById({ _id });
    if (user) {
      const { email, ...rest } = user._doc;
      return res
        .status(200)
        .json({ message: req.t("MESSAGE.SUCCESS"), result: email });
    }
  } catch (error) {
    return res.status(500).json({ error: req.t("ERROR.WRONG") });
  }
}

export default emailOtp;
