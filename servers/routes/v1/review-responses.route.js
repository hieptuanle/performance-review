const express = require("express");

const router = express.Router();

router
  .route("/")
  .get((req, res) => {
    res.jsonp({
      status: "ok",
    });
  })
  .post((req, res) => {});

module.exports = router;
