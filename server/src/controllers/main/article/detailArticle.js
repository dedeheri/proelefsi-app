import articleModel from "../../../model/article.js";
import visitorModel from "../../../model/visitor.js";
import chartModel from "../../../model/chart.js";
import convertDataToHtml from "../../../utils/convertDataToHtml.js";

async function addView(id, view) {
  await articleModel.findByIdAndUpdate(
    { _id: id },
    { view: view + 1 },
    { new: true }
  );
}

async function visitorPush(_gid, article) {
  const visitor = await visitorModel.findOne({
    _gid: _gid,
    article_id: article._id,
  });

  if (visitor === null) {
  }

  // for (let i = 0; i < visitor.article_id.length; i++) {
  //   console.log(visitor.article_id[i]);
  // }
}

async function addChart(article) {
  const chart = await chartModel.findOne({
    articleId: article._id,
  });
  if (chart) {
    await chartModel.findByIdAndUpdate(
      { _id: chart._id },
      { view: chart.view + 1, authourId: article.authour.id },
      { new: true }
    );
  } else {
    await chartModel({
      authourId: article.authour.id,
      articleId: article._id,
      view: +1,
    }).save();
  }
}

async function detailArticle(req, res) {
  const id = req.params.id;
  const slug = id.split("-").slice(-1).pop();
  try {
    const article = await articleModel.findOne({ _id: slug });
    const visitor = await visitorModel.findOne({ "response.article_id": id });

    if (!article) {
      return res.status(404).json({ message: req.t("ARTICLE.NOT_AVAILABLE") });
    }

    const { _gid } = req.cookies;
    visitorPush(_gid, article);
    addView(article._id, article.view);
    addChart(article);

    const parseJson = JSON.parse(article.content);

    const result = {
      ...article._doc,
      response: visitor === null ? true : false,
      content: convertDataToHtml(parseJson.blocks),
    };

    return res.status(200).json({
      message: req.t("MESSAGE.SUCCESS"),
      result: result,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: req.t("ERROR.WRONG") });
  }
}

export default detailArticle;
