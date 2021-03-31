const express = require("express");
const formRoute = require("./forms.route");

const router = express.Router();

const defaultRoutes = [
  {
    path: "/forms",
    route: formRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
