const express = require("express");
const helmet = require("helmet");
const xss = require("xss-clean");
const mongoSanitize = require("express-mongo-sanitize");
const compression = require("compression");
const cors = require("cors");
const httpStatus = require("http-status");
const path = require("path");

const config = require("./config/config");
const morgan = require("./config/morgan");
const routes = require("./routes/v1");
const ApiError = require("./utils/ApiError");

const app = express();

if (config.env !== "test") {
  app.use(morgan.successHandler);
  app.use(morgan.errorHandler);
}

// set security HTTP headers
app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// sanitize request data
app.use(xss());
app.use(mongoSanitize());

// gzip compression
app.use(compression());

// enable cors
app.use(cors());
app.options("*", cors());

// authentication
app.use(require("./middlewares/authentication"));

// v1 api routes
app.use("/v1", routes);

app.use(express.static(path.join(__dirname, "../build")));

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "../build", "index.html"));
});

// send back a 404 error for any unknown api request
app.use((req, res, next) => {
  next(new ApiError(httpStatus.NOT_FOUND, "Not found"));
});

app.use((err, req, res, next) => {
  res.status(500).json({
    message: err.message,
    err,
  });
});

module.exports = app;
