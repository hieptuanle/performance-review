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
    code: "C037",
    displayName: "Nguyễn Thị Quỳnh",
    email: "quynhnt@savor.vn",
  },
  {
    code: "D02",
    displayName: "Nguyễn Thu Thảo",
    email: "nthuthao2205@gmail.com",
  },
  {
    code: "D1334",
    displayName: "Hà Thị Lan Nhi",
    email: "lannhiha2000@gmail.com",
  },
  {
    code: "D169",
    displayName: "Trương Thu Hằng",
    email: "truongthuhang.28041998@gmail.com",
  },
  {
    code: "D1862",
    displayName: "Chu Hà An",
    email: "nhimm269@gmail.com",
  },
  {
    code: "D2079",
    displayName: "Nguyễn Hà Anh",
    email: "monterds16102001@gmail.com",
  },
  {
    code: "D2537",
    displayName: "Nguyễn Văn Thao",
    email: "ngocthao060690@gmail.com",
  },
  {
    code: "D2663",
    displayName: "Nguyễn Phúc Tài",
    email: "phuctai0810@gmail.com",
  },
  {
    code: "D2680",
    displayName: "Nguyễn Thị Diệp",
    email: "diepyeol61@gmail.com",
  },
  {
    code: "D2821",
    displayName: "Lương Kim Phượng",
    email: "lkim.phuong2212@gmail.com",
  },
  {
    code: "D2825",
    displayName: "Phạm Ngọc Quỳnh",
    email: "quynhngoc.1803@gmail.com",
  },
  {
    code: "D2960",
    displayName: "Nguyễn Kiên Cường",
    email: "cuongnk12.mac@gmail.com",
  },
  {
    code: "D2961",
    displayName: "Bùi Thu Phương",
    email: "phuongbuithu37@gmail.com",
  },
  {
    code: "D3061",
    displayName: "Nguyễn Thị Mỹ Linh",
    email: "mylinh.ng198@gmail.com",
  },
  {
    code: "D3138",
    displayName: "Lê Thị Thanh Phương",
    email: "lethanhphuong070820@gmail.com",
  },
  {
    code: "D327",
    displayName: "Dương Thị Nhung",
    email: "duongnhung65@gmail.com",
  },
  {
    code: "D2607",
    displayName: "Nguyễn Bá Nam",
    email: "namnguyenba9x@gmail.com",
  },
  {
    code: "D337",
    displayName: "Nguyễn Thành Nam",
    email: "thanhnam06121997@gmail.com",
  },
  {
    code: "D3379",
    displayName: "Phạm Phương Linh",
    email: "linhpham.121202@gmail.com",
  },
  {
    code: "D388",
    displayName: "Trần Phương Anh",
    email: "tpa2498@gmail.com",
  },
  {
    code: "D3982",
    displayName: "Hoàng Văn Luýt",
    email: "hvl.luyt@gmail.com",
  },
  {
    code: "D4105",
    displayName: "Ngô Ngọc Châm",
    email: "chamngoc99@gmail.com",
  },
  {
    code: "D4163",
    displayName: "Lê Đăng Dũng",
    email: "duongcongth@outlook.com.vn",
  },
  {
    code: "D1516",
    displayName: "Nguyễn Thùy Dương",
    email: "duongnguyenthuy276@gmail.com",
  },
  {
    code: "D4280",
    displayName: "Lương Đình Dương",
    email: "feelingsilk.lien@gmail.com",
  },
  {
    code: "D4309",
    displayName: "Nguyễn Văn Cương",
    email: "cuongnv.1512@gmail.com",
  },
  {
    code: "D4426",
    displayName: "Hoàng Nhật Tùng Dương",
    email: "hoangduong05082001@gmail.com",
  },
  {
    code: "D456",
    displayName: "Trần Thị Lệ Quyên",
    email: "teddymcqueen99@gmail.com",
  },
  {
    code: "D479",
    displayName: "Nguyễn Minh Ngọc",
    email: "hastagminhngoc@gmail.com",
  },
  {
    code: "D1516",
    displayName: "Nguyễn Thùy Dương",
    email: "duongnguyenthuy276@gmail.com",
  },
  {
    code: "D5099",
    displayName: "Nguyễn Minh Hạnh",
    email: "nmh134340@gmail.com",
  },
  {
    code: "D388",
    displayName: "Trần Phương Anh",
    email: "tpa2498@gmail.com	",
  },
  {
    code: "D557",
    displayName: "Vũ Thị Lành",
    email: "vulanhk59bka@gmail.com",
  },
  {
    code: "D583",
    displayName: "Nguyễn Thế Anh",
    email: "theanh2726@gmail.com",
  },
  {
    code: "D708",
    displayName: "Đinh Phương Thảo",
    email: "dinhphuongthaoqia@gmail.com",
  },
  {
    code: "D79",
    displayName: "Nguyễn Thị Mỹ Linh",
    email: "linhxu271196@gmail.com",
  },
  {
    code: "D93",
    displayName: "Nguyễn Thúy Vi",
    email: "thuyvi11196@gmail.com",
  },
  {
    code: "E09",
    displayName: "Chu Huy Thắng",
    email: "chuthang205@gmail.com",
  },
  {
    code: "E62",
    displayName: "Vũ Xuân Trọng",
    email: "xtrong49@gmail.com",
  },
  {
    code: "E65",
    displayName: "Lê Quang Thành",
    email: "thanhquang2805@gmail.com",
  },
  {
    code: "E73",
    displayName: "Nguyễn Anh Tú",
    email: "anhtuas123@gmail.com",
  },
  {
    code: "M30",
    displayName: "Lê Thị Mơ",
    email: "lemoql1996@gmail.com",
  },
  {
    code: "M38",
    displayName: "Phạm Ngọc Quỳnh",
    email: "quynh.ngoc.pham.1997@gmail.com",
  },
  {
    code: "M48",
    displayName: "Lê Thùy Linh",
    email: "ketlinh199@gmail.com",
  },
  {
    code: "M70",
    displayName: "Phạm Khánh Linh",
    email: "klinhpham139@gmail.com",
  },
  {
    code: "S110",
    displayName: "Nguyễn Văn Việt",
    email: "vietxc2014@gmail.com",
  },
  {
    code: "S146",
    displayName: "Bùi Văn Vương",
    email: "vuong7815@gmail.com",
  },
  {
    code: "S306",
    displayName: "Nguyễn Thị Ngọc Anh",
    email: "ngocanhnguyen1698@gmail.com",
  },
  {
    code: "S363",
    displayName: "Vương Thị Hương Ly",
    email: "huonglyy312@gmail.com",
  },
  {
    code: "S41",
    displayName: "Nguyễn Hữu Long",
    email: "nhlong2107@gmail.com",
  },
  {
    code: "S78",
    displayName: "Bùi Thị Hương",
    email: "buihuong17101997@gmail.com",
  },
  {
    code: "D480",
    displayName: "Phạm Văn Quí",
    email: "quybeu1999@gmail.com",
  },
  {
    code: "D703",
    displayName: "Nguyễn Huyền Trang",
    email: "Blackpage60@gmail.com",
  },
  {
    code: "D1898",
    displayName: "Nguyễn Văn Tuấn",
    email: "tuanxu10h@gmail.com",
  },
];
