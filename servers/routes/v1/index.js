const express = require("express");
const reviewResponseRoute = require("./review-responses.route");

const router = express.Router();

const defaultRoutes = [
  {
    path: "/review-responses",
    route: reviewResponseRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
