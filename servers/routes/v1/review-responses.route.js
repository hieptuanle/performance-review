const express = require("express");
const ReviewResponse = require("../../models/review-response.model");
// const moment = require("moment");

const router = express.Router();

const START_DATE = new Date("2022-07-12T00:00:00+07:00");

router
  .route("/")
  .get(async (req, res) => {
    try {
      const user = req.user;
      if (!user) throw new Error("Forbidden");
      let query = { createdAt: null }; // default là ko ra kết quả gì

      if (user.roles.includes("bom")) {
        // người dùng được dùng reviewer code để xem chế độ của người khác
        query = {
          createdAt: { $gte: START_DATE },
        };
        const { revieweeCode } = req.query;
        if (revieweeCode) {
          query.revieweeCode = revieweeCode;
        }
      } else {
        query = {
          revieweeCode: req.user.code,
          createdAt: { $gte: START_DATE },
          anonymous: false,
        };
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
      (await ReviewResponse.aggregate()
        .match({
          createdAt: { $gte: START_DATE },
        })
        .group({
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
