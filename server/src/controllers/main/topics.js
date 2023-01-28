import articleModel from "../../model/article.js";
import topicsModel from "../../model/topics.js";

async function topics(req, res) {
  try {
    const topics = await topicsModel.find({});

    const resultData = [];
    for (let i = 0; i < topics.length; i++) {
      const article = await articleModel.find({
        topics: topics[i].topics,
      });
      resultData.push({
        topics: topics[i].topics,
        total: article.length + " Stories",
      });
    }
    return res.status(200).json({
      message: req.t("MESSAGE.SUCCESS"),
      topics: resultData,
    });
  } catch (error) {
    return res.status(404).json({ error: req.t("ERROR.WRONG") });
  }
}

export default topics;
