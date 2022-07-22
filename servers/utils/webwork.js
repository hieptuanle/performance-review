const axios = require("axios");

const webwork = axios.create({
  baseURL: "https://work.4-handy.com/",
  timeout: 1000,
  headers: { "X-Access-Token": process.env.WEB_WORK_ACCESS_TOKEN },
});

exports.webwork = webwork;
