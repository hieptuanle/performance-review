const express = require("express");
const reviewFormRoute = require("./review-responses.route");

const router = express.Router();

const defaultRoutes = [
  {
    path: "/review-responses",
    route: reviewFormRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
