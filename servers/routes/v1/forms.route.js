const express = require("express");

const router = express.Router();

router.route("/").get((req, res) => {
  res.jsonp([
    {
      title: "Lê Tuấn Hiệp",
      type: "Tự đánh giá",
      position: "Legal",
      status: "pending",
      deadline: "2021-04-10",
      slug: "le-tuan-hiep",
      email: "hieptuanle@gmail.com",
    },
    {
      title: "Chu Huy Thắng",
      type: "Đồng nghiệp (Cùng bộ phận)",
      position: "Tech Lead",
      status: "pending",
      deadline: "2021-04-10",
      slug: "chu-huy-thang",
      email: "chuthang205@gmail.com",
    },
    {
      title: "Trần Phương Anh",
      type: "Đồng nghiệp (Khác bộ phận)",
      position: "Quản lý kho",
      status: "pending",
      deadline: "2021-04-10",
      slug: "tran-phuong-anh",
      email: "tpa2498@gmail.com	",
    },
    {
      title: "Trần Phương Anh",
      type: "Bộ phận",
      position: "Quản lý kho",
      status: "pending",
      deadline: "2021-04-10",
      slug: "tran-phuong-anh",
      email: "tpa2498@gmail.com	",
    },
  ]);
});

module.exports = router;
