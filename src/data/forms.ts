import _ from "lodash";

export const forms = [
  {
    code: "D5093",
    displayName: "Nguyễn Kim Hưng",
    email: "ngungsuong.nkh97@gmail.com",
    position: "Nhân viên mua hàng Full-time",
    isManager: "x",
    department: "KHO",
    managerName: "Dương Thị Nhung",
    managerCode: "D327",
    reviewerName1: "Nguyễn Đình Kháng",
    reviewerCode1: "D11054",
    reviewerName2: "Đàm Dĩnh Thanh",
    reviewerCode2: "D7886",
    reviewerName3: "Nguyễn Thị Thương",
    reviewerCode3: "D5762",
    reviewerName4: "Bùi Thu Trang",
    reviewerCode4: "C635",
    reviewerName5: "Nguyễn Huyền Trang",
    reviewerCode5: "D703",
  },
  {
    code: "D4553",
    displayName: "Nguyễn Minh Hùng",
    email: "ngminhhung1102@gmail.com",
    position: "Nhân viên Kiểm toán nội bộ",
    isManager: "x",
    department: "KIEMTOAN",
    managerName: "Dương Thị Nhung",
    managerCode: "D327",
    reviewerName1: "Đào Duy Bách",
    reviewerCode1: "D10144",
    reviewerName2: "Bùi Thị Hương",
    reviewerCode2: "S78",
    reviewerName3: "Trương Thị Trà Giang",
    reviewerCode3: "D11150",
    reviewerName4: "Nguyễn Đắc Dũng",
    reviewerCode4: "D5939",
    reviewerName5: "Nguyễn Minh Ngọc",
    reviewerCode5: "D11115",
  },
  {
    code: "S78",
    displayName: "Bùi Thị Hương",
    email: "buihuong17101997@gmail.com",
    position: "Nhân viên kiểm toán nội bộ",
    isManager: "",
    department: "KIEMTOAN",
    managerName: "Dương Thị Nhung",
    managerCode: "D327",
    reviewerName1: "Dương Thị Nhung",
    reviewerCode1: "D327",
    reviewerName2: "Nguyễn Minh Hùng",
    reviewerCode2: "D4553",
    reviewerName3: "Bùi Thu Trang",
    reviewerCode3: "C635",
    reviewerName4: "",
    reviewerCode4: "",
    reviewerName5: "",
    reviewerCode5: "",
  },
  {
    code: "D7886",
    displayName: "Đàm Dĩnh Thanh",
    email: "damdinhthanh.97@gmail.com",
    position: "Nhân viên Giám sát Full-time",
    isManager: "x",
    department: "QC",
    managerName: "Dương Thị Nhung",
    managerCode: "D327",
    reviewerName1: "Đặng Kim Xuân",
    reviewerCode1: "D4086",
    reviewerName2: "Nguyễn Kim Hưng",
    reviewerCode2: "D5093",
    reviewerName3: "Nguyễn Huyền Trang",
    reviewerCode3: "D703",
    reviewerName4: "",
    reviewerCode4: "",
    reviewerName5: "",
    reviewerCode5: "",
  },
  {
    code: "D11489",
    displayName: "Bùi Thế Anh",
    email: "theanh1503.nhathan@gmail.com",
    position: "Giám sát chất lượng vận hành Fulltime",
    isManager: "",
    department: "QC",
    managerName: "Dương Thị Nhung",
    managerCode: "D327",
    reviewerName1: "Trương Thị Trà Giang",
    reviewerCode1: "D11150",
    reviewerName2: "Bùi Thu Trang",
    reviewerCode2: "C635",
    reviewerName3: "Vũ Trường Sơn",
    reviewerCode3: "D6100",
    reviewerName4: "Nguyễn Hữu Long",
    reviewerCode4: "S41",
    reviewerName5: "Dương Thị Nhung",
    reviewerCode5: "D327",
  },
  {
    code: "D1931",
    displayName: "Lê Thị Chi",
    email: "lethuychi01092001@gmail.com",
    position: "Giám sát chất lượng vận hành Full-time",
    isManager: "",
    department: "QC",
    managerName: "Dương Thị Nhung",
    managerCode: "D327",
    reviewerName1: "Nguyễn Đình Kháng",
    reviewerCode1: "D11054",
    reviewerName2: "Trương Thị Trà Giang",
    reviewerCode2: "D11150",
    reviewerName3: "Bùi Thế Anh",
    reviewerCode3: "D11489",
    reviewerName4: "Bùi Thu Trang",
    reviewerCode4: "C635",
    reviewerName5: "Vũ Trường Sơn",
    reviewerCode5: "D6100",
  },
  {
    code: "D11115",
    displayName: "Nguyễn Minh Ngọc",
    email: "minggngoc1305@gmail.com",
    position: "Kế toán nội bộ Full - time",
    isManager: "",
    department: "KT",
    managerName: "Lê Tuấn Hiệp",
    managerCode: "F432",
    reviewerName1: "Nguyễn Đắc Dũng",
    reviewerCode1: "D5939",
    reviewerName2: "Đỗ Mai Khuyên",
    reviewerCode2: "D6537",
    reviewerName3: "Nguyễn Minh Hùng",
    reviewerCode3: "D4553",
    reviewerName4: "Chu Huy Thắng",
    reviewerCode4: "E09",
    reviewerName5: "Giang Hương Ly",
    reviewerCode5: "D3267",
  },
  {
    code: "D5939",
    displayName: "Nguyễn Đắc Dũng",
    email: "dungdark97@gmail.com",
    position: "Nhân viên Kế toán Tổng hợp Full-time",
    isManager: "x",
    department: "KT",
    managerName: "Lê Tuấn Hiệp",
    managerCode: "F432",
    reviewerName1: "Đỗ Mai Khuyên",
    reviewerCode1: "D6537",
    reviewerName2: "Nguyễn Minh Ngọc",
    reviewerCode2: "D11115",
    reviewerName3: "Nguyễn Minh Hùng",
    reviewerCode3: "D4553",
    reviewerName4: "Đinh Phương Thảo",
    reviewerCode4: "D708",
    reviewerName5: "",
    reviewerCode5: "",
  },
  {
    code: "D6537",
    displayName: "Đỗ Mai Khuyên",
    email: "khuyendo21@gmail.com",
    position: "Kế toán nội bộ Full - time",
    isManager: "",
    department: "KT",
    managerName: "Lê Tuấn Hiệp",
    managerCode: "F432",
    reviewerName1: "Nguyễn Đắc Dũng",
    reviewerCode1: "D5939",
    reviewerName2: "Nguyễn Minh Ngọc",
    reviewerCode2: "D11115",
    reviewerName3: "Nguyễn Đình Kháng",
    reviewerCode3: "D11054",
    reviewerName4: "Lò Thị Khánh Lâm",
    reviewerCode4: "D5841",
    reviewerName5: "",
    reviewerCode5: "",
  },
  {
    code: "D703",
    displayName: "Nguyễn Huyền Trang",
    email: "blackpage60@gmail.com",
    position: "Nhân viên hành chính pháp lý Full-time",
    isManager: "",
    department: "LEGAL",
    managerName: "Lê Tuấn Hiệp",
    managerCode: "F432",
    reviewerName1: "Trương Thị Trà Giang",
    reviewerCode1: "D11150",
    reviewerName2: "Nguyễn Đình Kháng",
    reviewerCode2: "D11054",
    reviewerName3: "Doãn Thị Ngọc Ánh",
    reviewerCode3: "D7287",
    reviewerName4: "Lý Trung Hậu",
    reviewerCode4: "D8013",
    reviewerName5: "",
    reviewerCode5: "",
  },
  {
    code: "D3267",
    displayName: "Giang Hương Ly",
    email: "gianghuongly01@gmail.com",
    position: "TLQL Marketing",
    isManager: "x",
    department: "MKT",
    managerName: "Lê Tuấn Hiệp",
    managerCode: "F432",
    reviewerName1: "Nguyễn Thế Anh",
    reviewerCode1: "D583",
    reviewerName2: "Đinh Phương Thảo",
    reviewerCode2: "D708",
    reviewerName3: "Lý Trung Hậu",
    reviewerCode3: "D8013",
    reviewerName4: "Nguyễn Văn Cương",
    reviewerCode4: "D4309",
    reviewerName5: "",
    reviewerCode5: "",
  },
  {
    code: "E09",
    displayName: "Chu Huy Thắng",
    email: "chuthang205@gmail.com",
    position: "Programming",
    isManager: "x",
    department: "TECH",
    managerName: "Lê Tuấn Hiệp",
    managerCode: "F432",
    reviewerName1: "Nguyễn Minh Ngọc",
    reviewerCode1: "D11115",
    reviewerName2: "Đinh Phương Thảo",
    reviewerCode2: "D708",
    reviewerName3: "Nguyễn Văn Cương",
    reviewerCode3: "D4309",
    reviewerName4: "Nguyễn Huyền Trang",
    reviewerCode4: "D703",
    reviewerName5: "Bùi Thị Hương",
    reviewerCode5: "S78",
  },
  {
    code: "D708",
    displayName: "Đinh Phương Thảo",
    email: "dinhphuongthaoqia@gmail.com",
    position: "Developer Full-time",
    isManager: "",
    department: "TECH",
    managerName: "Lê Tuấn Hiệp",
    managerCode: "F432",
    reviewerName1: "Nguyễn Đắc Dũng",
    reviewerCode1: "D5939",
    reviewerName2: "Đỗ Mai Khuyên",
    reviewerCode2: "D6537",
    reviewerName3: "Nguyễn Minh Ngọc",
    reviewerCode3: "D11115",
    reviewerName4: "Nguyễn Văn Việt",
    reviewerCode4: "S110",
    reviewerName5: "Giang Hương Ly",
    reviewerCode5: "D3267",
  },
  {
    code: "D8013",
    displayName: "Lý Trung Hậu",
    email: "trungghau0310@gmail.com",
    position: "Nhân viên Chính sách nhân sự Full-time",
    isManager: "",
    department: "CB",
    managerName: "Trần Anh Dũng",
    managerCode: "F688",
    reviewerName1: "Nguyễn Thị Mỹ Linh",
    reviewerCode1: "D79",
    reviewerName2: "Dương Văn Vững",
    reviewerCode2: "D7954",
    reviewerName3: "Doãn Thị Ngọc Ánh",
    reviewerCode3: "D7287",
    reviewerName4: "Nguyễn Huyền Trang",
    reviewerCode4: "D703",
    reviewerName5: "Nguyễn Thị Thương",
    reviewerCode5: "D5762",
  },
  {
    code: "D1906",
    displayName: "Nguyễn Quang Bình",
    email: "quangbinhvx201@gmail.com",
    position: "Nhân viên CSKH & Training Full-time",
    isManager: "",
    department: "CSKH",
    managerName: "Trần Anh Dũng",
    managerCode: "F688",
    reviewerName1: "Nguyễn Thị Mỹ Linh",
    reviewerCode1: "D79",
    reviewerName2: "Giang Hương Ly",
    reviewerCode2: "D3267",
    reviewerName3: "Lê Thị Chi",
    reviewerCode3: "D1931",
    reviewerName4: "",
    reviewerCode4: "",
    reviewerName5: "",
    reviewerCode5: "",
  },
  {
    code: "E73",
    displayName: "Nguyễn Anh Tú",
    email: "anhtuas123@gmail.com",
    position: "Giám sát Hậu cần Full-time",
    isManager: "x",
    department: "HC",
    managerName: "Trần Anh Dũng",
    managerCode: "F688",
    reviewerName1: "Nguyễn Văn Thao",
    reviewerCode1: "D2537",
    reviewerName2: "Phạm Văn Quế",
    reviewerCode2: "D11359",
    reviewerName3: "Trương Thị Trà Giang",
    reviewerCode3: "D11150",
    reviewerName4: "",
    reviewerCode4: "",
    reviewerName5: "",
    reviewerCode5: "",
  },
  {
    code: "D2537",
    displayName: "Nguyễn Văn Thao",
    email: "ngocthao060690@gmail.com",
    position: "Nhân viên Hậu cần Full-time",
    isManager: "",
    department: "HC",
    managerName: "Trần Anh Dũng",
    managerCode: "F688",
    reviewerName1: "Nguyễn Anh Tú",
    reviewerCode1: "E73",
    reviewerName2: "Phạm Văn Quế",
    reviewerCode2: "D11359",
    reviewerName3: "Trương Thị Trà Giang",
    reviewerCode3: "D11150",
    reviewerName4: "",
    reviewerCode4: "",
    reviewerName5: "",
    reviewerCode5: "",
  },
  {
    code: "D11359",
    displayName: "Phạm Văn Quế",
    email: "Phamque8386@gmail.com",
    position: "Nhân viên Kỹ thuật điện nước Full-time",
    isManager: "",
    department: "HC",
    managerName: "Trần Anh Dũng",
    managerCode: "F688",
    reviewerName1: "Nguyễn Anh Tú",
    reviewerCode1: "E73",
    reviewerName2: "Nguyễn Văn Thao",
    reviewerCode2: "D2537",
    reviewerName3: "Trương Thị Trà Giang",
    reviewerCode3: "D11150",
    reviewerName4: "Ngô Thị Huyền",
    reviewerCode4: "D931",
    reviewerName5: "",
    reviewerCode5: "",
  },
  {
    code: "D7954",
    displayName: "Dương Văn Vững",
    email: "duongvung1003@gmail.com",
    position: "HR1, Digital Advertising",
    isManager: "x",
    department: "HR1",
    managerName: "Trần Anh Dũng",
    managerCode: "F688",
    reviewerName1: "Doãn Thị Ngọc Ánh",
    reviewerCode1: "D7287",
    reviewerName2: "Lý Trung Hậu",
    reviewerCode2: "D8013",
    reviewerName3: "Nguyễn Huyền Trang",
    reviewerCode3: "D703",
    reviewerName4: "Nguyễn Văn Cương",
    reviewerCode4: "D4309",
    reviewerName5: "Đinh Phương Thảo",
    reviewerCode5: "D708",
  },
  {
    code: "D7287",
    displayName: "Doãn Thị Ngọc Ánh",
    email: "doanthingocanh1605@gmail.com",
    position: "Quản lý Tuyển dụng",
    isManager: "x",
    department: "HR2",
    managerName: "Trần Anh Dũng",
    managerCode: "F688",
    reviewerName1: "Dương Văn Vững",
    reviewerCode1: "D7954",
    reviewerName2: "Nguyễn Minh Ngọc",
    reviewerCode2: "D11115",
    reviewerName3: "Nguyễn Minh Hùng",
    reviewerCode3: "D4553",
    reviewerName4: "Đỗ Mai Khuyên",
    reviewerCode4: "D6537",
    reviewerName5: "Nguyễn Đắc Dũng",
    reviewerCode5: "D5939",
  },
  {
    code: "C997",
    displayName: "Nguyễn Thị Nguyên",
    email: "nguyenthinguen0204@gmail.com",
    position: "Nhân viên kinh doanh Full - time",
    isManager: "",
    department: "Sale",
    managerName: "Trần Anh Dũng",
    managerCode: "F688",
    reviewerName1: "Nguyễn Minh Hùng",
    reviewerCode1: "D4553",
    reviewerName2: "Bùi Thị Hương",
    reviewerCode2: "S78",
    reviewerName3: "Nguyễn Đắc Dũng",
    reviewerCode3: "D5939",
    reviewerName4: "Nguyễn Minh Ngọc",
    reviewerCode4: "D11115",
    reviewerName5: "Trương Thị Trà Giang",
    reviewerCode5: "D11150",
  },
  {
    code: "D79",
    displayName: "Nguyễn Thị Mỹ Linh",
    email: "linhxu271196@gmail.com",
    position: "Training Executive, TTL",
    isManager: "x",
    department: "Training",
    managerName: "Trần Anh Dũng",
    managerCode: "F688",
    reviewerName1: "Nguyễn Thúy Vi",
    reviewerCode1: "D93",
    reviewerName2: "Nguyễn Minh Ngọc",
    reviewerCode2: "D479",
    reviewerName3: "Nguyễn Quang Bình",
    reviewerCode3: "D1906",
    reviewerName4: "Nguyễn Minh Ngọc",
    reviewerCode4: "D11115",
    reviewerName5: "Vũ Thúy Nhật",
    reviewerCode5: "D717",
  },
  {
    code: "D479",
    displayName: "Nguyễn Minh Ngọc",
    email: "hastagminhngoc@gmail.com",
    position: "Nhân viên Đào tạo Full-time",
    isManager: "",
    department: "Training",
    managerName: "Trần Anh Dũng",
    managerCode: "F688",
    reviewerName1: "Nguyễn Thị Mỹ Linh",
    reviewerCode1: "D79",
    reviewerName2: "Vũ Trường Sơn",
    reviewerCode2: "D6100",
    reviewerName3: "Bùi Thu Trang",
    reviewerCode3: "C635",
    reviewerName4: "Trương Thị Trà Giang",
    reviewerCode4: "D11150",
    reviewerName5: "Vũ Thị Lành",
    reviewerCode5: "D557",
  },
  {
    code: "D93",
    displayName: "Nguyễn Thúy Vi",
    email: "thuyvi11196@gmail.com",
    position: "Training Executive, TTL",
    isManager: "",
    department: "Training",
    managerName: "Trần Anh Dũng",
    managerCode: "F688",
    reviewerName1: "Nguyễn Thị Mỹ Linh",
    reviewerCode1: "D79",
    reviewerName2: "Giang Hương Ly",
    reviewerCode2: "D3267",
    reviewerName3: "Nguyễn Thành Nam",
    reviewerCode3: "D337",
    reviewerName4: "Đỗ Mai Khuyên",
    reviewerCode4: "D6537",
    reviewerName5: "Doãn Thị Ngọc Ánh",
    reviewerCode5: "D7287",
  },
  {
    code: "D1969",
    displayName: "Trần Hương Mai",
    email: "huongmai04112000@gmail.com",
    position: "Quản lý Cơ sở Full-time",
    isManager: "x",
    department: "QLCS",
    managerName: "Nguyễn Thị Mỹ Linh",
    managerCode: "D79",
    reviewerName1: "Đào Duy Bách",
    reviewerCode1: "D10144",
    reviewerName2: "Nguyễn Thị Thương",
    reviewerCode2: "D5762",
    reviewerName3: "Nguyễn Minh Ngọc",
    reviewerCode3: "D11115",
    reviewerName4: "Lý Trung Hậu",
    reviewerCode4: "D8013",
    reviewerName5: "Trương Thị Trà Giang",
    reviewerCode5: "D11150",
  },
  {
    code: "D7395",
    displayName: "Dương Thị Trang",
    email: "trangduong11899@gmail.com",
    position: "Quản lý Cơ sở Full-time",
    isManager: "x",
    department: "QLCS",
    managerName: "Nguyễn Thị Mỹ Linh",
    managerCode: "D79",
    reviewerName1: "Vương Cẩm Tú",
    reviewerCode1: "D8492",
    reviewerName2: "Nguyễn Thành Nam",
    reviewerCode2: "D337",
    reviewerName3: "Đào Duy Bách",
    reviewerCode3: "D10144",
    reviewerName4: "Vũ Thị Linh Chi",
    reviewerCode4: "D5169",
    reviewerName5: "",
    reviewerCode5: "",
  },
  {
    code: "D931",
    displayName: "Ngô Thị Huyền",
    email: "huyennt66@wru.vn",
    position: "Quản lý Cơ sở Full-time",
    isManager: "x",
    department: "QLCS",
    managerName: "Nguyễn Thị Mỹ Linh",
    managerCode: "D79",
    reviewerName1: "Nguyễn Thị Thương",
    reviewerCode1: "D5762",
    reviewerName2: "Nguyễn Kim Hưng",
    reviewerCode2: "D5093",
    reviewerName3: "Nguyễn Quang Bình",
    reviewerCode3: "D1906",
    reviewerName4: "Đào Duy Bách",
    reviewerCode4: "D10144",
    reviewerName5: "Phạm Văn Quế",
    reviewerCode5: "D11359",
  },
  {
    code: "D4086",
    displayName: "Đặng Kim Xuân",
    email: "kimxuandang0504@gmail.com",
    position: "Quản lý Cơ sở Full-time",
    isManager: "x",
    department: "QLCS",
    managerName: "Nguyễn Thị Mỹ Linh",
    managerCode: "D79",
    reviewerName1: "Đàm Dĩnh Thanh",
    reviewerCode1: "D7886",
    reviewerName2: "Đào Duy Bách",
    reviewerCode2: "D10144",
    reviewerName3: "Doãn Thị Ngọc Ánh",
    reviewerCode3: "D7287",
    reviewerName4: "",
    reviewerCode4: "",
    reviewerName5: "",
    reviewerCode5: "",
  },
  {
    code: "C635",
    displayName: "Bùi Thu Trang",
    email: "trytowin1003@gmail.com",
    position: "Quản lý đóng gói Full-time",
    isManager: "x",
    department: "ĐG",
    managerName: "Trần Phương Anh",
    managerCode: "D388",
    reviewerName1: "Trương Thị Trà Giang",
    reviewerCode1: "D11150",
    reviewerName2: "Nguyễn Hữu Long",
    reviewerCode2: "S41",
    reviewerName3: "Vũ Trường Sơn",
    reviewerCode3: "D6100",
    reviewerName4: "Bùi Thị Hương",
    reviewerCode4: "S78",
    reviewerName5: "Nguyễn Đình Kháng",
    reviewerCode5: "D11054",
  },
  {
    code: "D6100",
    displayName: "Vũ Trường Sơn",
    email: "vutruongson999@gmail.com",
    position: "Trợ lý - quản lý Fulltime Kho D5",
    isManager: "x",
    department: "KHO",
    managerName: "Trần Phương Anh",
    managerCode: "D388",
    reviewerName1: "Nguyễn Hữu Long",
    reviewerCode1: "S41",
    reviewerName2: "Lò Thị Khánh Lâm",
    reviewerCode2: "D5841",
    reviewerName3: "Nguyễn Đình Kháng",
    reviewerCode3: "D11054",
    reviewerName4: "Bùi Thế Anh",
    reviewerCode4: "D11489",
    reviewerName5: "Vũ Thị Linh Chi",
    reviewerCode5: "D5169",
  },
  {
    code: "D11150",
    displayName: "Trương Thị Trà Giang",
    email: "giangtruong2501@gmail.com",
    position: "Quản lý Kho Full - time",
    isManager: "x",
    department: "KHO",
    managerName: "Trần Phương Anh",
    managerCode: "D388",
    reviewerName1: "Bùi Thế Anh",
    reviewerCode1: "D11489",
    reviewerName2: "Vương Cẩm Tú",
    reviewerCode2: "D8492",
    reviewerName3: "Bùi Thu Trang",
    reviewerCode3: "C635",
    reviewerName4: "Nguyễn Thị Nguyên",
    reviewerCode4: "C997",
    reviewerName5: "Vũ Thị Linh Chi",
    reviewerCode5: "D5169",
  },
  {
    code: "S41",
    displayName: "Nguyễn Hữu Long",
    email: "nhlong2107@gmail.com",
    position: "Quản lý Kho Full-time",
    isManager: "x",
    department: "KHO",
    managerName: "Trần Phương Anh",
    managerCode: "D388",
    reviewerName1: "Trương Thị Trà Giang",
    reviewerCode1: "D11150",
    reviewerName2: "Bùi Thu Trang",
    reviewerCode2: "C635",
    reviewerName3: "Vũ Trường Sơn",
    reviewerCode3: "D6100",
    reviewerName4: "Nguyễn Minh Hùng",
    reviewerCode4: "D4553",
    reviewerName5: "Lò Thị Khánh Lâm",
    reviewerCode5: "D5841",
  },
  {
    code: "D4309",
    displayName: "Nguyễn Văn Cương",
    email: "cuongnv.1512@gmail.com",
    position: "Data Analyst",
    isManager: "",
    department: "BS",
    managerName: "Vy Tuấn Anh",
    managerCode: "F262",
    reviewerName1: "Vương Cẩm Tú",
    reviewerCode1: "D8492",
    reviewerName2: "Nguyễn Đình Kháng",
    reviewerCode2: "D11054",
    reviewerName3: "Lò Thị Khánh Lâm",
    reviewerCode3: "D5841",
    reviewerName4: "Dương Văn Vững",
    reviewerCode4: "D7954",
    reviewerName5: "Nguyễn Thị Duyên",
    reviewerCode5: "D3962",
  },
  {
    code: "S110",
    displayName: "Nguyễn Văn Việt",
    email: "vietxc2014@gmail.com",
    position: "Graphic Designer, TTL",
    isManager: "",
    department: "MEDIA",
    managerName: "Vy Tuấn Anh",
    managerCode: "F262",
    reviewerName1: "Đinh Phương Thảo",
    reviewerCode1: "D708",
    reviewerName2: "Nguyễn Thành Nam",
    reviewerCode2: "D337",
    reviewerName3: "Nguyễn Thế Anh",
    reviewerCode3: "D583",
    reviewerName4: "Giang Hương Ly",
    reviewerCode4: "D3267",
    reviewerName5: "Nguyễn Văn Cương",
    reviewerCode5: "D4309",
  },
  {
    code: "D11054",
    displayName: "Nguyễn Đình Kháng",
    email: "dinhkhang2002cr@gmail.com",
    position: "Nhân viên mua hàng Full-time",
    isManager: "",
    department: "Purchasing",
    managerName: "Vy Tuấn Anh",
    managerCode: "F262",
    reviewerName1: "Đỗ Mai Khuyên",
    reviewerCode1: "D6537",
    reviewerName2: "Lò Thị Khánh Lâm",
    reviewerCode2: "D5841",
    reviewerName3: "Nguyễn Văn Việt",
    reviewerCode3: "S110",
    reviewerName4: "Vũ Thị Linh Chi",
    reviewerCode4: "D5169",
    reviewerName5: "",
    reviewerCode5: "",
  },
  {
    code: "D5841",
    displayName: "Lò Thị Khánh Lâm",
    email: "khanhlam3108@gmail.com",
    position: "Nhân viên mua hàng Full-time",
    isManager: "",
    department: "Purchasing",
    managerName: "Vy Tuấn Anh",
    managerCode: "F262",
    reviewerName1: "Nguyễn Đình Kháng",
    reviewerCode1: "D11054",
    reviewerName2: "Vương Cẩm Tú",
    reviewerCode2: "D8492",
    reviewerName3: "Mai Thị Hiếu",
    reviewerCode3: "D9644",
    reviewerName4: "Nguyễn Diệu An",
    reviewerCode4: "D12616",
    reviewerName5: "Vũ Thị Linh Chi",
    reviewerCode5: "D5169",
  },
  {
    code: "D583",
    displayName: "Nguyễn Thế Anh",
    email: "theanh2726@gmail.com",
    position: "Nhân viên R&D Full-time",
    isManager: "",
    department: "R&D",
    managerName: "Vy Tuấn Anh",
    managerCode: "F262",
    reviewerName1: "Nguyễn Thành Nam",
    reviewerCode1: "D583",
    reviewerName2: "Nguyễn Văn Việt",
    reviewerCode2: "S110",
    reviewerName3: "Nguyễn Minh Ngọc",
    reviewerCode3: "D479",
    reviewerName4: "Vũ Thị Lành",
    reviewerCode4: "D557",
    reviewerName5: "",
    reviewerCode5: "",
  },
  {
    code: "D337",
    displayName: "Nguyễn Thành Nam",
    email: "thanhnam06121997@gmail.com",
    position: "Kitchen Manager, Training Executive, TTL",
    isManager: "",
    department: "R&D",
    managerName: "Vy Tuấn Anh",
    managerCode: "F262",
    reviewerName1: "Nguyễn Thế Anh",
    reviewerCode1: "D583",
    reviewerName2: "Nguyễn Đình Kháng",
    reviewerCode2: "D11054",
    reviewerName3: "Lò Thị Khánh Lâm",
    reviewerCode3: "D5841",
    reviewerName4: "Nguyễn Văn Việt",
    reviewerCode4: "S110",
    reviewerName5: "",
    reviewerCode5: "",
  },
];

export const managers = _.map(
  _.reduce<any, any>(
    forms,
    (result, form) => {
      if (form.managerCode) {
        result[form.managerCode] = result[form.managerCode] || {
          code: form.managerCode,
          displayName: form.managerName,
          reviewees: [],
        };
        result[form.managerCode].reviewees.push(form);
      }
      return result;
    },
    {}
  )
);
