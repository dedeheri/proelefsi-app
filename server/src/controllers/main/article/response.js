import visitorModel from "../../../model/visitor.js";

async function response(req, res) {
  try {
    const emoji = req.body.emoji;
    const label = req.body.label;
    const articleId = req.body.articleId;
    const { _gid } = req.cookies;
    //   find a visitor data;
    const visitor = await visitorModel.findOne({ _gid });
    //   if visitor data is avalible
    const dataResponse = { emoji: emoji, label: label, article_id: articleId };
    if (visitor) {
      await visitorModel.updateOne(
        { _id: visitor._id },
        { $push: { response: dataResponse } }
      );
      return res
        .status(200)
        .json({
          message: req.t("MESSAGE.SUCCESS"),
          result: "Terima Kasih atas menilaian anda",
        });
    }
    return false;
  } catch (error) {
    return res.status(500).json({ error: req.t("ERROR.WRONG") });
  }
}

export default response;
