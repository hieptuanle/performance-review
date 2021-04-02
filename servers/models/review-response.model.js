const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

const reviewResponseSchema = mongoose.Schema(
  {
    reviewDepartment: String,

    revieweeCode: String,
    revieweeName: String,
    revieweeDepartment: String,

    reviewerName: String,
    reviewerCode: String,

    slug: String,

    positions: [String],
    questions: [
      {
        group: String,
        content: String,
        layout: String,
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
