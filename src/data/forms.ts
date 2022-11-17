import _ from "lodash";

export const forms = [
  {
    code: "D3982",
    displayName: "Hoàng Văn Luýt",
    department: "HCM",
    position: "Nhân viên giám sát chất lượng",
    email: "hvl.luyt@gmail.com",
    pic: "Dương Thị Nhung",
    group: 1,
    reviewerCode1: "D7886",
    reviewerName1: "Đàm Dĩnh Thanh",
    reviewerCode2: "D4131",
    reviewerName2: "Huỳnh Lê Thanh Thuận",
    reviewerCode3: "D8492",
    reviewerName3: "Vương Cẩm Tú",
    reviewerCode4: "D1886",
    reviewerName4: "Phùng Thị Ngọc Tuyết",
    reviewerCode5: "",
    reviewerName5: "",
    managerCode: "D327",
    managerName: "Dương Thị Nhung",
  },
  {
    code: "S306",
    displayName: "Nguyễn Thị Ngọc Anh",
    department: "Kiểm toán",
    position: "Kiểm toán viên nội bộ",
    email: "ngocanhnguyen1698@gmail.com",
    pic: "Dương Thị Nhung",
    group: 1,
    reviewerCode1: "D4553",
    reviewerName1: "Nguyễn Minh Hùng",
    reviewerCode2: "D5915",
    reviewerName2: "Phùng Hải Long",
    reviewerCode3: "D5093",
    reviewerName3: "Nguyễn Kim Hưng",
    reviewerCode4: "E09",
    reviewerName4: "Chu Huy Thắng",
    reviewerCode5: "",
    reviewerName5: "",
    managerCode: "D327",
    managerName: "Dương Thị Nhung",
  },
  {
    code: "D4553",
    displayName: "Nguyễn Minh Hùng",
    department: "Kiểm toán",
    position: "Kiểm toán viên nội bộ",
    email: "Ngminhhung1102@gmail.com",
    pic: "Dương Thị Nhung",
    group: 1,
    reviewerCode1: "D248",
    reviewerName1: "Ngô Dương Hương",
    reviewerCode2: "D5915",
    reviewerName2: "Phùng Hải Long",
    reviewerCode3: "D1029",
    reviewerName3: "Lê Thị Hương",
    reviewerCode4: "D4309",
    reviewerName4: "Nguyễn Văn Cương",
    reviewerCode5: "",
    reviewerName5: "",
    managerCode: "S306",
    managerName: "Nguyễn Thị Ngọc Anh",
  },
  {
    code: "D5915",
    displayName: "Phùng Hải Long",
    department: "Kiểm toán",
    position: "Kiểm toán viên nội bộ",
    email: "longphung.2105@gmail.com",
    pic: "Dương Thị Nhung",
    group: 1,
    reviewerCode1: "S78",
    reviewerName1: "Bùi Thị Hương",
    reviewerCode2: "D557",
    reviewerName2: "Vũ Thị Lành",
    reviewerCode3: "D5093",
    reviewerName3: "Nguyễn Kim Hưng",
    reviewerCode4: "E09",
    reviewerName4: "Chu Huy Thắng",
    reviewerCode5: "",
    reviewerName5: "",
    managerCode: "S306",
    managerName: "Nguyễn Thị Ngọc Anh",
  },
  {
    code: "D1516",
    displayName: "Nguyễn Thùy Dương",
    department: "QC",
    position: "Nhân viên giám sát chất lượng",
    email: "duongnguyenthuy276@gmail.com",
    pic: "Dương Thị Nhung",
    group: 1,
    reviewerCode1: "D7886",
    reviewerName1: "Đàm Dĩnh Thanh",
    reviewerCode2: "D5939",
    reviewerName2: "Nguyễn Đắc Dũng",
    reviewerCode3: "D2825",
    reviewerName3: "Phạm Ngọc Quỳnh",
    reviewerCode4: "D5730",
    reviewerName4: "Nguyễn Tuấn Anh",
    reviewerCode5: "D7120 ",
    reviewerName5: "Nguyễn Hải Long",
    managerCode: "D327",
    managerName: "Dương Thị Nhung",
  },
  {
    code: "D2825",
    displayName: "Phạm Ngọc Quỳnh",
    department: "QC",
    position: "Nhân viên giám sát chất lượng",
    email: "quynhngoc.1803@gmail.com",
    pic: "Dương Thị Nhung",
    group: 1,
    reviewerCode1: "M30",
    reviewerName1: "Lê Thị Mơ",
    reviewerCode2: "D6794",
    reviewerName2: "Hoàng Đình Hiếu",
    reviewerCode3: "D93",
    reviewerName3: "Nguyễn Thúy Vi",
    reviewerCode4: "D570",
    reviewerName4: "Hà Thị Trà My",
    reviewerCode5: "D6795",
    reviewerName5: "Trần Thị Hiền",
    managerCode: "D327",
    managerName: "Dương Thị Nhung",
  },
  {
    code: "D7886",
    displayName: "Đàm Dĩnh Thanh",
    department: "QC",
    position: "Nhân viên giám sát chất lượng",
    email: "damdinhthanh.97@gmail.com",
    pic: "Dương Thị Nhung",
    group: 1,
    reviewerCode1: "D4086",
    reviewerName1: "Đặng Kim Xuân ",
    reviewerCode2: "D1886",
    reviewerName2: "Phùng Thị Ngọc Tuyết",
    reviewerCode3: "D4131",
    reviewerName3: "Huỳnh Lê Thanh Thuận",
    reviewerCode4: "D1885Phùng Thị Ngọc Nhi",
    reviewerName4: "D3982",
    reviewerCode5: "Hoàng Văn Luýt",
    reviewerName5: "",
    managerCode: "D327",
    managerName: "Dương Thị Nhung",
  },
  {
    code: "D6794",
    displayName: "Hoàng Đình Hiếu",
    department: "QC",
    position: "Nhân viên giám sát chất lượng",
    email: "hieuuuu2002@gmail.com",
    pic: "Dương Thị Nhung",
    group: 1,
    reviewerCode1: "D169",
    reviewerName1: "Trương Thị Thu Hằng",
    reviewerCode2: "D570",
    reviewerName2: "Hà Thị Trà My ",
    reviewerCode3: "D583 ",
    reviewerName3: "Nguyễn Thế Anh",
    reviewerCode4: "D93",
    reviewerName4: " Nguyễn Thúy Vi",
    reviewerCode5: "",
    reviewerName5: "",
    managerCode: "D2825",
    managerName: "Phạm Ngọc Quỳnh",
  },
  {
    code: "D6795",
    displayName: "Trần Thị Hiền",
    department: "QC",
    position: "Nhân viên giám sát chất lượng",
    email: "tranhien1996.hn@gmail.com",
    pic: "Dương Thị Nhung",
    group: 1,
    reviewerCode1: "D5093",
    reviewerName1: "Nguyễn Kim Hưng",
    reviewerCode2: "D557        ",
    reviewerName2: "Vũ Thị Lành",
    reviewerCode3: "D583        ",
    reviewerName3: "Nguyễn Thế Anh",
    reviewerCode4: "",
    reviewerName4: "",
    reviewerCode5: "",
    reviewerName5: "",
    managerCode: "D2825",
    managerName: "Phạm Ngọc Quỳnh",
  },
  {
    code: "D570",
    displayName: "Hà Thị Trà My ",
    department: "QC",
    position: "Nhân viên giám sát chất lượng",
    email: "hathitramy2512@gmail.com\t",
    pic: "Dương Thị Nhung",
    group: 1,
    reviewerCode1: "D1516",
    reviewerName1: "Nguyễn Thùy Dương",
    reviewerCode2: "D931",
    reviewerName2: "Ngô Thị Huyền",
    reviewerCode3: "D8500",
    reviewerName3: "Nguyễn Hoàng Phương Anh",
    reviewerCode4: "",
    reviewerName4: "",
    reviewerCode5: "",
    reviewerName5: "",
    managerCode: "D2825",
    managerName: "Phạm Ngọc Quỳnh",
  },
  {
    code: "D169",
    displayName: "Trương Thị Thu Hằng",
    department: "BS",
    position: "Chuyên viên phân tích dữ liệu",
    email: "truongthuhang.28041998@gmail.com",
    pic: "Lê Tuấn Hiệp",
    group: 1,
    reviewerCode1: "E09",
    reviewerName1: "Chu Huy Thắng",
    reviewerCode2: "D5939",
    reviewerName2: "Nguyễn Đắc Dũng",
    reviewerCode3: "D4309",
    reviewerName3: "Nguyễn Văn Cương",
    reviewerCode4: "D557",
    reviewerName4: "Vũ Thị Lành",
    reviewerCode5: "",
    reviewerName5: "",
    managerCode: "F432",
    managerName: "Lê Tuấn Hiệp",
  },
  {
    code: "D708",
    displayName: "Đinh Phương Thảo",
    department: "BS",
    position: "Lập trình viên Full stack",
    email: "dinhphuongthaoqia@gmail.com",
    pic: "Lê Tuấn Hiệp",
    group: 1,
    reviewerCode1: "E09",
    reviewerName1: "Chu Huy Thắng",
    reviewerCode2: "E96",
    reviewerName2: "Vũ Đức Trung",
    reviewerCode3: "E98",
    reviewerName3: "Đỗ Tấn Lập",
    reviewerCode4: "D1584",
    reviewerName4: "Nguyễn Anh Tuấn",
    reviewerCode5: "D703",
    reviewerName5: "Nguyễn Huyền Trang",
    managerCode: "F432",
    managerName: "Lê Tuấn Hiệp",
  },
  {
    code: "D4309",
    displayName: "Nguyễn Văn Cương",
    department: "BS",
    position: "Chuyên viên phân tích dữ liệu",
    email: "cuongnv.1512@gmail.com",
    pic: "Lê Tuấn Hiệp",
    group: 1,
    reviewerCode1: "D8492",
    reviewerName1: "Vương Cẩm Tú",
    reviewerCode2: "D388",
    reviewerName2: "Trần Phương Anh",
    reviewerCode3: "D7953",
    reviewerName3: "Trần Thu Hằng",
    reviewerCode4: "M30",
    reviewerName4: "Lê Thị Mơ",
    reviewerCode5: "",
    reviewerName5: "",
    managerCode: "F432",
    managerName: "Lê Tuấn Hiệp",
  },
  {
    code: "C037",
    displayName: "Nguyễn Thị Quỳnh",
    department: "KT",
    position: "Kế toán tổng hợp",
    email: "ntquynh05@gmail.com",
    pic: "Lê Tuấn Hiệp",
    group: 1,
    reviewerCode1: "D5939",
    reviewerName1: "Nguyễn Đắc Dũng",
    reviewerCode2: "D703",
    reviewerName2: "Nguyễn Huyền Trang",
    reviewerCode3: "D5915",
    reviewerName3: "Phùng Hải Long",
    reviewerCode4: "E73",
    reviewerName4: "Nguyễn Anh Tú",
    reviewerCode5: "",
    reviewerName5: "",
    managerCode: "F432",
    managerName: "Lê Tuấn Hiệp",
  },
  {
    code: "D5939",
    displayName: "Nguyễn Đắc Dũng",
    department: "KT",
    position: "Kế toán tổng hợp",
    email: "dungdark97@gmail.com",
    pic: "Lê Tuấn Hiệp",
    group: 1,
    reviewerCode1: "C037",
    reviewerName1: "Nguyễn Thị Quỳnh",
    reviewerCode2: "D703",
    reviewerName2: "Nguyễn Huyền Trang",
    reviewerCode3: "D5915",
    reviewerName3: "Phùng Hải Long",
    reviewerCode4: "D2527",
    reviewerName4: "Lê Thị Thơm",
    reviewerCode5: "",
    reviewerName5: "",
    managerCode: "F432",
    managerName: "Lê Tuấn Hiệp",
  },
  {
    code: "D703",
    displayName: "Nguyễn Huyền Trang",
    department: "Pháp chế",
    position: "Chuyên viên pháp chế",
    email: "Blackpage60@gmail.com",
    pic: "Lê Tuấn Hiệp",
    group: 1,
    reviewerCode1: "C037",
    reviewerName1: "Nguyễn Thị Quỳnh",
    reviewerCode2: "D5939",
    reviewerName2: "Nguyễn Đắc Dũng",
    reviewerCode3: "D7953",
    reviewerName3: "Trần Thu Hằng",
    reviewerCode4: "D2607",
    reviewerName4: "Nguyễn Bá Nam",
    reviewerCode5: "D79",
    reviewerName5: "Nguyễn Thị Mỹ Linh",
    managerCode: "F432",
    managerName: "Lê Tuấn Hiệp",
  },
  {
    code: "E09",
    displayName: "Chu Huy Thắng",
    department: "Tech",
    position: "Lập trình viên Full stack",
    email: "chuthang205@gmail.com",
    pic: "Lê Tuấn Hiệp",
    group: 1,
    reviewerCode1: "D169",
    reviewerName1: "Trương Thị Thu Hằng",
    reviewerCode2: "D708",
    reviewerName2: "Đinh Phương Thảo",
    reviewerCode3: "S306",
    reviewerName3: "Nguyễn Thị Ngọc Anh",
    reviewerCode4: "E96",
    reviewerName4: "Vũ Đức Trung",
    reviewerCode5: "E98",
    reviewerName5: "Đỗ Tấn Lập",
    managerCode: "F432",
    managerName: "Lê Tuấn Hiệp",
  },
  {
    code: "D3793",
    displayName: "Trương Văn Vỹ",
    department: "HC",
    position: "IT helpdesk",
    email: "truongvybhtv@gmail.com",
    pic: "Trần Anh Dũng",
    group: 1,
    reviewerCode1: "D2825",
    reviewerName1: "Phạm Ngọc Quỳnh",
    reviewerCode2: "C037",
    reviewerName2: "Nguyễn Thị Quỳnh",
    reviewerCode3: "S146",
    reviewerName3: "Bùi Văn Vương",
    reviewerCode4: "D2537",
    reviewerName4: "Nguyễn Văn Thao",
    reviewerCode5: "D93",
    reviewerName5: "Nguyễn Thúy Vi",
    managerCode: "E73",
    managerName: "Nguyễn Anh Tú",
  },
  {
    code: "E73",
    displayName: "Nguyễn Anh Tú",
    department: "HC",
    position: "IT helpdesk",
    email: "anhtuas123@gmail.com",
    pic: "Trần Anh Dũng",
    group: 1,
    reviewerCode1: "D388",
    reviewerName1: "Trần Phương Anh",
    reviewerCode2: "C037",
    reviewerName2: "Nguyễn Thị Quỳnh",
    reviewerCode3: "S146",
    reviewerName3: "Bùi Văn Vương",
    reviewerCode4: "D2537",
    reviewerName4: "Nguyễn Văn Thao",
    reviewerCode5: "D7721",
    reviewerName5: "Trịnh Văn Tiến",
    managerCode: "F688",
    managerName: "Trần Anh Dũng",
  },
  {
    code: "S146",
    displayName: "Bùi Văn Vương",
    department: "HC",
    position: "Nhân viên kỹ thuật nội thất",
    email: "vuong7815@gmail.com",
    pic: "Trần Anh Dũng",
    group: 1,
    reviewerCode1: "D93",
    reviewerName1: "Nguyễn Thúy Vi",
    reviewerCode2: "D2825",
    reviewerName2: "Phạm Ngọc Quỳnh",
    reviewerCode3: "D2537",
    reviewerName3: "Nguyễn Văn Thao",
    reviewerCode4: "D3982\t",
    reviewerName4: "Hoàng Văn Luýt",
    reviewerCode5: "D583",
    reviewerName5: "Nguyễn Thế Anh",
    managerCode: "E73",
    managerName: "Nguyễn Anh Tú",
  },
  {
    code: "D2537",
    displayName: "Nguyễn Văn Thao",
    department: "HC",
    position: "Nhân viên kỹ thuật điện nước",
    email: "ngocthao060690@gmail.com",
    pic: "Trần Anh Dũng",
    group: 1,
    reviewerCode1: "S146",
    reviewerName1: "Bùi Văn Vương",
    reviewerCode2: "E73",
    reviewerName2: "Nguyễn Anh Tú",
    reviewerCode3: "D1906",
    reviewerName3: "Nguyễn Quang Bình",
    reviewerCode4: "D3793",
    reviewerName4: "Trương Văn Vỹ",
    reviewerCode5: "D557",
    reviewerName5: "Vũ Thị Lành",
    managerCode: "E73",
    managerName: "Nguyễn Anh Tú",
  },
  {
    code: "D2607",
    displayName: "Nguyễn Bá Nam",
    department: "HR",
    position: "Chuyên viên nhân sự tổng hợp",
    email: "namnguyenba9x@gmail.com",
    pic: "Trần Anh Dũng",
    group: 1,
    reviewerCode1: "D7954",
    reviewerName1: "Dương Văn Vững",
    reviewerCode2: "D327",
    reviewerName2: "Dương Thị Nhung",
    reviewerCode3: "D7287",
    reviewerName3: "Doãn Thị Ngọc Ánh",
    reviewerCode4: "D79",
    reviewerName4: "Nguyễn Thị Mỹ Linh",
    reviewerCode5: "D703",
    reviewerName5: "Nguyễn Huyền Trang",
    managerCode: "F688",
    managerName: "Trần Anh Dũng",
  },
  {
    code: "D7287",
    displayName: "Doãn Thị Ngọc Ánh",
    department: "HR2",
    position: "Chuyên viên Tuyển dụng",
    email: "doanthingocanh1605@gmail.com",
    pic: "Trần Anh Dũng",
    group: 1,
    reviewerCode1: "D717",
    reviewerName1: "Vũ Thúy Nhật",
    reviewerCode2: "D8013",
    reviewerName2: "Lý Trung Hậu",
    reviewerCode3: "D8732",
    reviewerName3: "Phạm Quỳnh Chi",
    reviewerCode4: "D7954",
    reviewerName4: "Dương Văn Vững",
    reviewerCode5: "",
    reviewerName5: "",
    managerCode: "D2607",
    managerName: "Nguyễn Bá Nam",
  },
  {
    code: "D7954",
    displayName: "Dương Văn Vững",
    department: "HR2",
    position: "Chuyên viên Tuyển dụng",
    email: "duongvung1003@gmail.com",
    pic: "Trần Anh Dũng",
    group: 1,
    reviewerCode1: "D717",
    reviewerName1: "Vũ Thúy Nhật",
    reviewerCode2: "D7287",
    reviewerName2: "Doãn Thị Ngọc Ánh",
    reviewerCode3: "D8013",
    reviewerName3: "Lý Trung Hậu",
    reviewerCode4: "E09",
    reviewerName4: "Chu Huy Thắng",
    reviewerCode5: "D7953",
    reviewerName5: "Trần Thu Hằng",
    managerCode: "D2607",
    managerName: "Nguyễn Bá Nam",
  },
  {
    code: "D479",
    displayName: "Nguyễn Minh Ngọc",
    department: "Training",
    position: "Chuyên viên đào tạo và phát triển",
    email: "hastagminhngoc@gmail.com",
    pic: "Trần Anh Dũng",
    group: 1,
    reviewerCode1: "D2406",
    reviewerName1: "Lê Minh Nguyệt",
    reviewerCode2: "D7954",
    reviewerName2: "Dương Văn Vững",
    reviewerCode3: "D2607",
    reviewerName3: "Nguyễn Bá Nam",
    reviewerCode4: "D557",
    reviewerName4: "Vũ Thị Lành",
    reviewerCode5: "D5730",
    reviewerName5: "Nguyễn Tuấn Anh",
    managerCode: "D79",
    managerName: "Nguyễn Thị Mỹ Linh",
  },
  {
    code: "D717",
    displayName: "Vũ Thúy Nhật",
    department: "Training",
    position: "Chuyên viên đào tạo và phát triển",
    email: "v.thuy.nhatt@gmail.com",
    pic: "Trần Anh Dũng",
    group: 1,
    reviewerCode1: "D93",
    reviewerName1: "Nguyễn Thúy Vi",
    reviewerCode2: "D79",
    reviewerName2: "Nguyễn Thị Mỹ Linh",
    reviewerCode3: "D7954",
    reviewerName3: "Dương Văn Vững",
    reviewerCode4: "D557",
    reviewerName4: "Vũ Thị Lành",
    reviewerCode5: "D7751",
    reviewerName5: "Trần Hoàng Vy",
    managerCode: "D79",
    managerName: "Nguyễn Thị Mỹ Linh",
  },
  {
    code: "D79",
    displayName: "Nguyễn Thị Mỹ Linh",
    department: "Training",
    position: "Chuyên viên đào tạo và phát triển",
    email: "linhxu271196@gmail.com",
    pic: "Trần Anh Dũng",
    group: 1,
    reviewerCode1: "D2607",
    reviewerName1: "Nguyễn Bá Nam",
    reviewerCode2: "D7751",
    reviewerName2: "Trần Hoàng Vy",
    reviewerCode3: "D93",
    reviewerName3: "Nguyễn Thúy Vi",
    reviewerCode4: "D717",
    reviewerName4: "Vũ Thúy Nhật",
    reviewerCode5: "D479",
    reviewerName5: "Nguyễn Minh Ngọc",
    managerCode: "F688",
    managerName: "Trần Anh Dũng",
  },
  {
    code: "D93",
    displayName: "Nguyễn Thúy Vi",
    department: "Training",
    position: "Chuyên viên đào tạo và phát triển",
    email: "thuyvi11196@gmail.com",
    pic: "Trần Anh Dũng",
    group: 1,
    reviewerCode1: "D2825",
    reviewerName1: "Phạm Ngọc Quỳnh",
    reviewerCode2: "D7954",
    reviewerName2: "Dương Văn Vững",
    reviewerCode3: "E73",
    reviewerName3: "Nguyễn Anh Tú",
    reviewerCode4: "D6794",
    reviewerName4: "Hoàng Đình Hiếu",
    reviewerCode5: "D7751",
    reviewerName5: "Trần Hoàng Vy",
    managerCode: "D79",
    managerName: "Nguyễn Thị Mỹ Linh",
  },
  {
    code: "D1394",
    displayName: "Nguyễn Trường Giang",
    department: "B1",
    position: "Quản lý sản xuất bếp",
    email: "giangmda1810@gmail.com",
    pic: "Trần Phương Anh",
    group: 1,
    reviewerCode1: "D557",
    reviewerName1: "Vũ Thị Lành",
    reviewerCode2: "D3962",
    reviewerName2: "Nguyễn Thị Duyên",
    reviewerCode3: "D5915",
    reviewerName3: "Phùng Hải Long",
    reviewerCode4: "D2010",
    reviewerName4: "Đỗ Ngọc Cương",
    reviewerCode5: "C635",
    reviewerName5: "Bùi Thu Trang",
    managerCode: "D557",
    managerName: "Vũ Thị Lành",
  },
  {
    code: "D583",
    displayName: "Nguyễn Thế Anh",
    department: "B1",
    position: "Quản lý sản xuất bếp",
    email: "theanh2726@gmail.com",
    pic: "Trần Phương Anh",
    group: 1,
    reviewerCode1: "D557",
    reviewerName1: "Vũ Thị Lành",
    reviewerCode2: "D5730",
    reviewerName2: "Nguyễn Tuấn Anh",
    reviewerCode3: "D5915",
    reviewerName3: "Phùng Hải Long",
    reviewerCode4: "S78",
    reviewerName4: "Bùi Thị Hương",
    reviewerCode5: "D6794",
    reviewerName5: "Hoàng Đình Hiếu",
    managerCode: "D557",
    managerName: "Vũ Thị Lành",
  },
  {
    code: "D557",
    displayName: "Vũ Thị Lành",
    department: "Kho - ĐG",
    position: "Quản lý sản xuất bếp",
    email: "vulanhk59bka@gmail.com",
    pic: "Trần Phương Anh",
    group: 1,
    reviewerCode1: "D169",
    reviewerName1: "Trương Thị Thu Hằng",
    reviewerCode2: "S306",
    reviewerName2: "Nguyễn Ngọc Anh",
    reviewerCode3: "D5169",
    reviewerName3: "Vũ Thị Linh Chi",
    reviewerCode4: "D583",
    reviewerName4: "Nguyễn Thế Anh",
    reviewerCode5: "D6795",
    reviewerName5: "Trần Thị Hiền",
    managerCode: "D388",
    managerName: "Trần Phương Anh",
  },
  {
    code: "S41",
    displayName: "Nguyễn Hữu Long",
    department: "Kho - ĐG",
    position: "Quản lý vận hành kho",
    email: "nhlong2107@gmail.com",
    pic: "Trần Phương Anh",
    group: 1,
    reviewerCode1: "D5841",
    reviewerName1: "Lò Thị Khánh Lâm",
    reviewerCode2: "S78",
    reviewerName2: "Bùi Thị Hương",
    reviewerCode3: "D8492",
    reviewerName3: "Vương Cẩm Tú",
    reviewerCode4: "D6794",
    reviewerName4: "Hoàng Đình Hiếu",
    reviewerCode5: "D5093",
    reviewerName5: "Nguyễn Kim Hưng",
    managerCode: "D388",
    managerName: "Trần Phương Anh",
  },
  {
    code: "S78",
    displayName: "Bùi Thị Hương",
    department: "Kho - ĐG",
    position: "Quản lý vận hành kho",
    email: "buihuong17101997@gmail.com",
    pic: "Trần Phương Anh",
    group: 1,
    reviewerCode1: "D583",
    reviewerName1: "Nguyễn Thế Anh",
    reviewerCode2: "D5915",
    reviewerName2: "Phùng Hải Long",
    reviewerCode3: "S306",
    reviewerName3: "Nguyễn Thị Ngọc Anh",
    reviewerCode4: "D557",
    reviewerName4: "Vũ Thị Lành",
    reviewerCode5: "C635",
    reviewerName5: "Bùi Thu Trang",
    managerCode: "D388",
    managerName: "Trần Phương Anh",
  },
  {
    code: "D5093",
    displayName: "Nguyễn Kim Hưng",
    department: "Kho - ĐG",
    position: "Quản lý vận hành kho",
    email: "ngungsuong.nkh97@gmail.com",
    pic: "Trần Phương Anh",
    group: 1,
    reviewerCode1: "S78",
    reviewerName1: "Bùi Thị Hương",
    reviewerCode2: "D7953",
    reviewerName2: "Trần Thu Hằng",
    reviewerCode3: "D8492",
    reviewerName3: "Vương Cẩm Tú",
    reviewerCode4: "E73",
    reviewerName4: "Nguyễn Anh Tú",
    reviewerCode5: "D6795",
    reviewerName5: "Trần Thị Hiền",
    managerCode: "D388",
    managerName: "Trần Phương Anh",
  },
  {
    code: "D5730",
    displayName: "Nguyễn Tuấn Anh",
    department: "Kho - ĐG",
    position: "Quản lý vận hành kho",
    email: "tuananhz4.pt@gmail.com",
    pic: "Trần Phương Anh",
    group: 1,
    reviewerCode1: "D6794",
    reviewerName1: "Hoàng Đình Hiếu",
    reviewerCode2: "D5169",
    reviewerName2: "Vũ Thị Linh Chi",
    reviewerCode3: "D583",
    reviewerName3: "Nguyễn Thế Anh",
    reviewerCode4: "D5915",
    reviewerName4: "Phùng Hải Long",
    reviewerCode5: "E73",
    reviewerName5: "Nguyễn Anh Tú",
    managerCode: "D388",
    managerName: "Trần Phương Anh",
  },
  {
    code: "D8492",
    displayName: "Vương Cẩm Tú",
    department: "Logistics",
    position: "Nhân viên điều phối Full - time",
    email: "camtu3224@gmail.com",
    pic: "Trần Phương Anh",
    group: 1,
    reviewerCode1: "D3982",
    reviewerName1: "Hoàng Văn Luýt",
    reviewerCode2: "D7953",
    reviewerName2: "Trần Thu Hằng",
    reviewerCode3: "D4309",
    reviewerName3: "Nguyễn Văn Cương",
    reviewerCode4: "S41",
    reviewerName4: "Nguyễn Hữu Long",
    reviewerCode5: "D5730",
    reviewerName5: "Nguyễn Tuấn Anh",
    managerCode: "D388",
    managerName: "Trần Phương Anh",
  },
  {
    code: "D8818",
    displayName: "Đào Văn Toàn",
    department: "B5",
    position: "Thợ bánh Full-time",
    email: "toanki2604@gmail.com",
    pic: "Trần Phương Anh",
    group: 1,
    reviewerCode1: "D557",
    reviewerName1: "Vũ Thị Lành",
    reviewerCode2: "C635",
    reviewerName2: "Bùi Thu Trang",
    reviewerCode3: "D583",
    reviewerName3: "Nguyễn Thế Anh",
    reviewerCode4: "D9212",
    reviewerName4: "Trần Quang Huy",
    reviewerCode5: "",
    reviewerName5: "",
    managerCode: "D557",
    managerName: "Vũ Thị Lành",
  },
  {
    code: "M30",
    displayName: "Lê Thị Mơ",
    department: "HR",
    position: "Chuyên viên nhân sự tổng hợp",
    email: "lemoql1996@gmail.com",
    pic: "Vy Tuấn Anh",
    group: 1,
    reviewerCode1: "D2825",
    reviewerName1: "Phạm Ngọc Quỳnh",
    reviewerCode2: "D4309",
    reviewerName2: "Nguyễn Văn Cương",
    reviewerCode3: "D8925",
    reviewerName3: "Tạ Anh Bách",
    reviewerCode4: "D7287",
    reviewerName4: "Doãn Thị Ngọc Ánh",
    reviewerCode5: "D3507",
    reviewerName5: "Văn Thành Nam\t",
    managerCode: "F262",
    managerName: "Vy Tuấn Anh",
  },
  {
    code: "S110",
    displayName: "Nguyễn Văn Việt",
    department: "OFFICE",
    position: "Graphic Designer",
    email: "vietxc2014@gmail.com",
    pic: "Vy Tuấn Anh",
    group: 1,
    reviewerCode1: "D337",
    reviewerName1: "Nguyễn Thành Nam",
    reviewerCode2: "D708",
    reviewerName2: "Đinh Phương Thảo",
    reviewerCode3: "D4309",
    reviewerName3: "Nguyễn Văn Cương",
    reviewerCode4: "E09",
    reviewerName4: "Chu Huy Thắng",
    reviewerCode5: "M30",
    reviewerName5: "Lê Thị Mơ",
    managerCode: "F262",
    managerName: "Vy Tuấn Anh",
  },
  {
    code: "D337",
    displayName: "Nguyễn Thành Nam",
    department: "R&D",
    position: "Nhân viên phát triển sản phẩm",
    email: "thanhnam06121997@gmail.com",
    pic: "Vy Tuấn Anh",
    group: 1,
    reviewerCode1: "D583",
    reviewerName1: "Nguyễn Thế Anh",
    reviewerCode2: "D557",
    reviewerName2: "Vũ Thị Lành",
    reviewerCode3: "S110",
    reviewerName3: "Nguyễn Văn Việt",
    reviewerCode4: "D5169",
    reviewerName4: "Vũ Thị Linh Chi",
    reviewerCode5: "D5093",
    reviewerName5: "Nguyễn Kim Hưng",
    managerCode: "F262",
    managerName: "Vy Tuấn Anh",
  },
  {
    code: "D7953",
    displayName: "Trần Thu Hằng",
    department: "Purchasing",
    position: "Chuyên viên mua hàng",
    email: "hangtran601@gmail.com",
    pic: "Vy Tuấn Anh",
    group: 1,
    reviewerCode1: "D5169",
    reviewerName1: "Vũ Thị Linh Chi",
    reviewerCode2: "D5841",
    reviewerName2: "Lò Thị Khánh Lâm",
    reviewerCode3: "D8492",
    reviewerName3: "Vương Cẩm Tú",
    reviewerCode4: "D703",
    reviewerName4: "Nguyễn Huyền Trang",
    reviewerCode5: "D5093",
    reviewerName5: "Nguyễn Kim Hưng",
    managerCode: "F262",
    managerName: "Vy Tuấn Anh",
  },
  {
    code: "D5169",
    displayName: "Vũ Thị Linh Chi",
    department: "Purchasing",
    position: "Chuyên viên mua hàng",
    email: "chinaxu137@gmail.com",
    pic: "Vy Tuấn Anh",
    group: 1,
    reviewerCode1: "D7953",
    reviewerName1: "Trần Thu Hằng",
    reviewerCode2: "D8492",
    reviewerName2: "Vương Cẩm Tú",
    reviewerCode3: "D5730",
    reviewerName3: "Nguyễn Tuấn Anh",
    reviewerCode4: "D703",
    reviewerName4: "Nguyễn Huyền Trang",
    reviewerCode5: "",
    reviewerName5: "",
    managerCode: "F262",
    managerName: "Vy Tuấn Anh",
  },
  {
    code: "D327",
    displayName: "Dương Thị Nhung",
    department: "QC",
    position: "Quality Supervisor Manager",
    email: "duongnhung65@gmail.com",
    pic: "Vy Tuấn Anh",
    group: 1,
    reviewerCode1: "D169",
    reviewerName1: "Trương Thị Thu Hằng",
    reviewerCode2: "D5915",
    reviewerName2: "Phùng Hải Long",
    reviewerCode3: "E73",
    reviewerName3: "Nguyễn Anh Tú",
    reviewerCode4: "D2607",
    reviewerName4: "Nguyễn Bá Nam",
    reviewerCode5: "D4553",
    reviewerName5: "Nguyễn Minh Hùng",
    managerCode: "F262",
    managerName: "Vy Tuấn Anh",
  },
  {
    code: "D388",
    displayName: "Trần Phương Anh",
    department: "Kho - ĐG",
    position: "Trưởng phòng kho vận",
    email: "tpa2498@gmail.com",
    pic: "Vy Tuấn Anh",
    group: 1,
    reviewerCode1: "D7953",
    reviewerName1: "Trần Thu Hằng",
    reviewerCode2: "D5915",
    reviewerName2: "Phùng Hải Long",
    reviewerCode3: "E73",
    reviewerName3: "Nguyễn Anh Tú",
    reviewerCode4: "D2607",
    reviewerName4: "Nguyễn Bá Nam",
    reviewerCode5: "D6795",
    reviewerName5: "Trần Thị Hiền",
    managerCode: "F262",
    managerName: "Vy Tuấn Anh",
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
