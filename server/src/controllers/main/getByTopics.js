import articleModel from "../../model/article.js";
import visitorModel from "../../model/visitor.js";
import parser from "../../utils/parserBlocks.js";
import spreadToHtml from "../../utils/spreadToHtml.js";

async function getByTopics(req, res) {
  try {
    const topics = req.params.topics;
    const params = topics.split("-").join(" ");
    const { _gid } = req.cookies;

    if (topics === "undefined") {
      const resultData = [];
      if (_gid) {
        const visitor = await visitorModel.findOne({ _gid });
        if (visitor !== null) {
          const getTopics = [];
          const getIdArticle = [];

          // get history topics clicked
          for (let i = 0; i < visitor.in_topics.length; i++) {
            getTopics.push(visitor.in_topics[i]);
          }
          // get history id article clicked
          for (let i = 0; i < visitor.article_id.length; i++) {
            getIdArticle.push(visitor.article_id[i]);
          }

          // remove duplicate
          const uniqueTopics = getTopics.filter((v, i, a) => {
            return i === a.findIndex((t) => t === v);
          });

          // push data by topics
          for (let i = 0; i < uniqueTopics.length; i++) {
            const data = await articleModel
              .find({
                topics: uniqueTopics[i],
              })
              .sort({ createdAt: -1 });

            for (let b = 0; b < data.length; b++) {
              resultData.push({
                ...data[b]._doc,
                content: parser(data[b].content),
              });
            }
          }
        } else {
          const data = await articleModel.find({}).sort({ createdAt: -1 });
          for (let b = 0; b < data.length; b++) {
            resultData.push({
              ...data[b]._doc,
              content: parser(data[b].content),
            });
          }
        }
      } else {
        const data = await articleModel.find({}).sort({ createdAt: -1 });
        for (let b = 0; b < data.length; b++) {
          resultData.push({
            ...data[b]._doc,
            content: parser(data[b].content),
          });
        }
      }

      return res.status(200).json({
        message: req.t("MESSAGE.SUCCESS"),
        result: resultData,
      });
    } else {
      const article = await articleModel
        .find({ topics: params })
        .sort({ view: -1 });

      const resultData = new spreadToHtml(article);

      if (resultData.length === 0) {
        return res
          .status(404)
          .json({ message: req.t("ARTICLE.NOT_AVAILABLE") });
      } else {
        return res
          .status(200)
          .json({ message: req.t("MESSAGE.SUCCESS"), result: resultData });
      }
    }
  } catch (error) {
    console.log(error);
    return res.status(404).json({ error: req.t("ERROR.WRONG") });
  }
}

export default getByTopics;
