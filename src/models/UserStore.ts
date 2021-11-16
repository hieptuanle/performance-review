import { makeObservable, observable } from "mobx";
import { RootStore } from "./RootStore";

export class UserStore {
  rootStore: RootStore;

  users = users;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;

    makeObservable(this, {
      users: observable,
    });
  }
}

const users = [
  {
    displayName: "Nguyễn Thị Quỳnh",
    code: "C037",
    email: "ntquynh05@gmail.com",
  },
  {
    email: "duongnguyenthuy276@gmail.com",
    code: "D1516",
    displayName: "Nguyễn Thùy Dương",
  },
  {
    displayName: "Trương Thị Thu Hằng",
    code: "D169",
    email: "truongthuhang.28041998@gmail.com",
  },
  {
    email: "trieuvy2508@gmail.com",
    code: "D1775",
    displayName: "Triệu Hà Vy",
  },
  {
    email: "phungthingoctuyet1511@gmail.com",
    code: "D1886",
    displayName: "Phùng Thị Ngọc Tuyết",
  },
  {
    email: "ngocthao060690@gmail.com",
    code: "D2537",
    displayName: "Nguyễn Văn Thao",
  },
  {
    email: "namnguyenba9x@gmail.com",
    code: "D2607",
    displayName: "Nguyễn Bá Nam",
  },
  {
    email: "diepyeol61@gmail.com",
    code: "D2680",
    displayName: "Nguyễn Thị Diệp",
  },
  {
    email: "quynhngoc.1803@gmail.com",
    code: "D2825",
    displayName: "Phạm Ngọc Quỳnh",
  },
  {
    email: "lethanhphuong070820@gmail.com",
    code: "D3138",
    displayName: "Lê Thị Thanh Phương",
  },
  {
    email: "duongnhung65@gmail.com",
    code: "D327",
    displayName: "Dương Thị Nhung",
  },
  {
    email: "thanhnam06121997@gmail.com",
    code: "D337",
    displayName: "Nguyễn Thành Nam",
  },
  {
    email: "tpa2498@gmail.com",
    code: "D388",
    displayName: "Trần Phương Anh",
  },
  {
    email: "hvl.luyt@gmail.com",
    code: "D3982",
    displayName: "Hoàng Văn Luýt",
  },
  {
    email: "duongcongth@outlook.com.vn",
    code: "D4163",
    displayName: "Lê Đăng Dũng",
  },
  {
    email: "cuongnv.1512@gmail.com",
    code: "D4309",
    displayName: "Nguyễn Văn Cương",
  },
  {
    email: "Ngminhhung1102@gmail.com",
    code: "D4553",
    displayName: "Nguyễn Minh Hùng",
  },
  {
    email: "teddymcqueen99@gmail.com",
    code: "D456",
    displayName: "Trần Thị Lệ Quyên",
  },
  {
    email: "hastagminhngoc@gmail.com",
    code: "D479",
    displayName: "Nguyễn Minh Ngọc",
  },
  {
    email: "quybeu1999@gmail.com",
    code: "D480",
    displayName: "Phạm Văn Quí",
  },
  {
    email: "ngungsuong.nkh97@gmail.com",
    code: "D5093",
    displayName: "Nguyễn Kim Hưng",
  },
  {
    email: "nguyenhoangcuchh@gmail.com",
    code: "D5287",
    displayName: "Nguyễn Thị Hoàng Cúc",
  },
  {
    email: "tuananhnguyen020299@gmail.com",
    code: "D5440",
    displayName: "Nguyễn Tuấn Anh",
  },
  {
    email: "vulanhk59bka@gmail.com",
    code: "D557",
    displayName: "Vũ Thị Lành",
  },
  {
    email: "phungchi1502@gmail.com",
    code: "D5652",
    displayName: "Phùng Thị Kim Chi",
  },
  {
    email: "maihuong19052000@gmail.com",
    code: "D5717",
    displayName: "Nguyễn Thị Mai Hương",
  },
  {
    email: "tuananhz4.pt@gmail.com",
    code: "D5730",
    displayName: "Nguyễn Tuấn Anh",
  },
  {
    email: "theanh2726@gmail.com",
    code: "D583",
    displayName: "Nguyễn Thế Anh",
  },
  {
    email: "longphung.2105@gmail.com",
    code: "D5915",
    displayName: "Phùng Hải Long",
  },
  {
    email: "dungdark97@gmail.com",
    code: "D5939",
    displayName: "Nguyễn Đắc Dũng",
  },
  {
    email: "nguyenduchuy.neu@gmail.com",
    code: "D6050",
    displayName: "Nguyễn Đức Huy",
  },
  {
    email: "Quanghuanht1210@gmail.com",
    code: "D6105",
    displayName: "Ngô Quang Huấn",
  },
  {
    email: "maihuongnt121@gmail.com",
    code: "D6284",
    displayName: "Nguyễn Thị Mai Hương",
  },
  {
    email: "toanthihagiang123@gmail.com",
    code: "D6515",
    displayName: "Toàn Thị Hà Giang",
  },
  {
    email: "hieuuuu2002@gmail.com",
    code: "D6794",
    displayName: "Hoàng Đình Hiếu",
  },
  {
    email: "tranhien1996.hn@gmail.com",
    code: "D6795",
    displayName: "Trần Thị Hiền",
  },
  {
    email: "Blackpage60@gmail.com",
    code: "D703",
    displayName: "Nguyễn Huyền Trang",
  },
  {
    email: "dinhphuongthaoqia@gmail.com",
    code: "D708",
    displayName: "Đinh Phương Thảo",
  },
  {
    email: "v.thuy.nhatt@gmail.com",
    code: "D717",
    displayName: "Vũ Thúy Nhật",
  },
  {
    email: "doanthingocanh1605@gmail.com",
    code: "D7287",
    displayName: "Doãn Thị Ngọc Ánh",
  },
  {
    email: "luongtrang04102015@gmail.com",
    code: "D7288",
    displayName: "Trần Thu Trang",
  },
  {
    displayName: "Nguyễn Thị Mỹ Linh",
    code: "D79",
    email: "linhxu271196@gmail.com",
  },
  {
    displayName: "Nguyễn Thúy Vi",
    code: "D93",
    email: "thuyvi11196@gmail.com",
  },
  {
    email: "xtrong49@gmail.com",
    code: "E062",
    displayName: "Vũ Xuân Trọng",
  },
  {
    displayName: "Chu Huy Thắng",
    code: "E09",
    email: "chuthang205@gmail.com",
  },
  {
    code: "E62",
    displayName: "Abby Nguyễn Sơn",
    email: "e62nguyenson@gmail.com",
  },
  {
    code: "E65",
    displayName: "Abby Nguyễn Thị Thập",
    email: "e63nguyenthithap@gmail.com",
  },
  {
    email: "anhtuas123@gmail.com",
    code: "E73",
    displayName: "Nguyễn Anh Tú",
  },
  {
    email: "truongmanh0912@gmail.com",
    code: "E80",
    displayName: "Nguyễn Mạnh Trường",
  },
  {
    displayName: "Lê Thị Mơ",
    code: "M30",
    email: "lemoql1996@gmail.com",
  },
  {
    displayName: "Phạm Ngọc Quỳnh",
    code: "M38",
    email: "quynh.ngoc.pham.1997@gmail.com",
  },
  {
    email: "thamtuongvang@gmail.com",
    code: "M63",
    displayName: "Trịnh Thị Hạnh Linh",
  },
  {
    email: "tho271299@gmail.com",
    code: "M67",
    displayName: "Phạm Thị Ngọc Thơ",
  },
  {
    email: "klinhpham139@gmail.com",
    code: "M70",
    displayName: "Phạm Khánh Linh",
  },
  {
    displayName: "Nguyễn Văn Việt",
    code: "S110",
    email: "vietxc2014@gmail.com",
  },
  {
    displayName: "Bùi Văn Vương",
    code: "S146",
    email: "vuong7815@gmail.com",
  },
  {
    displayName: "Nguyễn Thị Ngọc Anh",
    code: "S306",
    email: "ngocanhnguyen1698@gmail.com",
  },
  {
    email: "huonglyy312@gmail.com",
    code: "S363",
    displayName: "Vương Thị Hương Ly",
  },
  {
    displayName: "Nguyễn Hữu Long",
    code: "S41",
    email: "nhlong2107@gmail.com",
  },
  {
    email: "luongthuyquynh26042k@gmail.com",
    code: "S443",
    displayName: "Lương Thúy Quỳnh",
  },
  {
    displayName: "Bùi Thị Hương",
    code: "S78",
    email: "buihuong17101997@gmail.com",
  },
];
