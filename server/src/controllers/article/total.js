import articleModel from "../../model/article.js";
import chartModel from "../../model/chart.js";
import profileModel from "../../model/profile.js";

async function total(req, res) {
  try {
    const id = req.decode.id;
    const user = await profileModel.findOne({ authId: id });
    const article = await articleModel.find({ "authour.id": user._id });

    const view = [];
    const report = [];

    for (let i = 0; i < article.length; i++) {
      const chart = await chartModel.find({ articleId: article[i]._id });

      for (let y = 0; y < chart.length; y++) {
        report.push(chart[y].report);
        view.push(chart[y].view);
      }
    }

    const viewReduce = view.reduce((acc, curr) => acc + curr, 0);
    const reportReduce = report.reduce((acc, curr) => acc + curr, 0);

    const total = {
      post: article.length,
      view: viewReduce,
      report: reportReduce,
    };

    return res.status(200).json({ message: "Success", result: total });
  } catch (error) {
    return res.status(500).json({ message: req.t("ERROR.WRONG") });
  }
}

export default total;
