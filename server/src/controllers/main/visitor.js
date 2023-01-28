import visitorModel from "../../model/visitor.js";

async function createVisitor(req, res) {
  try {
    const { _gid } = req.cookies;
    const visitor = await visitorModel.findOne({ _gid });
    if (visitor === null) {
      await visitorModel({
        _gid,
      }).save();
      return res.status(200).json({
        message: req.t("MESSAGE.SUCCESS"),
        result: "Visitor successfully created",
      });
    } else {
      return res.status(200).json({
        message: req.t("MESSAGE.SUCCESS"),
        result: "Visitors are available",
      });
    }
  } catch (error) {
    return res.status(500).json({ error: req.t("ERROR.WRONG") });
  }
}

export default createVisitor;
