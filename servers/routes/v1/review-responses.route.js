const express = require("express");
const ReviewResponse = require("../../models/review-response.model");

const router = express.Router();

router
  .route("/")
  .get((req, res) => {
    res.jsonp({
      status: "ok",
    });
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

module.exports = router;
