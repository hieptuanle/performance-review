const _ = require("lodash");

const forms = [
  {
    code: "S78",
    displayName: "Bùi Thị Hương",
    department: "KIEMTOAN",
    managerName: "Dương Thị Nhung",
    reviewerCode1: "D4553",
    reviewerName1: "Nguyễn Minh Hùng",
    reviewerCode2: "C635",
    reviewerName2: "Bùi Thu Trang",
    reviewerCode3: "D10144",
    reviewerName3: "Đào Duy Bách",
    reviewerCode4: "D2010",
    reviewerName4: "Đỗ Ngọc Cương",
    reviewerCode5: "D1039",
    reviewerName5: "Nguyễn Thị Thu Trang",
    email: "buihuong17101997@gmail.com",
    position: "Nhân viên kiểm toán nội bộ",
  },
  {
    code: "D10144",
    displayName: "Đào Duy Bách",
    department: "KIEMTOAN",
    managerName: "Dương Thị Nhung",
    reviewerCode1: "D5093",
    reviewerName1: "Nguyễn Kim Hưng",
    reviewerCode2: "S78",
    reviewerName2: "Bùi Thị Hương",
    reviewerCode3: "D8782",
    reviewerName3: "Lê Đỗ Phúc Vinh",
    reviewerCode4: "D11150",
    reviewerName4: "Trương Thị Trà Giang",
    reviewerCode5: "S41",
    reviewerName5: "Nguyễn Hữu Long",
    email: "daoduybach.work@gmail.com",
    position: "Nhân viên Kiểm toán Full-time",
  },
  {
    code: "D4553",
    displayName: "Nguyễn Minh Hùng",
    department: "KIEMTOAN",
    managerName: "Dương Thị Nhung",
    reviewerCode1: "D5939",
    reviewerName1: "Nguyễn Đắc Dũng",
    reviewerCode2: "D1039",
    reviewerName2: "Nguyễn Thị Thu Trang",
    reviewerCode3: "C635",
    reviewerName3: "Bùi Thu Trang",
    reviewerCode4: "S78",
    reviewerName4: "Bùi Thị Hương",
    reviewerCode5: "D717",
    reviewerName5: "Vũ Thúy Nhật",
    email: "ngminhhung1102@gmail.com",
    position: "Nhân viên Kiểm toán nội bộ",
  },
  {
    code: "D9644",
    displayName: "Mai Thị Hiếu",
    department: "LOGISTICS",
    managerName: "Dương Thị Nhung",
    reviewerCode1: "D1931",
    reviewerName1: "Lê Thị Chi",
    reviewerCode2: "D5841",
    reviewerName2: "Lò Thị Khánh Lâm",
    reviewerCode3: "D11054",
    reviewerName3: "Nguyễn Đình Kháng",
    reviewerCode4: "D11150",
    reviewerName4: "Trương Thị Trà Giang",
    reviewerCode5: "D9005",
    reviewerName5: "Phan Lê Công Đạt",
    email: "maihieulog2k2@gmail.com",
    position: "Nhân viên Logistic Full-time",
  },
  {
    code: "D11489",
    displayName: "Bùi Thế Anh",
    department: "QC",
    managerName: "Dương Thị Nhung",
    reviewerCode1: "D1931",
    reviewerName1: "Lê Thị Chi",
    reviewerCode2: "D11150",
    reviewerName2: "Trương Thị Trà Giang",
    reviewerCode3: "C635",
    reviewerName3: "Bùi Thu Trang",
    reviewerCode4: "D1039",
    reviewerName4: "Nguyễn Thị Thu Trang",
    reviewerCode5: "S41",
    reviewerName5: "Nguyễn Hữu Long",
    email: "theanh1503.nhathan@gmail.com",
    position: "Giám sát chất lượng vận hành Fulltime",
  },
  {
    code: "D1931",
    displayName: "Lê Thị Chi",
    department: "QC",
    managerName: "Dương Thị Nhung",
    reviewerCode1: "D1906",
    reviewerName1: "Nguyễn Quang Bình",
    reviewerCode2: "D9644",
    reviewerName2: "Mai Thị Hiếu",
    reviewerCode3: "D9005",
    reviewerName3: "Phan Lê Công Đạt",
    reviewerCode4: "D11054",
    reviewerName4: "Nguyễn Đình Kháng",
    reviewerCode5: "D11150",
    reviewerName5: "Trương Thị Trà Giang",
    email: "lethuychi01092001@gmail.com",
    position: "Giám sát chất lượng vận hành Full-time",
  },
  {
    code: "D5762",
    displayName: "Nguyễn Thị Thương",
    department: "VHKV",
    managerName: "Dương Thị Nhung",
    reviewerCode1: "D7395",
    reviewerName1: "Dương Thị Trang",
    reviewerCode2: "D1931",
    reviewerName2: "Lê Thị Chi",
    reviewerCode3: "S41",
    reviewerName3: "Nguyễn Hữu Long",
    reviewerCode4: "D4372",
    reviewerName4: "Trần Phương Mai",
    reviewerCode5: "D9477",
    reviewerName5: "Đặng Hoàng Anh",
    email: "thuongha1422@gmail.com",
    position: "Nhân viên giám sát chuỗi cửa hàng Full-time",
  },
  {
    code: "D717",
    displayName: "Vũ Thúy Nhật",
    department: "BA",
    managerName: "Lê Tuấn Hiệp",
    reviewerCode1: "D9644",
    reviewerName1: "Mai Thị Hiếu",
    reviewerCode2: "E09",
    reviewerName2: "Chu Huy Thắng",
    reviewerCode3: "D708",
    reviewerName3: "Đinh Phương Thảo",
    reviewerCode4: "D703",
    reviewerName4: "Nguyễn Huyền Trang",
    reviewerCode5: "D5939",
    reviewerName5: "Nguyễn Đắc Dũng",
    email: "v.thuynhatt@gmail.com",
    position: "Nhân viên BA",
  },
  {
    code: "D5939",
    displayName: "Nguyễn Đắc Dũng",
    department: "KT",
    managerName: "Lê Tuấn Hiệp",
    reviewerCode1: "D11115",
    reviewerName1: "Nguyễn Minh Ngọc",
    reviewerCode2: "D4553",
    reviewerName2: "Nguyễn Minh Hùng",
    reviewerCode3: "D708",
    reviewerName3: "Đinh Phương Thảo",
    reviewerCode4: "D12667",
    reviewerName4: "Nguyễn Vi Kỳ Duyên",
    reviewerCode5: "D11054",
    reviewerName5: "Nguyễn Đình Kháng",
    email: "dungdark97@gmail.com",
    position: "Nhân viên Kế toán Tổng hợp Full-time",
  },
  {
    code: "D11115",
    displayName: "Nguyễn Minh Ngọc",
    department: "KT",
    managerName: "Lê Tuấn Hiệp",
    reviewerCode1: "D5939",
    reviewerName1: "Nguyễn Đắc Dũng",
    reviewerCode2: "D1906",
    reviewerName2: "",
    reviewerCode3: "",
    reviewerName3: "",
    reviewerCode4: "",
    reviewerName4: "",
    reviewerCode5: "",
    reviewerName5: "",
    email: "",
    position: "",
  },
  {
    code: "",
    displayName: "Nguyễn Quang Bình",
    department: "D703",
    managerName: "Nguyễn Huyền Trang",
    reviewerCode1: "D11054",
    reviewerName1: "Nguyễn Đình Kháng",
    reviewerCode2: "D12667",
    reviewerName2: "Nguyễn Vi Kỳ Duyên",
    reviewerCode3: "minggngoc1305@gmail.com",
    reviewerName3: "Kế toán nội bộ Full - time",
    reviewerCode4: "",
    reviewerName4: "",
    reviewerCode5: "",
    reviewerName5: "",
    email: "",
    position: "",
  },
  {
    code: "D703",
    displayName: "Nguyễn Huyền Trang",
    department: "LEGAL",
    managerName: "Lê Tuấn Hiệp",
    reviewerCode1: "C635",
    reviewerName1: "Bùi Thu Trang",
    reviewerCode2: "D7287",
    reviewerName2: "Doãn Thị Ngọc Ánh",
    reviewerCode3: "D5939",
    reviewerName3: "Nguyễn Đắc Dũng",
    reviewerCode4: "D7954",
    reviewerName4: "Dương Văn Vững",
    reviewerCode5: "D11115",
    reviewerName5: "Nguyễn Minh Ngọc",
    email: "blackpage60@gmail.com",
    position: "Legal Executive",
  },
  {
    code: "E09",
    displayName: "Chu Huy Thắng",
    department: "TECH",
    managerName: "Lê Tuấn Hiệp",
    reviewerCode1: "D708",
    reviewerName1: "Đinh Phương Thảo",
    reviewerCode2: "D717",
    reviewerName2: "Vũ Thúy Nhật",
    reviewerCode3: "D1906",
    reviewerName3: "",
    reviewerCode4: "",
    reviewerName4: "",
    reviewerCode5: "",
    reviewerName5: "",
    email: "",
    position: "",
  },
  {
    code: "",
    displayName: "Nguyễn Quang Bình",
    department: "D4553",
    managerName: "Nguyễn Minh Hùng",
    reviewerCode1: "D9644",
    reviewerName1: "Mai Thị Hiếu",
    reviewerCode2: "chuthang205@gmail.com",
    reviewerName2: "Programming",
    reviewerCode3: "",
    reviewerName3: "",
    reviewerCode4: "",
    reviewerName4: "",
    reviewerCode5: "",
    reviewerName5: "",
    email: "",
    position: "",
  },
  {
    code: "D708",
    displayName: "Đinh Phương Thảo",
    department: "TECH",
    managerName: "Lê Tuấn Hiệp",
    reviewerCode1: "E09",
    reviewerName1: "Chu Huy Thắng",
    reviewerCode2: "D717",
    reviewerName2: "Vũ Thúy Nhật",
    reviewerCode3: "D1906",
    reviewerName3: "",
    reviewerCode4: "",
    reviewerName4: "",
    reviewerCode5: "",
    reviewerName5: "",
    email: "",
    position: "",
  },
  {
    code: "",
    displayName: "Nguyễn Quang Bình",
    department: "S110",
    managerName: "Nguyễn Văn Việt",
    reviewerCode1: "D10162",
    reviewerName1: "Nguyễn Thị Ngọc Anh",
    reviewerCode2: "dinhphuongthaoqia@gmail.com",
    reviewerName2: "Developer Full-time",
    reviewerCode3: "",
    reviewerName3: "",
    reviewerCode4: "",
    reviewerName4: "",
    reviewerCode5: "",
    reviewerName5: "",
    email: "",
    position: "",
  },
  {
    code: "D8013",
    displayName: "Lý Trung Hậu",
    department: "CB",
    managerName: "Trần Anh Dũng",
    reviewerCode1: "D703",
    reviewerName1: "Nguyễn Huyền Trang",
    reviewerCode2: "D9644",
    reviewerName2: "Mai Thị Hiếu",
    reviewerCode3: "D79",
    reviewerName3: "Nguyễn Thị Mỹ Linh",
    reviewerCode4: "D10447",
    reviewerName4: "Trần Mỹ Duyên",
    reviewerCode5: "D7954",
    reviewerName5: "Dương Văn Vững",
    email: "trungghau0310@gmail.com",
    position: "Nhân viên Chính sách nhân sự Full-time",
  },
  {
    code: "D1906",
    displayName: "Nguyễn Quang Bình",
    department: "CSKH",
    managerName: "Trần Anh Dũng",
    reviewerCode1: "D79",
    reviewerName1: "Nguyễn Thị Mỹ Linh",
    reviewerCode2: "D13206",
    reviewerName2: "Nguyễn Ngọc Anh Thư",
    reviewerCode3: "D1931",
    reviewerName3: "Lê Thị Chi",
    reviewerCode4: "D3267",
    reviewerName4: "Giang Hương Ly",
    reviewerCode5: "D12196",
    reviewerName5: "Phạm Thị Thanh Bình",
    email: "quangbinhvx201@gmail.com",
    position: "Nhân viên CSKH & Training Full-time",
  },
  {
    code: "D7954",
    displayName: "Dương Văn Vững",
    department: "HR1",
    managerName: "Trần Anh Dũng",
    reviewerCode1: "D7287",
    reviewerName1: "Doãn Thị Ngọc Ánh",
    reviewerCode2: "D79",
    reviewerName2: "Nguyễn Thị Mỹ Linh",
    reviewerCode3: "D93",
    reviewerName3: "Nguyễn Thúy Vi",
    reviewerCode4: "D479",
    reviewerName4: "Nguyễn Minh Ngọc",
    reviewerCode5: "D9315",
    reviewerName5: "Nguyễn Quỳnh Anh",
    email: "duongvung1003@gmail.com",
    position: "Quản lý Nhân sự",
  },
  {
    code: "D7287",
    displayName: "Doãn Thị Ngọc Ánh",
    department: "HR2",
    managerName: "Trần Anh Dũng",
    reviewerCode1: "D7954",
    reviewerName1: "Dương Văn Vững",
    reviewerCode2: "D79",
    reviewerName2: "Nguyễn Thị Mỹ Linh",
    reviewerCode3: "D10128",
    reviewerName3: "Nguyễn Hoàng Sao Mai",
    reviewerCode4: "D5093",
    reviewerName4: "Nguyễn Kim Hưng",
    reviewerCode5: "D1039",
    reviewerName5: "Nguyễn Thị Thu Trang",
    email: "doanthingocanh1605@gmail.com",
    position: "Quản lý Tuyển dụng",
  },
  {
    code: "D3267",
    displayName: "Giang Hương Ly",
    department: "MKT",
    managerName: "Trần Anh Dũng",
    reviewerCode1: "D14570",
    reviewerName1: "Nguyễn Duy Anh",
    reviewerCode2: "D583",
    reviewerName2: "Nguyễn Thế Anh",
    reviewerCode3: "D1906",
    reviewerName3: "",
    reviewerCode4: "",
    reviewerName4: "",
    reviewerCode5: "",
    reviewerName5: "",
    email: "",
    position: "",
  },
  {
    code: "",
    displayName: "Nguyễn Quang Bình",
    department: "D11054",
    managerName: "Nguyễn Đình Kháng",
    reviewerCode1: "D13006",
    reviewerName1: "Trần Thủy Tiên",
    reviewerCode2: "gianghuongly01@gmail.com",
    reviewerName2: "TLQL Marketing",
    reviewerCode3: "",
    reviewerName3: "",
    reviewerCode4: "",
    reviewerName4: "",
    reviewerCode5: "",
    reviewerName5: "",
    email: "",
    position: "",
  },
  {
    code: "C997",
    displayName: "Nguyễn Thị Nguyên",
    department: "Sale",
    managerName: "Trần Anh Dũng",
    reviewerCode1: "D11150",
    reviewerName1: "Trương Thị Trà Giang",
    reviewerCode2: "S41",
    reviewerName2: "Nguyễn Hữu Long",
    reviewerCode3: "C635",
    reviewerName3: "Bùi Thu Trang",
    reviewerCode4: "D11054",
    reviewerName4: "Nguyễn Đình Kháng",
    reviewerCode5: "D13528",
    reviewerName5: "Đinh Thị Thanh Huyền",
    email: "nguyenthinguen0204@gmail.com",
    position: "Nhân viên kinh doanh Full - time",
  },
  {
    code: "D79",
    displayName: "Nguyễn Thị Mỹ Linh",
    department: "Training",
    managerName: "Trần Anh Dũng",
    reviewerCode1: "D7954",
    reviewerName1: "Dương Văn Vững",
    reviewerCode2: "D93",
    reviewerName2: "Nguyễn Thúy Vi",
    reviewerCode3: "D7287",
    reviewerName3: "Doãn Thị Ngọc Ánh",
    reviewerCode4: "D1906",
    reviewerName4: "",
    reviewerCode5: "",
    reviewerName5: "",
    email: "",
    position: "",
  },
  {
    code: "",
    displayName: "Nguyễn Quang Bình",
    department: "D1039",
    managerName: "Nguyễn Thị Thu Trang",
    reviewerCode1: "linhxu271196@gmail.com",
    reviewerName1: "Training Executive, TTL",
    reviewerCode2: "",
    reviewerName2: "",
    reviewerCode3: "",
    reviewerName3: "",
    reviewerCode4: "",
    reviewerName4: "",
    reviewerCode5: "",
    reviewerName5: "",
    email: "",
    position: "",
  },
  {
    code: "D93",
    displayName: "Nguyễn Thúy Vi",
    department: "Training",
    managerName: "Trần Anh Dũng",
    reviewerCode1: "D79",
    reviewerName1: "Nguyễn Thị Mỹ Linh",
    reviewerCode2: "D1906",
    reviewerName2: "",
    reviewerCode3: "",
    reviewerName3: "",
    reviewerCode4: "",
    reviewerName4: "",
    reviewerCode5: "",
    reviewerName5: "",
    email: "",
    position: "",
  },
  {
    code: "",
    displayName: "Nguyễn Quang Bình",
    department: "D583",
    managerName: "Nguyễn Thế Anh",
    reviewerCode1: "D703",
    reviewerName1: "Nguyễn Huyền Trang",
    reviewerCode2: "D13618",
    reviewerName2: "Nguyễn Xuân Trà",
    reviewerCode3: "thuyvi11196@gmail.com",
    reviewerName3: "Training Executive, TTL",
    reviewerCode4: "",
    reviewerName4: "",
    reviewerCode5: "",
    reviewerName5: "",
    email: "",
    position: "",
  },
  {
    code: "S41",
    displayName: "Nguyễn Hữu Long",
    department: "KHO",
    managerName: "Trần Phương Anh",
    reviewerCode1: "C635",
    reviewerName1: "Bùi Thu Trang",
    reviewerCode2: "D11150",
    reviewerName2: "Trương Thị Trà Giang",
    reviewerCode3: "D5762",
    reviewerName3: "Nguyễn Thị Thương",
    reviewerCode4: "D5841",
    reviewerName4: "Lò Thị Khánh Lâm",
    reviewerCode5: "D9644",
    reviewerName5: "Mai Thị Hiếu",
    email: "nhlong2107@gmail.com",
    position: "Quản lý Kho Full-time",
  },
  {
    code: "D12019",
    displayName: "Đậu Kim Ngân",
    department: "B4",
    managerName: "Trần Phương Anh",
    reviewerCode1: "D6100",
    reviewerName1: "Vũ Trường Sơn",
    reviewerCode2: "D583",
    reviewerName2: "Nguyễn Thế Anh",
    reviewerCode3: "D9985",
    reviewerName3: "Nguyễn Thanh Thủy",
    reviewerCode4: "D14435",
    reviewerName4: "Bùi Quân Mạnh",
    reviewerCode5: "D13644",
    reviewerName5: "Phùng Thị Nhàn",
    email: "daukimngan12@gmail.com",
    position: "Thợ bánh Full-time",
  },
  {
    code: "D9985",
    displayName: "Nguyễn Thanh Thủy",
    department: "B4",
    managerName: "Trần Phương Anh",
    reviewerCode1: "D6100",
    reviewerName1: "Vũ Trường Sơn",
    reviewerCode2: "D583",
    reviewerName2: "Nguyễn Thế Anh",
    reviewerCode3: "D12019",
    reviewerName3: "Đậu Kim Ngân",
    reviewerCode4: "D14435",
    reviewerName4: "Bùi Quân Mạnh",
    reviewerCode5: "D13644",
    reviewerName5: "Phùng Thị Nhàn",
    email: "thanhthuynguyent25@gmail.com",
    position: "Thợ bánh Full-time",
  },
  {
    code: "D13288",
    displayName: "Nguyễn Thị Bích Hạnh",
    department: "B5",
    managerName: "Trần Phương Anh",
    reviewerCode1: "D1039",
    reviewerName1: "Nguyễn Thị Thu Trang",
    reviewerCode2: "D583",
    reviewerName2: "Nguyễn Thế Anh",
    reviewerCode3: "D9906",
    reviewerName3: "Nguyễn Thị Ngọc Trâm",
    reviewerCode4: "D11281",
    reviewerName4: "Vũ Thị Quy",
    reviewerCode5: "D14678",
    reviewerName5: "Phạm Thị Hồng Hạnh",
    email: "nguyenhanh.96vnua@gmail.com",
    position: "Thợ bánh Full-time",
  },
  {
    code: "D9906",
    displayName: "Nguyễn Thị Ngọc Trâm",
    department: "B5",
    managerName: "Trần Phương Anh",
    reviewerCode1: "D1039",
    reviewerName1: "Nguyễn Thị Thu Trang",
    reviewerCode2: "D583",
    reviewerName2: "Nguyễn Thế Anh",
    reviewerCode3: "D11281",
    reviewerName3: "Vũ Thị Quy",
    reviewerCode4: "D13288",
    reviewerName4: "Nguyễn Thị Bích Hạnh",
    reviewerCode5: "D14678",
    reviewerName5: "Phạm Thị Hồng Hạnh",
    email: "tramxtvd@gmail.com",
    position: "Thợ bánh Full-time",
  },
  {
    code: "D1039",
    displayName: "Nguyễn Thị Thu Trang",
    department: "B5",
    managerName: "Trần Phương Anh",
    reviewerCode1: "D7973",
    reviewerName1: "Trần Quốc Anh",
    reviewerCode2: "D4553",
    reviewerName2: "Nguyễn Minh Hùng",
    reviewerCode3: "D6100",
    reviewerName3: "Vũ Trường Sơn",
    reviewerCode4: "D9906",
    reviewerName4: "Nguyễn Thị Ngọc Trâm",
    reviewerCode5: "D14678",
    reviewerName5: "Phạm Thị Hồng Hạnh",
    email: "nguyenthutrang1620@gmail.com",
    position: "Quản lý Bếp bánh Full-time",
  },
  {
    code: "D11281",
    displayName: "Vũ Thị Quy",
    department: "B5",
    managerName: "Trần Phương Anh",
    reviewerCode1: "D1039",
    reviewerName1: "Nguyễn Thị Thu Trang",
    reviewerCode2: "D583",
    reviewerName2: "Nguyễn Thế Anh",
    reviewerCode3: "D13826",
    reviewerName3: "Nguyễn Hà Trang",
    reviewerCode4: "D9906",
    reviewerName4: "Nguyễn Thị Ngọc Trâm",
    reviewerCode5: "D14678",
    reviewerName5: "Phạm Thị Hồng Hạnh",
    email: "vuquynamtruc2003@gmail.com",
    position: "Thợ bánh Full-time",
  },
  {
    code: "D4857",
    displayName: "Phạm Thị Lan",
    department: "B7",
    managerName: "Trần Phương Anh",
    reviewerCode1: "D13808",
    reviewerName1: "Phạm Hoàng Yến",
    reviewerCode2: "D456",
    reviewerName2: "Trần Thị Lệ Quyên",
    reviewerCode3: "D12228",
    reviewerName3: "Vũ Quỳnh Lan",
    reviewerCode4: "D13327",
    reviewerName4: "Nguyễn Phương Hoa",
    reviewerCode5: "D703",
    reviewerName5: "Nguyễn Huyền Trang",
    email: "phamlan2908@gmail.com",
    position: "Thợ bánh Full-time",
  },
  {
    code: "C635",
    displayName: "Bùi Thu Trang",
    department: "ĐG",
    managerName: "Trần Phương Anh",
    reviewerCode1: "D11054",
    reviewerName1: "Nguyễn Đình Kháng",
    reviewerCode2: "D9644",
    reviewerName2: "Mai Thị Hiếu",
    reviewerCode3: "D11150",
    reviewerName3: "Trương Thị Trà Giang",
    reviewerCode4: "S41",
    reviewerName4: "Nguyễn Hữu Long",
    reviewerCode5: "D337",
    reviewerName5: "Nguyễn Thành Nam",
    email: "trytowin1003@gmail.com",
    position: "Quản lý đóng gói Full-time",
  },
  {
    code: "E73",
    displayName: "Nguyễn Anh Tú",
    department: "HC",
    managerName: "Trần Phương Anh",
    reviewerCode1: "D5762",
    reviewerName1: "Nguyễn Thị Thương",
    reviewerCode2: "S110",
    reviewerName2: "Nguyễn Văn Việt",
    reviewerCode3: "S41",
    reviewerName3: "Nguyễn Hữu Long",
    reviewerCode4: "D11359",
    reviewerName4: "Phạm Văn Quế",
    reviewerCode5: "D9477",
    reviewerName5: "Đặng Hoàng Anh",
    email: "anhtuas123@gmail.com",
    position: "Giám sát Hậu cần Full-time",
  },
  {
    code: "D2537",
    displayName: "Nguyễn Văn Thao",
    department: "HC",
    managerName: "Trần Phương Anh",
    reviewerCode1: "E73",
    reviewerName1: "Nguyễn Anh Tú",
    reviewerCode2: "D11359",
    reviewerName2: "Phạm Văn Quế",
    reviewerCode3: "D1039",
    reviewerName3: "Nguyễn Thị Thu Trang",
    reviewerCode4: "D5762",
    reviewerName4: "Nguyễn Thị Thương",
    reviewerCode5: "D8782",
    reviewerName5: "Lê Đỗ Phúc Vinh",
    email: "ngocthao060690@gmail.com",
    position: "Nhân viên Hậu cần Full-time",
  },
  {
    code: "D11359",
    displayName: "Phạm Văn Quế",
    department: "HC",
    managerName: "Trần Phương Anh",
    reviewerCode1: "E73",
    reviewerName1: "Nguyễn Anh Tú",
    reviewerCode2: "D2537",
    reviewerName2: "Nguyễn Văn Thao",
    reviewerCode3: "D931",
    reviewerName3: "Ngô Thị Huyền",
    reviewerCode4: "D5762",
    reviewerName4: "Nguyễn Thị Thương",
    reviewerCode5: "D11150",
    reviewerName5: "Trương Thị Trà Giang",
    email: "Phamque8386@gmail.com",
    position: "Nhân viên Kỹ thuật điện nước Full-time",
  },
  {
    code: "D11150",
    displayName: "Trương Thị Trà Giang",
    department: "KHO",
    managerName: "Trần Phương Anh",
    reviewerCode1: "C635",
    reviewerName1: "Bùi Thu Trang",
    reviewerCode2: "D11489",
    reviewerName2: "Bùi Thế Anh",
    reviewerCode3: "D9644",
    reviewerName3: "Mai Thị Hiếu",
    reviewerCode4: "D11054",
    reviewerName4: "Nguyễn Đình Kháng",
    reviewerCode5: "D703",
    reviewerName5: "Nguyễn Huyền Trang",
    email: "giangtruong2501@gmail.com",
    position: "Quản lý Kho Full - time",
  },
  {
    code: "D8132",
    displayName: "Hoàng Anh Tuấn",
    department: "Tài xế",
    managerName: "Trần Phương Anh",
    reviewerCode1: "E73",
    reviewerName1: "Nguyễn Anh Tú",
    reviewerCode2: "D11359",
    reviewerName2: "Phạm Văn Quế",
    reviewerCode3: "D11150",
    reviewerName3: "Trương Thị Trà Giang",
    reviewerCode4: "S41",
    reviewerName4: "Nguyễn Hữu Long",
    reviewerCode5: "D7721",
    reviewerName5: "Trịnh Văn Tiến",
    email: "tuanhoang051085@icloud.com",
    position: "Tài xế giao hàng xe tải đông lạnh",
  },
  {
    code: "D7721",
    displayName: "Trịnh Văn Tiến",
    department: "Tài xế",
    managerName: "Trần Phương Anh",
    reviewerCode1: "E73",
    reviewerName1: "Nguyễn Anh Tú",
    reviewerCode2: "D11359",
    reviewerName2: "Phạm Văn Quế",
    reviewerCode3: "D11150",
    reviewerName3: "Trương Thị Trà Giang",
    reviewerCode4: "S41",
    reviewerName4: "Nguyễn Hữu Long",
    reviewerCode5: "D8132",
    reviewerName5: "Hoàng Anh Tuấn",
    email: "trinhvantien0109@gmail.com",
    position: "Tài xế giao hàng xe bán tải",
  },
  {
    code: "D5093",
    displayName: "Nguyễn Kim Hưng",
    department: "KHO",
    managerName: "Vy Tuấn Anh",
    reviewerCode1: "D13461",
    reviewerName1: "Phạm Hoàng Thịnh",
    reviewerCode2: "D9005",
    reviewerName2: "Phan Lê Công Đạt",
    reviewerCode3: "D11150",
    reviewerName3: "Trương Thị Trà Giang",
    reviewerCode4: "D11054",
    reviewerName4: "Nguyễn Đình Kháng",
    reviewerCode5: "D11159",
    reviewerName5: "\tĐỗ Trịnh Thanh Sang",
    email: "ngungsuong.nkh97@gmail.com",
    position: "Nhân viên mua hàng Full-time",
  },
  {
    code: "S110",
    displayName: "Nguyễn Văn Việt",
    department: "MEDIA",
    managerName: "Vy Tuấn Anh",
    reviewerCode1: "D708",
    reviewerName1: "Đinh Phương Thảo",
    reviewerCode2: "D337",
    reviewerName2: "Nguyễn Thành Nam",
    reviewerCode3: "D583",
    reviewerName3: "Nguyễn Thế Anh",
    reviewerCode4: "D3267",
    reviewerName4: "Giang Hương Ly",
    reviewerCode5: "D11257",
    reviewerName5: "Lê Phương Thảo",
    email: "vietxc2014@gmail.com",
    position: "Graphic Designer, TTL",
  },
  {
    code: "D5841",
    displayName: "Lò Thị Khánh Lâm",
    department: "Purchasing",
    managerName: "Vy Tuấn Anh",
    reviewerCode1: "D11054",
    reviewerName1: "Nguyễn Đình Kháng",
    reviewerCode2: "D7973",
    reviewerName2: "Trần Quốc Anh",
    reviewerCode3: "D1931",
    reviewerName3: "Lê Thị Chi",
    reviewerCode4: "C635",
    reviewerName4: "Bùi Thu Trang",
    reviewerCode5: "D14705",
    reviewerName5: "Nguyễn Diễm Quỳnh",
    email: "khanhlam3108@gmail.com",
    position: "Nhân viên mua hàng Full-time",
  },
  {
    code: "D11054",
    displayName: "Nguyễn Đình Kháng",
    department: "Purchasing",
    managerName: "Vy Tuấn Anh",
    reviewerCode1: "D5841",
    reviewerName1: "Lò Thị Khánh Lâm",
    reviewerCode2: "D4553",
    reviewerName2: "Nguyễn Minh Hùng",
    reviewerCode3: "D11150",
    reviewerName3: "Trương Thị Trà Giang",
    reviewerCode4: "D1931",
    reviewerName4: "Lê Thị Chi",
    reviewerCode5: "D7973",
    reviewerName5: "Trần Quốc Anh",
    email: "dinhkhang2002cr@gmail.com",
    position: "Nhân viên mua hàng Full-time",
  },
  {
    code: "D337",
    displayName: "Nguyễn Thành Nam",
    department: "R&D",
    managerName: "Vy Tuấn Anh",
    reviewerCode1: "D583",
    reviewerName1: "Nguyễn Thế Anh",
    reviewerCode2: "S110",
    reviewerName2: "Nguyễn Văn Việt",
    reviewerCode3: "D11054",
    reviewerName3: "Nguyễn Đình Kháng",
    reviewerCode4: "D1931",
    reviewerName4: "Lê Thị Chi",
    reviewerCode5: "C635",
    reviewerName5: "Bùi Thu Trang",
    email: "thanhnam06121997@gmail.com",
    position: "Kitchen Manager, Training Executive, TTL",
  },
  {
    code: "D583",
    displayName: "Nguyễn Thế Anh",
    department: "R&D",
    managerName: "Vy Tuấn Anh",
    reviewerCode1: "D337",
    reviewerName1: "Nguyễn Thành Nam",
    reviewerCode2: "D1039",
    reviewerName2: "Nguyễn Thị Thu Trang",
    reviewerCode3: "D3267",
    reviewerName3: "Giang Hương Ly",
    reviewerCode4: "D9985",
    reviewerName4: "Nguyễn Thanh Thủy",
    reviewerCode5: "D9906",
    reviewerName5: "Nguyễn Thị Ngọc Trâm",
    email: "theanh2726@gmail.com",
    position: "Nhân viên R&D Full-time",
  },
  {
    code: "D13461",
    displayName: "Phạm Hoàng Thịnh",
    department: "QC",
    managerName: "Dương Thị Nhung",
    reviewerCode1: "D5093",
    reviewerName1: "Nguyễn Kim Hưng",
    reviewerCode2: "D4086",
    reviewerName2: "Đặng Kim Xuân",
    reviewerCode3: "D1886",
    reviewerName3: "Phùng Thị Ngọc Tuyết",
    reviewerCode4: "D5513",
    reviewerName4: "Huỳnh Tấn Phát",
    reviewerCode5: "D7381",
    reviewerName5: "Huỳnh Bảo Nhi",
    email: "ph.thinh107@gmail.com",
    position: "Nhân viên giám sát chuỗi khu vực Hồ Chí Minh",
  },
];

const managers = _.map(
  _.reduce(
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

const isManager = (code) => {
  return _.find(managers, { code: code });
};

const getRevieweesForManager = (code) => {
  return _.find(managers, { code: code }).reviewees;
};

module.exports = {
  isManager,
  getRevieweesForManager,
};
