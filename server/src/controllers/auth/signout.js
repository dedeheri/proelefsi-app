async function signout(req, res) {
  try {
    res.clearCookie("_token");
    res.clearCookie("uid");
    res.clearCookie("remember_me");

    res.status(200).json({ message: req.t("MESSAGE.SUCCESS") });
  } catch (error) {
    return res.status(500).json({ error: req.t("ERROR.WRONG") });
  }
}

export default signout;
