export const forms = [
  {
    title: "Lê Tuấn Hiệp",
    type: "Tự đánh giá",
    position: "Legal",
    status: "pending",
    deadline: "2021-04-10",
    slug: "le-tuan-hiep",
  },
  {
    title: "Chu Huy Thắng",
    type: "Đồng nghiệp (Cùng bộ phận)",
    position: "Tech Lead",
    status: "pending",
    deadline: "2021-04-10",
    slug: "chu-huy-thang",
  },
  {
    title: "Trần Phương Anh",
    type: "Đồng nghiệp (Khác bộ phận)",
    position: "Quản lý kho",
    status: "pending",
    deadline: "2021-04-10",
    slug: "tran-phuong-anh",
  },
];

export const questions = [
  {
    positions: ["Tech Lead", "Quản lý kho"],
    content: "Phản hồi nhanh khi được hỏi?",
    group: "Attitue",
    layout: "Scale",
    types: [
      "Tự đánh giá",
      "Đồng nghiệp (Cùng bộ phận)",
      "Đồng nghiệp (Khác bộ phận)",
    ],
  },
  {
    positions: ["Legal"],
    content: "Chăm chỉ và cố gắng?",
    group: "Attitue",
    layout: "Scale",
    types: [
      "Tự đánh giá",
      "Đồng nghiệp (Cùng bộ phận)",
      "Đồng nghiệp (Khác bộ phận)",
    ],
  },
  {
    positions: ["Legal", "Tech Lead", "Quản lý kho"],
    content: "Có tinh thần chịu trách nhiệm khi mắc lỗi?",
    group: "Attitue",
    layout: "Scale",
    types: [
      "Tự đánh giá",
      "Đồng nghiệp (Cùng bộ phận)",
      "Đồng nghiệp (Khác bộ phận)",
    ],
  },
  {
    positions: ["Quản lý kho"],
    content: "Khả năng đồng cảm?",
    group: "Attitue",
    layout: "Scale",
    types: [
      "Tự đánh giá",
      "Đồng nghiệp (Cùng bộ phận)",
      "Đồng nghiệp (Khác bộ phận)",
    ],
  },
  {
    positions: ["Legal", "Tech Lead", "Quản lý kho"],
    content: "Kĩ năng tin học văn phòng?",
    group: "Skill",
    layout: "Text",
    types: [
      "Tự đánh giá",
      "Đồng nghiệp (Cùng bộ phận)",
      "Đồng nghiệp (Khác bộ phận)",
    ],
  },
  {
    positions: ["Legal"],
    content: "Hiểu biết về luật?",
    group: "Knowledge",
    layout: "Text",
    types: [
      "Tự đánh giá",
      "Đồng nghiệp (Cùng bộ phận)",
      "Đồng nghiệp (Khác bộ phận)",
    ],
  },
  {
    positions: ["Tech Lead"],
    content: "Hiểu biết Tech?",
    group: "Knowledge",
    layout: "Text",
    types: [
      "Tự đánh giá",
      "Đồng nghiệp (Cùng bộ phận)",
      "Đồng nghiệp (Khác bộ phận)",
    ],
  },
  {
    positions: ["Quản lý kho"],
    content: "Hiểu biết kho?",
    group: "Knowledge",
    layout: "Text",
    types: [
      "Tự đánh giá",
      "Đồng nghiệp (Cùng bộ phận)",
      "Đồng nghiệp (Khác bộ phận)",
    ],
  },
];
