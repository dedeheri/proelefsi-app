import articleModel from "../../model/article.js";

async function tags(req, res) {
  try {
    const article = await articleModel.find({}).sort({ timestamps: -1 });
    const data = [];
    for (let i = 0; i < article.length; i++) {
      for (let u = 0; u < article[i].tags.length; u++) {
        const articles = await articleModel.find({ tags: article[i].tags[u] });
        data.push({
          tags: article[i].tags[u],
          total: articles.length + " Stories",
        });
      }
    }

    const removeDuplicateObject = [
      ...new Map(data.map((item) => [item["tags"], item])).values(),
    ];

    return res.status(200).json({
      message: req.t("MESSAGE.SUCCESS"),
      result: removeDuplicateObject,
    });
  } catch (error) {
    return res.status(500).json({ error: req.t("ERROR.WRONG") });
  }
}

export default tags;
