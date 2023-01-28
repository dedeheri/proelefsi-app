import chartModel from "../../model/chart.js";
import profilModel from "../../model/profile.js";

async function totalChart(req, res) {
  try {
    const id = req.decode.id;
    const user = await profilModel.findOne({ authId: id });
    if (!user) {
      return res.status(404).json({ message: "No data Avalibale" });
    } else {
      const chart = await chartModel
        .find({ authourId: user._id })
        .sort({ timestamp: 1 });

      const view = [];
      const report = [];
      for (let i = 0; i < chart.length; i++) {
        view.push(chart[i].view);
        report.push(chart[i].report);
      }

      if (chart.length === 0) {
        return res.status(404).json({ message: "Success", result: "No Data" });
      } else {
        return res.status(200).json({
          result: {
            view: chart,
            report: report,
          },
        });
      }
    }
  } catch (error) {
    return res.status(500).json({ error: req.t("ERROR.WRONG") });
  }
}

export default totalChart;
