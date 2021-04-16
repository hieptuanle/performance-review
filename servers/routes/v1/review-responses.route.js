const express = require("express");
const ReviewResponse = require("../../models/review-response.model");

const router = express.Router();

const isAdmin = (userId) => {
  return [
    "556d9ddee22a874f4a9030b6",
    "55506b4670ca5e60201cdaa8",
    "5565cfc8712c3c341d0d14a1",
    "5acb25e5826e800c7fd21ab6",
    "599ab08e5b06d915dccfe018",
  ].includes(userId);
};

router
  .route("/")
  .get(async (req, res) => {
    try {
      const userId = req.header("x-user-id");
      if (!userId) return [];
      let query = {};

      if (isAdmin(userId)) {
        query = {};
        if (req.query.revieweeCode) {
          query = {
            revieweeCode: req.query.revieweeCode,
          };
        }
      } else {
        if (req.query.revieweeCode) {
          query = {
            revieweeCode: req.query.revieweeCode,
            reviewerCode: req.query.reviewerCode,
          };
        }
        query = { user: userId };
      }

      const reviewResponses = await ReviewResponse.find(query);
      res.jsonp(reviewResponses);
    } catch (e) {
      res.status(400).json({
        message: e.message,
      });
    }
  })
  .post(async (req, res) => {
    throw new Error("Đã quá hạn gửi form");
    try {
      const reviewResponse = new ReviewResponse(req.body);
      await reviewResponse.save();
      res.jsonp(reviewResponse);
    } catch (e) {
      res.status(400).json({
        message: e.message,
      });
    }
  });

router.route("/summary").get(async (req, res) => {
  try {
    const summary =
      (await ReviewResponse.aggregate().group({
        _id: "$slug",
        count: { $sum: 1 },
      })) || [];
    res.json(
      summary.reduce((result, item) => {
        result[item._id] = item.count;
        return result;
      }, {})
    );
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
});

router.route("/:reviewResponseId").get((req, res) => {
  res.jsonp(req.reviewResponse);
});

router.param("reviewResponseId", async (req, res, next, id) => {
  try {
    const reviewResponse = await ReviewResponse.findById(id);
    if (!reviewResponse)
      throw new Error("Không tìm thấy Review Response tương ứng");
    req.reviewResponse = reviewResponse;
    next();
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
});

module.exports = router;
