const express = require("express");
const _ = require("lodash");

const ReviewResponse = require("../../models/review-response.model");
const { getRevieweesForManager, isManager } = require("../../utils/forms");
// const moment = require("moment");

const router = express.Router();

const START_DATE = new Date("2024-10-01T00:00:00+07:00");

router
  .route("/")
  .get(async (req, res) => {
    try {
      const user = req.user;
      if (!user) throw new Error("Forbidden");
      let revieweeQuery = { createdAt: null }; // default là ko ra kết quả gì

      const { revieweeCode, managerCode, employeeCode } = req.query;
      console.log(user.roles);
      if (user.roles.includes("bom")) {
        // người dùng được dùng reviewer code để xem chế độ của người khác
        revieweeQuery = {};
        if (revieweeCode) {
          revieweeQuery.revieweeCode = revieweeCode;
        }
        if (managerCode) {
          const reviewees = getRevieweesForManager(user.code);
          if (reviewees && reviewees.length > 0) {
            revieweeQuery.revieweeCode = { $in: reviewees.map((r) => r.code) };
          }
        }
        // if (employeeCode) {
        //   revieweeQuery.revieweeCode = employeeCode;
        // }
      } else if (isManager(user.code)) {
        // người dùng được dùng reviewer code để xem chế độ của người khác
        revieweeQuery = {
          revieweeCode: req.user.code,
          anonymous: false,
        };

        const reviewees = getRevieweesForManager(user.code);
        if (revieweeCode && _.some(reviewees, { code: revieweeCode })) {
          revieweeQuery.revieweeCode = revieweeCode;
        }
        if (managerCode) {
          const reviewees = getRevieweesForManager(user.code);
          if (reviewees && reviewees.length > 0) {
            revieweeQuery.revieweeCode = { $in: reviewees.map((r) => r.code) };
          }
        }
        if (employeeCode && employeeCode === user.code) {
          revieweeQuery.revieweeCode = employeeCode;
        }
      } else {
        revieweeQuery = {
          revieweeCode: req.user.code,
          anonymous: false,
        };
      }

      const reviewerQuery = {
        reviewerCode: req.user.code,
      };

      let query = {};
      if (revieweeCode || managerCode) {
        query = revieweeQuery;
      } else {
        query = { $or: [revieweeQuery, reviewerQuery] };
      }

      const reviewResponses = await ReviewResponse.find({
        ...query,
        createdAt: { $gte: START_DATE },
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
