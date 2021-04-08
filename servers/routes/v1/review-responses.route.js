const express = require("express");
const ReviewResponse = require("../../models/review-response.model");

const router = express.Router();

router
  .route("/")
  .get(async (req, res) => {
    try {
      const userId = req.header("x-user-id");
      if (!userId) return [];
      const reviewResponses = await ReviewResponse.find({
        user: userId,
      });
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

router.route("/:reviewResponseId").get((req, res) => {
  console.log(req.reviewResponse);
  res.jsonp(req.reviewResponse);
});

router.param("reviewResponseId", async (req, res, next, id) => {
  try {
    const reviewResponse = await ReviewResponse.findById(id);
    console.log({ reviewResponse });
    if (!reviewResponse)
      throw new Error("Không tìm thấy Review Response tương ứng");
    req.reviewResponse = reviewResponse;
    next();
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
});

module.exports = router;
