const _ = require("lodash");

const forms = [
  {
    code: "D4553",
    displayName: "Nguyễn Minh Hùng",
    department: "IC",
    managerName: "Dương Thị Nhung",
    managerCode: "D327",
    position: "Nhân viên Kiểm toán nội bộ",
    email: "ngminhhung1102@gmail.com",
    reviewerCode1: "S78",
    reviewerName1: "Bùi Thị Hương",
    reviewerCode2: "D10144",
    reviewerName2: "Đào Duy Bách",
    reviewerCode3: "D1039",
    reviewerName3: "Nguyễn Thị Thu Trang",
    reviewerCode4: "C635",
    reviewerName4: "Bùi Thu Trang",
    reviewerCode5: "D717",
    reviewerName5: "Vũ Thúy Nhật",
    reviewerCode6: "D13275",
    reviewerName6: "Nguyễn Minh Hằng",
    reviewerCode7: "D13258",
    reviewerName7: "Nguyễn Chí Công",
    reviewerCode8: "D14023",
    reviewerName8: "Vũ Khánh Linh",
    isManager: true,
  },
  {
    code: "S78",
    displayName: "Bùi Thị Hương",
    department: "IC",
    managerName: "Dương Thị Nhung",
    managerCode: "D327",
    position: "Nhân viên kiểm toán nội bộ",
    email: "buihuong17101997@gmail.com",
    reviewerCode1: "D4553",
    reviewerName1: "Nguyễn Minh Hùng",
    reviewerCode2: "D10144",
    reviewerName2: "Đào Duy Bách",
    reviewerCode3: "D2010",
    reviewerName3: "Đỗ Ngọc Cương",
    reviewerCode4: "D11115",
    reviewerName4: "Nguyễn Minh Ngọc",
    reviewerCode5: "D1039",
    reviewerName5: "Nguyễn Thị Thu Trang",
    reviewerCode6: "D13275",
    reviewerName6: "Nguyễn Minh Hằng",
    reviewerCode7: "D13258",
    reviewerName7: "Nguyễn Chí Công",
    reviewerCode8: "D14023",
    reviewerName8: "Vũ Khánh Linh",
  },
  {
    code: "D10144",
    displayName: "Đào Duy Bách",
    department: "IC",
    managerName: "Dương Thị Nhung",
    managerCode: "D327",
    position: "Nhân viên Kiểm toán Full-time",
    email: "daoduybach.work@gmail.com",
    reviewerCode1: "D4553",
    reviewerName1: "Nguyễn Minh Hùng",
    reviewerCode2: "S78",
    reviewerName2: "Bùi Thị Hương",
    reviewerCode3: "D5093",
    reviewerName3: "Nguyễn Kim Hưng",
    reviewerCode4: "D11150",
    reviewerName4: "Trương Thị Trà Giang",
    reviewerCode5: "D8782",
    reviewerName5: "Lê Đỗ Phúc Vinh",
    reviewerCode6: "D13275",
    reviewerName6: "Nguyễn Minh Hằng",
    reviewerCode7: "D13258",
    reviewerName7: "Nguyễn Chí Công",
    reviewerCode8: "D14023",
    reviewerName8: "Vũ Khánh Linh",
  },
  {
    code: "D9644",
    displayName: "Mai Thị Hiếu",
    department: "LOGISTICS",
    managerName: "Dương Thị Nhung",
    managerCode: "D327",
    position: "Nhân viên Logistic Full-time",
    email: "maihieulog2k2@gmail.com",
    reviewerCode1: "D1931",
    reviewerName1: "Lê Thị Chi",
    reviewerCode2: "D5841",
    reviewerName2: "Lò Thị Khánh Lâm",
    reviewerCode3: "D11054",
    reviewerName3: "Nguyễn Đình Kháng",
    reviewerCode4: "D9005",
    reviewerName4: "Phan Lê Công Đạt",
    reviewerCode5: "D11150",
    reviewerName5: "Trương Thị Trà Giang",
    reviewerCode6: "D15394",
    reviewerName6: "Nguyễn Thị Quỳnh Nga",
    reviewerCode7: "D5093",
    reviewerName7: "Nguyễn Kim Hưng",
    reviewerCode8: "",
    reviewerName8: "",
  },
  {
    code: "D1931",
    displayName: "Lê Thị Chi",
    department: "QC",
    managerName: "Dương Thị Nhung",
    managerCode: "D327",
    position: "Giám sát chất lượng vận hành Full-time",
    email: "lethuychi01092001@gmail.com",
    reviewerCode1: "D9644",
    reviewerName1: "Mai Thị Hiếu",
    reviewerCode2: "D9005",
    reviewerName2: "Phan Lê Công Đạt",
    reviewerCode3: "D5093",
    reviewerName3: "Nguyễn Kim Hưng",
    reviewerCode4: "D15394",
    reviewerName4: "Nguyễn Thị Quỳnh Nga",
    reviewerCode5: "S41",
    reviewerName5: "Nguyễn Hữu Long",
    reviewerCode6: "D11489",
    reviewerName6: "Bùi Thế Anh",
    reviewerCode7: "D4086",
    reviewerName7: "Đặng Kim Xuân",
    reviewerCode8: "D7395",
    reviewerName8: "Dương Thị Trang",
  },
  {
    code: "D9005",
    displayName: "Phan Lê Công Đạt",
    department: "TMDT",
    managerName: "Dương Thị Nhung",
    managerCode: "D327",
    position: "Nhân viên Điều phối và Kinh doanh Full-time",
    email: "congdat207@gmail.com",
    reviewerCode1: "D5093",
    reviewerName1: "Nguyễn Kim Hưng",
    reviewerCode2: "D9644",
    reviewerName2: "Mai Thị Hiếu",
    reviewerCode3: "D1931",
    reviewerName3: "Lê Thị Chi",
    reviewerCode4: "D12965",
    reviewerName4: "Nguyễn Trương Hải Đăng",
    reviewerCode5: "D13381",
    reviewerName5: "Nguyễn Thị Anh Thư",
    reviewerCode6: "D9582",
    reviewerName6: "Phạm Thị Hà Vy",
    reviewerCode7: "D4086",
    reviewerName7: "Đặng Kim Xuân",
    reviewerCode8: "D7381",
    reviewerName8: "Huỳnh Bảo Nhi",
  },
  {
    code: "D93",
    displayName: "Nguyễn Thúy Vi",
    department: "Training",
    managerName: "Dương Thị Nhung",
    managerCode: "D327",
    position: "Training Executive, TTL",
    email: "thuyvi11196@gmail.com",
    reviewerCode1: "D14755",
    reviewerName1: "Vũ Tuấn Dương",
    reviewerCode2: "D15222",
    reviewerName2: "Cát Trịnh Đức Bình",
    reviewerCode3: "D583",
    reviewerName3: "Nguyễn Thế Anh",
    reviewerCode4: "D1906",
    reviewerName4: "Nguyễn Quang Bình",
    reviewerCode5: "D13867",
    reviewerName5: "Nguyễn Thu Hiền",
    reviewerCode6: "D9286",
    reviewerName6: "Lê Nguyễn Kim Ngân",
    reviewerCode7: "",
    reviewerName7: "",
    reviewerCode8: "",
    reviewerName8: "",
    isManager: true,
  },
  {
    code: "D5762",
    displayName: "Nguyễn Thị Thương",
    department: "VHKV",
    managerName: "Dương Thị Nhung",
    managerCode: "D327",
    position: "Nhân viên giám sát chuỗi cửa hàng Full-time",
    email: "thuongha1422@gmail.com",
    reviewerCode1: "D15082",
    reviewerName1: "Nguyễn Thị Diệu Linh",
    reviewerCode2: "D7395",
    reviewerName2: "Dương Thị Trang",
    reviewerCode3: "E73",
    reviewerName3: "Nguyễn Anh Tú",
    reviewerCode4: "D4372",
    reviewerName4: "Trần Thị Phương Mai",
    reviewerCode5: "S41",
    reviewerName5: "Nguyễn Hữu Long",
    reviewerCode6: "D14678",
    reviewerName6: "Phạm Thị Hồng Hạnh",
    reviewerCode7: "D13808",
    reviewerName7: "Phạm Hoàng Yến",
    reviewerCode8: "D1931",
    reviewerName8: "Lê Thị Chi",
  },
  {
    code: "D15082",
    displayName: "Nguyễn Thị Diệu Linh",
    department: "VHKV",
    managerName: "Dương Thị Nhung",
    managerCode: "D327",
    position: "Nhân viên giám sát chuỗi cửa hàng Full-time",
    email: "nguyenlinh129108@gmail.com",
    reviewerCode1: "D5762",
    reviewerName1: "Nguyễn Thị Thương",
    reviewerCode2: "D4372",
    reviewerName2: "Trần Thị Phương Mai",
    reviewerCode3: "D7395",
    reviewerName3: "Dương Thị Trang",
    reviewerCode4: "D8782",
    reviewerName4: "Lê Đỗ Phúc Vinh",
    reviewerCode5: "E73",
    reviewerName5: "Nguyễn Anh Tú",
    reviewerCode6: "D11359",
    reviewerName6: "Phạm Văn Quế",
    reviewerCode7: "D10146",
    reviewerName7: "Đào Phạm Đức Nghĩa",
    reviewerCode8: "",
    reviewerName8: "",
  },
  {
    code: "D5093",
    displayName: "Nguyễn Kim Hưng",
    department: "KHO",
    managerName: "Dương Thị Nhung",
    managerCode: "D327",
    position: "Nhân viên mua hàng Full-time",
    email: "ngungsuong.nkh97@gmail.com",
    reviewerCode1: "D13461",
    reviewerName1: "Phạm Hoàng Thịnh",
    reviewerCode2: "D9005",
    reviewerName2: "Phan Lê Công Đạt",
    reviewerCode3: "D11054",
    reviewerName3: "Nguyễn Đình Kháng",
    reviewerCode4: "D12965",
    reviewerName4: "Nguyễn Trương Hải Đăng",
    reviewerCode5: "D4086",
    reviewerName5: "Đặng Kim Xuân",
    reviewerCode6: "",
    reviewerName6: "",
    reviewerCode7: "",
    reviewerName7: "",
    reviewerCode8: "",
    reviewerName8: "",
    isManager: true,
  },
  {
    code: "D717",
    displayName: "Vũ Thúy Nhật",
    department: "BA",
    managerName: "Lê Tuấn Hiệp",
    managerCode: "F432",
    position: "Nhân viên BA",
    email: "v.thuynhatt@gmail.com",
    reviewerCode1: "E09",
    reviewerName1: "Chu Huy Thắng",
    reviewerCode2: "D708",
    reviewerName2: "Đinh Phương Thảo",
    reviewerCode3: "D703",
    reviewerName3: "Nguyễn Huyền Trang",
    reviewerCode4: "D9644",
    reviewerName4: "Mai Thị Hiếu",
    reviewerCode5: "D1906",
    reviewerName5: "Nguyễn Quang Bình",
    reviewerCode6: "D11150",
    reviewerName6: "Trương Thị Trà Giang",
    reviewerCode7: "D9005",
    reviewerName7: "Phan Lê Công Đạt",
    reviewerCode8: "D14478",
    reviewerName8: "Nguyễn Yến Linh",
  },
  {
    code: "D703",
    displayName: "Nguyễn Huyền Trang",
    department: "LEGAL",
    managerName: "Lê Tuấn Hiệp",
    managerCode: "F432",
    position: "Legal Executive",
    email: "blackpage60@gmail.com",
    reviewerCode1: "D11115",
    reviewerName1: "Nguyễn Minh Ngọc",
    reviewerCode2: "C037",
    reviewerName2: "Nguyễn Thị Quỳnh",
    reviewerCode3: "D14111",
    reviewerName3: "Tạ Thu Hường",
    reviewerCode4: "D11150",
    reviewerName4: "Trương Thị Trà Giang",
    reviewerCode5: "D7954",
    reviewerName5: "Dương Văn Vững",
    reviewerCode6: "S78",
    reviewerName6: "Bùi Thị Hương",
    reviewerCode7: "D7973",
    reviewerName7: "Trần Quốc Anh",
    reviewerCode8: "D8013",
    reviewerName8: "Lý Trung Hậu",
  },
  {
    code: "E09",
    displayName: "Chu Huy Thắng",
    department: "TECH",
    managerName: "Lê Tuấn Hiệp",
    managerCode: "F432",
    position: "Programming",
    email: "chuthang205@gmail.com",
    reviewerCode1: "D708",
    reviewerName1: "Đinh Phương Thảo",
    reviewerCode2: "D717",
    reviewerName2: "Vũ Thúy Nhật",
    reviewerCode3: "D1906",
    reviewerName3: "Nguyễn Quang Bình",
    reviewerCode4: "D4553",
    reviewerName4: "Nguyễn Minh Hùng",
    reviewerCode5: "S78",
    reviewerName5: "Bùi Thị Hương",
    reviewerCode6: "D15617",
    reviewerName6: "Nguyễn Viết Công",
    reviewerCode7: "D7287",
    reviewerName7: "Doãn Thị Ngọc Ánh",
    reviewerCode8: "E73",
    reviewerName8: "Nguyễn Anh Tú",
  },
  {
    code: "D708",
    displayName: "Đinh Phương Thảo",
    department: "TECH",
    managerName: "Lê Tuấn Hiệp",
    managerCode: "F432",
    position: "Developer Full-time",
    email: "dinhphuongthaoqia@gmail.com",
    reviewerCode1: "E09",
    reviewerName1: "Chu Huy Thắng",
    reviewerCode2: "D717",
    reviewerName2: "Vũ Thúy Nhật",
    reviewerCode3: "D1906",
    reviewerName3: "Nguyễn Quang Bình",
    reviewerCode4: "S110",
    reviewerName4: "Nguyễn Văn Việt",
    reviewerCode5: "D15617",
    reviewerName5: "Nguyễn Viết Công",
    reviewerCode6: "D9728",
    reviewerName6: "Nguyễn Trung Kiên",
    reviewerCode7: "D13006",
    reviewerName7: "Trần Thuỷ Tiên",
    reviewerCode8: "C997",
    reviewerName8: "Nguyễn Thị Nguyên",
  },
  {
    code: "D1906",
    displayName: "Nguyễn Quang Bình",
    department: "CSKH",
    managerName: "Trần Anh Dũng",
    managerCode: "F688",
    position: "Nhân viên CSKH & Training Full-time",
    email: "quangbinhvx201@gmail.com",
    reviewerCode1: "D479",
    reviewerName1: "Nguyễn Minh Ngọc",
    reviewerCode2: "D9728",
    reviewerName2: "Nguyễn Trung Kiên",
    reviewerCode3: "D12196",
    reviewerName3: "Phạm Thị Thanh Bình",
    reviewerCode4: "D1931",
    reviewerName4: "Lê Thị Chi",
    reviewerCode5: "D14601",
    reviewerName5: "Vũ Đặng Đức Anh",
    reviewerCode6: "D1039",
    reviewerName6: "Nguyễn Thị Thu Trang",
    reviewerCode7: "D14678",
    reviewerName7: "Phạm Thị Hồng Hạnh",
    reviewerCode8: "",
    reviewerName8: "",
    isManager: true,
  },
  {
    code: "D4372",
    displayName: "Trần Thị Phương Mai",
    department: "E28-M2",
    managerName: "Trần Anh Dũng",
    managerCode: "F688",
    position: "Quản lý cơ sở Full - time",
    email: "tranm300@gmail.com",
    reviewerCode1: "D15082",
    reviewerName1: "Nguyễn Thị Diệu Linh",
    reviewerCode2: "D8782",
    reviewerName2: "Lê Đỗ Phúc Vinh",
    reviewerCode3: "D11115",
    reviewerName3: "Nguyễn Minh Ngọc",
    reviewerCode4: "D7287",
    reviewerName4: "Doãn Thị Ngọc Ánh",
    reviewerCode5: "D5762",
    reviewerName5: "Nguyễn Thị Thương",
    reviewerCode6: "",
    reviewerName6: "",
    reviewerCode7: "",
    reviewerName7: "",
    reviewerCode8: "",
    reviewerName8: "",
    isManager: true,
  },
  {
    code: "D7395",
    displayName: "Dương Thị Trang",
    department: "E8-E27-E64",
    managerName: "Trần Anh Dũng",
    managerCode: "F688",
    position: "Quản lý Cơ sở Full-time",
    email: "trangduong11899@gmail.com",
    reviewerCode1: "D15082",
    reviewerName1: "Nguyễn Thị Diệu Linh",
    reviewerCode2: "D7287",
    reviewerName2: "Doãn Thị Ngọc Ánh",
    reviewerCode3: "D5762",
    reviewerName3: "Nguyễn Thị Thương",
    reviewerCode4: "D11115",
    reviewerName4: "Nguyễn Minh Ngọc",
    reviewerCode5: "D4372",
    reviewerName5: "Trần Thị Phương Mai",
    reviewerCode6: "D12759",
    reviewerName6: "Ngô Thái An Vy",
    reviewerCode7: "D11855",
    reviewerName7: "Nguyễn Phương Linh",
    reviewerCode8: "D15428",
    reviewerName8: "Chu Minh Thảo",
    isManager: true,
  },
  {
    code: "D479",
    displayName: "Nguyễn Minh Ngọc",
    department: "ECOM",
    managerName: "Trần Anh Dũng",
    managerCode: "F688",
    position: "Nhân viên vận hành sàn Thương mại điện tử",
    email: "hastagminhngoc@gmail.com",
    reviewerCode1: "D1906",
    reviewerName1: "Nguyễn Quang Bình",
    reviewerCode2: "D11054",
    reviewerName2: "Nguyễn Đình Kháng",
    reviewerCode3: "D14570",
    reviewerName3: "Nguyễn Duy Anh",
    reviewerCode4: "D3267",
    reviewerName4: "Giang Hương Ly",
    reviewerCode5: "D11150",
    reviewerName5: "Trương Thị Trà Giang",
    reviewerCode6: "D13006",
    reviewerName6: "Trần Thủy Tiên",
    reviewerCode7: "D9005",
    reviewerName7: "Phan Lê Công Đạt",
    reviewerCode8: "",
    reviewerName8: "",
  },
  {
    code: "D7954",
    displayName: "Dương Văn Vững",
    department: "HR1",
    managerName: "Trần Anh Dũng",
    managerCode: "F688",
    position: "HR1",
    email: "duongvung1003@gmail.com",
    reviewerCode1: "D7287",
    reviewerName1: "Doãn Thị Ngọc Ánh",
    reviewerCode2: "D93",
    reviewerName2: "Nguyễn Thúy Vi",
    reviewerCode3: "D11244",
    reviewerName3: "Vũ Thị Thùy Linh",
    reviewerCode4: "D14478",
    reviewerName4: "Nguyễn Yến Linh",
    reviewerCode5: "D9315",
    reviewerName5: "Nguyễn Quỳnh Anh",
    reviewerCode6: "D9613",
    reviewerName6: "Lê Đức Anh",
    reviewerCode7: "",
    reviewerName7: "",
    reviewerCode8: "",
    reviewerName8: "",
    isManager: true,
  },
  {
    code: "D7287",
    displayName: "Doãn Thị Ngọc Ánh",
    department: "HR2",
    managerName: "Trần Anh Dũng",
    managerCode: "F688",
    position: "Quản lý Tuyển dụng",
    email: "doanthingocanh1605@gmail.com",
    reviewerCode1: "D7954",
    reviewerName1: "Dương Văn Vững",
    reviewerCode2: "D93",
    reviewerName2: "Nguyễn Thúy Vi",
    reviewerCode3: "D11244",
    reviewerName3: "Vũ Thị Thùy Linh",
    reviewerCode4: "D703",
    reviewerName4: "Nguyễn Huyền Trang",
    reviewerCode5: "D13808",
    reviewerName5: "Phạm Hoàng Yến",
    reviewerCode6: "D10819",
    reviewerName6: "Lê Anh Vũ",
    reviewerCode7: "D15138",
    reviewerName7: "Nguyễn Thị Thùy Linh",
    reviewerCode8: "",
    reviewerName8: "",
    isManager: true,
  },
  {
    code: "D3267",
    displayName: "Giang Hương Ly",
    department: "MKT",
    managerName: "Trần Anh Dũng",
    managerCode: "F688",
    position: "TLQL Marketing",
    email: "gianghuongly01@gmail.com",
    reviewerCode1: "D1906",
    reviewerName1: "Nguyễn Quang Bình",
    reviewerCode2: "S110",
    reviewerName2: "Nguyễn Văn Việt",
    reviewerCode3: "D479",
    reviewerName3: "Nguyễn Minh Ngọc",
    reviewerCode4: "D13006",
    reviewerName4: "Trần Thủy Tiên",
    reviewerCode5: "D14570",
    reviewerName5: "Nguyễn Duy Anh",
    reviewerCode6: "D14405",
    reviewerName6: "Vũ Thái An",
    reviewerCode7: "D13520",
    reviewerName7: "Đinh Thụy Anh",
    reviewerCode8: "",
    reviewerName8: "",
    isManager: true,
  },
  {
    code: "C997",
    displayName: "Nguyễn Thị Nguyên",
    department: "SALE",
    managerName: "Trần Anh Dũng",
    managerCode: "F688",
    position: "Nhân viên kinh doanh Full - time",
    email: "nguyenthinguen0204@gmail.com",
    reviewerCode1: "C635",
    reviewerName1: "Bùi Thu Trang",
    reviewerCode2: "D11150",
    reviewerName2: "Trương Thị Trà Giang",
    reviewerCode3: "S41",
    reviewerName3: "Nguyễn Hữu Long",
    reviewerCode4: "D13528",
    reviewerName4: "Đinh Thị Thanh Huyền",
    reviewerCode5: "D1931",
    reviewerName5: "Lê Thị Chi",
    reviewerCode6: "D10256",
    reviewerName6: "Đặng Thị Thu Cúc",
    reviewerCode7: "D11054",
    reviewerName7: "Nguyễn Đình Kháng",
    reviewerCode8: "",
    reviewerName8: "",
  },
  {
    code: "C635",
    displayName: "Bùi Thu Trang",
    department: "ĐG",
    managerName: "Trần Phương Anh",
    managerCode: "D388",
    position: "Quản lý đóng gói Full-time",
    email: "trytowin1003@gmail.com",
    reviewerCode1: "D11150",
    reviewerName1: "Trương Thị Trà Giang",
    reviewerCode2: "S41",
    reviewerName2: "Nguyễn Hữu Long",
    reviewerCode3: "D9644",
    reviewerName3: "Mai Thị Hiếu",
    reviewerCode4: "D5093",
    reviewerName4: "Nguyễn Kim Hưng",
    reviewerCode5: "D7527",
    reviewerName5: "Nguyễn Thu Hiền",
    reviewerCode6: "S78",
    reviewerName6: "Bùi Thị Hương",
    reviewerCode7: "D5513",
    reviewerName7: "Huỳnh Tiến Phát",
    reviewerCode8: "",
    reviewerName8: "",
    isManager: true,
  },
  {
    code: "E73",
    displayName: "Nguyễn Anh Tú",
    department: "HC",
    managerName: "Trần Phương Anh",
    managerCode: "D388",
    position: "Giám sát Hậu cần Full-time",
    email: "anhtuas123@gmail.com",
    reviewerCode1: "D2537",
    reviewerName1: "Nguyễn Văn Thao",
    reviewerCode2: "D11359",
    reviewerName2: "Phạm Văn Quế",
    reviewerCode3: "D5762",
    reviewerName3: "Nguyễn Thị Thương",
    reviewerCode4: "S41",
    reviewerName4: "Nguyễn Hữu Long",
    reviewerCode5: "D4372",
    reviewerName5: "Trần Thị Phương Mai",
    reviewerCode6: "D8782",
    reviewerName6: "Lê Đỗ Phúc Vinh",
    reviewerCode7: "D5513",
    reviewerName7: "Huỳnh Tiến Phát",
    reviewerCode8: "",
    reviewerName8: "",
    isManager: true,
  },
  {
    code: "D2537",
    displayName: "Nguyễn Văn Thao",
    department: "HC",
    managerName: "Trần Phương Anh",
    managerCode: "D388",
    position: "Nhân viên Hậu cần Full-time",
    email: "ngocthao060690@gmail.com",
    reviewerCode1: "E73",
    reviewerName1: "Nguyễn Anh Tú",
    reviewerCode2: "D11359",
    reviewerName2: "Phạm Văn Quế",
    reviewerCode3: "D5762",
    reviewerName3: "Nguyễn Thị Thương",
    reviewerCode4: "D15082",
    reviewerName4: "Nguyễn Thị Diệu Linh",
    reviewerCode5: "D1039",
    reviewerName5: "Nguyễn Thị Thu Trang",
    reviewerCode6: "D5513",
    reviewerName6: "Huỳnh Tiến Phát",
    reviewerCode7: "C635",
    reviewerName7: "Bùi Thu Trang",
    reviewerCode8: "D13808",
    reviewerName8: "Phạm Hoàng Yến",
  },
  {
    code: "D11359",
    displayName: "Phạm Văn Quế",
    department: "HC",
    managerName: "Trần Phương Anh",
    managerCode: "D388",
    position: "Nhân viên Kỹ thuật điện nước Full-time",
    email: "Phamque8386@gmail.com",
    reviewerCode1: "E73",
    reviewerName1: "Nguyễn Anh Tú",
    reviewerCode2: "D2537",
    reviewerName2: "Nguyễn Văn Thao",
    reviewerCode3: "D11150",
    reviewerName3: "Trương Thị Trà Giang",
    reviewerCode4: "S41",
    reviewerName4: "Nguyễn Hữu Long",
    reviewerCode5: "D931",
    reviewerName5: "Ngô Thị Huyền",
    reviewerCode6: "D6593",
    reviewerName6: "Nguyễn Thanh Hiền",
    reviewerCode7: "",
    reviewerName7: "",
    reviewerCode8: "D6249",
    reviewerName8: "Trần Thị Yến Vi",
  },
  {
    code: "D11150",
    displayName: "Trương Thị Trà Giang",
    department: "KHO",
    managerName: "Trần Phương Anh",
    managerCode: "D388",
    position: "Quản lý Kho Full - time",
    email: "giangtruong2501@gmail.com",
    reviewerCode1: "C635",
    reviewerName1: "Bùi Thu Trang",
    reviewerCode2: "D11489",
    reviewerName2: "Bùi Thế Anh",
    reviewerCode3: "D9644",
    reviewerName3: "Mai Thị Hiếu",
    reviewerCode4: "D11648",
    reviewerName4: "Nguyễn Hồng Ngọc",
    reviewerCode5: "D13275",
    reviewerName5: "Nguyễn Minh Hằng",
    reviewerCode6: "D5093",
    reviewerName6: "Nguyễn Kim Hưng",
    reviewerCode7: "D14705",
    reviewerName7: "Nguyễn Diễm Quỳnh",
    reviewerCode8: "",
    reviewerName8: "",
    isManager: true,
  },
  {
    code: "S41",
    displayName: "Nguyễn Hữu Long",
    department: "KHO",
    managerName: "Trần Phương Anh",
    managerCode: "D388",
    position: "Quản lý Kho Full-time",
    email: "nhlong2107@gmail.com",
    reviewerCode1: "C635",
    reviewerName1: "Bùi Thu Trang",
    reviewerCode2: "D5841",
    reviewerName2: "Lò Thị Khánh Lâm",
    reviewerCode3: "D9644",
    reviewerName3: "Mai Thị Hiếu",
    reviewerCode4: "C997",
    reviewerName4: "Nguyễn Thị Nguyên",
    reviewerCode5: "D9450",
    reviewerName5: "Đinh Thị Thuận",
    reviewerCode6: "D1931",
    reviewerName6: "Lê Thị Chi",
    reviewerCode7: "D13381",
    reviewerName7: "Nguyễn Thị Anh Thư",
    reviewerCode8: "D9582",
    reviewerName8: "Phạm Thị Hà Vy",
    isManager: true,
  },
  {
    code: "D1039",
    displayName: "Nguyễn Thị Thu Trang",
    department: "QL bếp bánh",
    managerName: "Trần Phương Anh",
    managerCode: "D388",
    position: "Quản lý Bếp bánh Full-time",
    email: "nguyenthutrang1620@gmail.com",
    reviewerCode1: "D2010",
    reviewerName1: "Đỗ Ngọc Cương",
    reviewerCode2: "D9906",
    reviewerName2: "Nguyễn Thị Ngọc Trâm",
    reviewerCode3: "D7973",
    reviewerName3: "Trần Quốc Anh",
    reviewerCode4: "D4553",
    reviewerName4: "Nguyễn Minh Hùng",
    reviewerCode5: "D14678",
    reviewerName5: "Phạm Thị Hồng Hạnh",
    reviewerCode6: "D9776",
    reviewerName6: "Phan Văn Thông",
    reviewerCode7: "D8619",
    reviewerName7: "Trần Nam Anh",
    reviewerCode8: "S78",
    reviewerName8: "Bùi Thị Hương",
    isManager: true,
  },
  {
    code: "D6100",
    displayName: "Vũ Trường Sơn",
    department: "QL bếp bánh",
    managerName: "Trần Phương Anh",
    managerCode: "D388",
    position: "Quản lý bếp bánh Full-time",
    email: "vutruongson999@gmail.com",
    reviewerCode1: "D14678",
    reviewerName1: "Phạm Thị Hồng Hạnh",
    reviewerCode2: "D7973",
    reviewerName2: "Trần Quốc Anh",
    reviewerCode3: "D4553",
    reviewerName3: "Nguyễn Minh Hùng",
    reviewerCode4: "D9985",
    reviewerName4: "Nguyễn Thanh Thủy",
    reviewerCode5: "D13808",
    reviewerName5: "Phạm Hoàng Yến",
    reviewerCode6: "D12474",
    reviewerName6: "Lê Thị Lụa",
    reviewerCode7: "D14435",
    reviewerName7: "Bùi Quân Mạnh",
    reviewerCode8: "",
    reviewerName8: "",
    isManager: true,
  },
  {
    code: "D13808",
    displayName: "Phạm Hoàng Yến",
    department: "QL bếp bánh",
    managerName: "Trần Phương Anh",
    managerCode: "D388",
    position: "Quản lý bếp bánh - Fulltime",
    email: "hoangyen6826@gmail.com",
    reviewerCode1: "D4857",
    reviewerName1: "Phạm Thị Lan",
    reviewerCode2: "D7973",
    reviewerName2: "Trần Quốc Anh",
    reviewerCode3: "D14478",
    reviewerName3: "Nguyễn Yến Linh",
    reviewerCode4: "D1039",
    reviewerName4: "Nguyễn Thị Thu Trang",
    reviewerCode5: "D11054",
    reviewerName5: "Nguyễn Đình Kháng",
    reviewerCode6: "D12228",
    reviewerName6: "Vũ Quỳnh Lan",
    reviewerCode7: "D456",
    reviewerName7: "Trần Thị Lệ Quyên",
    reviewerCode8: "S78",
    reviewerName8: "Bùi Thị Hương",
    isManager: true,
  },
  {
    code: "D14678",
    displayName: "Phạm Thị Hồng Hạnh",
    department: "TLQL bếp bánh",
    managerName: "Trần Phương Anh",
    managerCode: "D388",
    position: "Trợ lý quản lý cửa hàng fulltime",
    email: "honghanhhonghanh26102002@gmail.com",
    reviewerCode1: "D6100",
    reviewerName1: "Vũ Trường Sơn",
    reviewerCode2: "D1039",
    reviewerName2: "Nguyễn Thị Thu Trang",
    reviewerCode3: "D9985",
    reviewerName3: "Nguyễn Thanh Thủy",
    reviewerCode4: "D12474",
    reviewerName4: "Lê Thị Lụa",
    reviewerCode5: "D14435",
    reviewerName5: "Bùi Quân Mạnh",
    reviewerCode6: "",
    reviewerName6: "",
    reviewerCode7: "",
    reviewerName7: "",
    reviewerCode8: "",
    reviewerName8: "",
    isManager: true,
  },
  {
    code: "D14478",
    displayName: "Nguyễn Yến Linh",
    department: "Lịch trực",
    managerName: "Trần Phương Anh",
    managerCode: "D388",
    position: "Nhân viên Training Full-time",
    email: "linh00612201@gmail.com",
    reviewerCode1: "D14423",
    reviewerName1: "Phan Thảo Linh",
    reviewerCode2: "D1039",
    reviewerName2: "Nguyễn Thị Thu Trang",
    reviewerCode3: "D14678",
    reviewerName3: "Phạm Thị Hồng Hạnh",
    reviewerCode4: "D13808",
    reviewerName4: "Phạm Hoàng Yến",
    reviewerCode5: "C635",
    reviewerName5: "Bùi Thu Trang",
    reviewerCode6: "D93",
    reviewerName6: "Nguyễn Thuý Vi",
    reviewerCode7: "D7363",
    reviewerName7: "Mai Chiến Thắng",
    reviewerCode8: "",
    reviewerName8: "",
  },
  {
    code: "D11054",
    displayName: "Nguyễn Đình Kháng",
    department: "Buying",
    managerName: "Vy Tuấn Anh",
    managerCode: "F262",
    position: "Nhân viên mua hàng Full-time",
    email: "dinhkhang2002cr@gmail.com",
    reviewerCode1: "D7973",
    reviewerName1: "Trần Quốc Anh",
    reviewerCode2: "D5841",
    reviewerName2: "Lò Thị Khánh Lâm",
    reviewerCode3: "D14665",
    reviewerName3: "Vũ Minh Hằng",
    reviewerCode4: "D14705",
    reviewerName4: "Nguyễn Diễm Quỳnh",
    reviewerCode5: "D9644",
    reviewerName5: "Mai Thị Hiếu",
    reviewerCode6: "D5093",
    reviewerName6: "Nguyễn Kim Hưng",
    reviewerCode7: "D4553",
    reviewerName7: "Nguyễn Minh Hùng",
    reviewerCode8: "D583",
    reviewerName8: "Nguyễn Thế Anh",
    isManager: true,
  },
  {
    code: "D7973",
    displayName: "Trần Quốc Anh",
    department: "Buying",
    managerName: "Vy Tuấn Anh",
    managerCode: "F262",
    position: "Nhân viên Mua hàng Full-time",
    email: "tranquocanh1001@gmail.com",
    reviewerCode1: "D11054",
    reviewerName1: "Nguyễn Đình Kháng",
    reviewerCode2: "D11150",
    reviewerName2: "Trương Thị Trà Giang",
    reviewerCode3: "S41",
    reviewerName3: "Nguyễn Hữu Long",
    reviewerCode4: "D14705",
    reviewerName4: "Nguyễn Diễm Quỳnh",
    reviewerCode5: "D9644",
    reviewerName5: "Mai Thị Hiếu",
    reviewerCode6: "D1039",
    reviewerName6: "Nguyễn Thị Thu Trang",
    reviewerCode7: "D14678",
    reviewerName7: "Phạm Thị Hồng Hạnh",
    reviewerCode8: "D13808",
    reviewerName8: "Phạm Hoàng Yến",
  },
  {
    code: "D5841",
    displayName: "Lò Thị Khánh Lâm",
    department: "Buying",
    managerName: "Vy Tuấn Anh",
    managerCode: "F262",
    position: "Nhân viên mua hàng Full-time",
    email: "khanhlam3108@gmail.com",
    reviewerCode1: "D11054",
    reviewerName1: "Nguyễn Đình Kháng",
    reviewerCode2: "D7973",
    reviewerName2: "Trần Quốc Anh",
    reviewerCode3: "D14665",
    reviewerName3: "Vũ Minh Hằng",
    reviewerCode4: "D14705",
    reviewerName4: "Nguyễn Diễm Quỳnh",
    reviewerCode5: "S41",
    reviewerName5: "Nguyễn Hữu Long",
    reviewerCode6: "D14406",
    reviewerName6: "Hoàng Văn Huỳnh",
    reviewerCode7: "D9644",
    reviewerName7: "Mai Thị Hiếu",
    reviewerCode8: "D1931",
    reviewerName8: "Lê Thị Chi",
  },
  {
    code: "S110",
    displayName: "Nguyễn Văn Việt",
    department: "MEDIA",
    managerName: "Vy Tuấn Anh",
    managerCode: "F262",
    position: "Graphic Designer, TTL",
    email: "vietxc2014@gmail.com",
    reviewerCode1: "D3267",
    reviewerName1: "Giang Hương Ly",
    reviewerCode2: "D583",
    reviewerName2: "Nguyễn Thế Anh",
    reviewerCode3: "D337",
    reviewerName3: "Nguyễn Thành Nam",
    reviewerCode4: "D708",
    reviewerName4: "Đinh Phương Thảo",
    reviewerCode5: "D14405",
    reviewerName5: "Vũ Thái An",
    reviewerCode6: "D14665",
    reviewerName6: "Vũ Minh Hằng",
    reviewerCode7: "D15862",
    reviewerName7: "Khuất Hải Yến",
    reviewerCode8: "D13006",
    reviewerName8: "Trần Thủy Tiên",
  },
  {
    code: "D337",
    displayName: "Nguyễn Thành Nam",
    department: "R&D",
    managerName: "Vy Tuấn Anh",
    managerCode: "F262",
    position: "Kitchen Manager, Training Executive, TTL",
    email: "thanhnam06121997@gmail.com",
    reviewerCode1: "D583",
    reviewerName1: "Nguyễn Thế Anh",
    reviewerCode2: "S110",
    reviewerName2: "Nguyễn Văn Việt",
    reviewerCode3: "D11054",
    reviewerName3: "Nguyễn Đình Kháng",
    reviewerCode4: "C635",
    reviewerName4: "Bùi Thu Trang",
    reviewerCode5: "D14705",
    reviewerName5: "Nguyễn Diễm Quỳnh",
    reviewerCode6: "D13006",
    reviewerName6: "Trần Thủy Tiên",
    reviewerCode7: "D15862",
    reviewerName7: "Khuất Hải Yến",
    reviewerCode8: "",
    reviewerName8: "",
  },
  {
    code: "D583",
    displayName: "Nguyễn Thế Anh",
    department: "R&D",
    managerName: "Vy Tuấn Anh",
    managerCode: "F262",
    position: "Nhân viên R&D Full-time",
    email: "theanh2726@gmail.com",
    reviewerCode1: "D337",
    reviewerName1: "Nguyễn Thành Nam",
    reviewerCode2: "S110",
    reviewerName2: "Nguyễn Văn Việt",
    reviewerCode3: "D3267",
    reviewerName3: "Giang Hương Ly",
    reviewerCode4: "D6100",
    reviewerName4: "Vũ Trường Sơn",
    reviewerCode5: "D14405",
    reviewerName5: "Vũ Thái An",
    reviewerCode6: "D1039",
    reviewerName6: "Nguyễn Thị Thu Trang",
    reviewerCode7: "D14678",
    reviewerName7: "Phạm Thị Hồng Hạnh",
    reviewerCode8: "D13808",
    reviewerName8: "Phạm Hoàng Yến",
  },
  {
    code: "D8013",
    displayName: "Lý Trung Hậu",
    department: "CB",
    managerName: "Vy Tuấn Anh",
    managerCode: "F262",
    position: "Nhân viên Chính sách nhân sự Full-time",
    email: "trungghau0310@gmail.com",
    reviewerCode1: "D583",
    reviewerName1: "Nguyễn Thế Anh",
    reviewerCode2: "D337",
    reviewerName2: "Nguyễn Thành Nam",
    reviewerCode3: "D703",
    reviewerName3: "Nguyễn Huyền Trang",
    reviewerCode4: "D13006",
    reviewerName4: "Trần Thủy Tiên",
    reviewerCode5: "D15862",
    reviewerName5: "Khuất Hải Yến",
    reviewerCode6: "D4086",
    reviewerName6: "Đặng Kim Xuân",
    reviewerCode7: "D7954",
    reviewerName7: "Dương Văn Vững",
    reviewerCode8: "S110",
    reviewerName8: "Nguyễn Văn Việt",
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
