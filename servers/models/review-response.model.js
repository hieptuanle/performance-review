const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

const reviewResponseSchema = mongoose.Schema(
  {
    reviewDepartment: String,
    revieweeCode: String,
    revieweeName: String,
    anonymous: { type: Boolean, default: false },
    revieweeDepartment: String,
    reviewType: Number,
    reviewerName: String,
    reviewerCode: String,
    slug: String,
    positions: [String],
    questions: [
      {
        group: String,
        content: String,
        layout: String,
        okrs: [],
        mark: Number,
        answer: String,
      },
    ],
    userCode: String,
    userDisplayName: String,
    userOutlet: ObjectId,
    user: ObjectId,
  },
  {
    timestamps: true,
  }
);

/**
 * @typedef ReviewForm
 */
const ReviewResponseSchema = mongoose.model(
  "ReviewResponse",
  reviewResponseSchema
);

module.exports = ReviewResponseSchema;
