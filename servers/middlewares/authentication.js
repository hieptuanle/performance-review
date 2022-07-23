const { webwork } = require("../utils/webwork");

module.exports = async function (req, res, next) {
  try {
    const userId = req.headers["x-user-id"];
    if (!userId) return next();
    const response = await webwork.get("/users/" + userId);
    if (response.status === 200) {
      req.user = response.data;
      next();
    } else {
      res.status(response.status).json({
        message: response.data.message,
      });
    }
  } catch (err) {
    next(err);
  }
};
