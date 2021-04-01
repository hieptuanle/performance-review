import { makeObservable, observable } from "mobx";
import { RootStore } from "./RootStore";

export class TeamMemberStore {
  rootStore: RootStore;

  members = members;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;

    makeObservable(this, {
      members: observable,
      rootStore: false,
    });
  }
}

const members = [
  {
    reviewerCode: "D1862",
    reviewerName: "Chu Hà An",
    department: "Team Tuyển dụng",
  },
  {
    reviewerCode: "M30",
    reviewerName: "Lê Thị Mơ",
    department: "Team Tuyển dụng",
  },
  {
    reviewerCode: "D2821",
    reviewerName: "Lương Kim Phượng",
    department: "Team Tuyển dụng",
  },
  {
    reviewerCode: "D3081",
    reviewerName: "Lê Thùy Linh",
    department: "Team Tuyển dụng",
  },
  {
    reviewerCode: "D93",
    reviewerName: "Nguyễn Thúy Vi",
    department: "Team Training",
  },
  {
    reviewerCode: "D79",
    reviewerName: "Nguyễn Thị Mỹ Linh",
    department: "Team Training",
  },
  {
    reviewerCode: "D2607",
    reviewerName: "Nguyễn Bá Nam",
    department: "Team Đánh giá",
  },
  {
    reviewerCode: "D5099",
    reviewerName: "Nguyễn Minh Hạnh",
    department: "Team Đánh giá",
  },
  {
    reviewerCode: "D2607",
    reviewerName: "Nguyễn Bá Nam",
    department: "Team lịch trực",
  },
  {
    reviewerCode: "S363",
    reviewerName: "Vương Thị Hương Ly",
    department: "Team lịch trực",
  },
  {
    reviewerCode: "D994",
    reviewerName: "Đỗ Vũ Thúy Hòa",
    department: "Team lịch trực",
  },
  {
    reviewerCode: "D327",
    reviewerName: "Dương Thị Nhung",
    department: "Team QC",
  },
  {
    reviewerCode: "D4163",
    reviewerName: "Lê Đăng Dũng",
    department: "Team QC",
  },
  {
    reviewerCode: "D2825",
    reviewerName: "Phạm Ngọc Quỳnh",
    department: "Team QC",
  },
  {
    reviewerCode: "D1516",
    reviewerName: "Nguyễn Thùy Dương",
    department: "Team QC",
  },
  {
    reviewerCode: "D4105",
    reviewerName: "Ngô Ngọc Châm",
    department: "Team Buying",
  },
  {
    reviewerCode: "M70",
    reviewerName: "Phạm Khánh Linh",
    department: "Team Buying",
  },
  {
    reviewerCode: "D2680",
    reviewerName: "Nguyễn Thị Diệp",
    department: "Team Logistic",
  },
  {
    reviewerCode: "D4309",
    reviewerName: "Nguyễn Văn Cương",
    department: "Team Logistic",
  },
  {
    reviewerCode: "D388",
    reviewerName: "Trần Phương Anh",
    department: "Team Kho",
  },
  {
    reviewerCode: "D557",
    reviewerName: "Vũ Thị Lành",
    department: "Team Kho",
  },
  {
    reviewerCode: "S78",
    reviewerName: "Bùi Thị Hương",
    department: "Team Kho",
  },
  {
    reviewerCode: "S41",
    reviewerName: "Nguyễn Hữu Long",
    department: "Team Kho",
  },
  {
    reviewerCode: "D479",
    reviewerName: "Nguyễn Minh Ngọc",
    department: "Team Kho",
  },
  {
    reviewerCode: "D388",
    reviewerName: "Trần Phương Anh",
    department: "Team Đóng gói",
  },
  {
    reviewerCode: "D557",
    reviewerName: "Vũ Thị Lành",
    department: "Team Đóng gói",
  },
  {
    reviewerCode: "S78",
    reviewerName: "Bùi Thị Hương",
    department: "Team Đóng gói",
  },
  {
    reviewerCode: "S41",
    reviewerName: "Nguyễn Hữu Long",
    department: "Team Đóng gói",
  },
  {
    reviewerCode: "D479",
    reviewerName: "Nguyễn Minh Ngọc",
    department: "Team Đóng gói",
  },
  {
    reviewerCode: "D02",
    reviewerName: "Nguyễn Thu Thảo",
    department: "Team Kiểm toán",
  },
  {
    reviewerCode: "S306",
    reviewerName: "Nguyễn Thị Ngọc Anh",
    department: "Team Kiểm toán",
  },
  {
    reviewerCode: "D2960",
    reviewerName: "Nguyễn Kiên Cường",
    department: "Team Kiểm toán",
  },
  {
    reviewerCode: "D3138",
    reviewerName: "Lê Thị Thanh Phương",
    department: "Team Kế toán nội bộ",
  },
  {
    reviewerCode: "D2961",
    reviewerName: "Bùi Thu Phương",
    department: "Team Kế toán nội bộ",
  },
  {
    reviewerCode: "C037",
    reviewerName: "Nguyễn Thị Quỳnh",
    department: "Team Kế toán nội bộ",
  },
  {
    reviewerCode: "D02",
    reviewerName: "Nguyễn Thu Thảo",
    department: "Team Kế toán thuế",
  },
  {
    reviewerCode: "M63",
    reviewerName: "Trịnh Thị Hạnh Linh",
    department: "Team Kế toán thuế",
  },
  {
    reviewerCode: "D583",
    reviewerName: "Nguyễn Thế Anh",
    department: "Team Bếp",
  },
  {
    reviewerCode: "D337",
    reviewerName: "Nguyễn Thành Nam",
    department: "Team Bếp",
  },
  {
    reviewerCode: "D456",
    reviewerName: "Trần Thị Lệ Quyên",
    department: "Team Bếp",
  },
  {
    reviewerCode: "E09",
    reviewerName: "Chu Huy Thắng",
    department: "Team Tech",
  },
  {
    reviewerCode: "E65",
    reviewerName: "Lê Quang Thành",
    department: "Team Tech",
  },
  {
    reviewerCode: "E62",
    reviewerName: "Vũ Xuân Trọng",
    department: "Team Tech",
  },
  {
    reviewerCode: "E73",
    reviewerName: "Nguyễn Anh Tú",
    department: "Team HC",
  },
  {
    reviewerCode: "S146",
    reviewerName: "Bùi Văn Vương",
    department: "Team HC",
  },
  {
    reviewerCode: "D2537",
    reviewerName: "Nguyễn Văn Thao",
    department: "Team HC",
  },
  {
    reviewerCode: "D169",
    reviewerName: "Trương Thu Hằng",
    department: "Team BS",
  },
  {
    reviewerCode: "D708",
    reviewerName: "Đinh Phương Thảo",
    department: "Team BS",
  },
  {
    reviewerCode: "M38",
    reviewerName: "Phạm Ngọc Quỳnh",
    department: "Team Ship",
  },
  {
    reviewerCode: "D2079",
    reviewerName: "Nguyễn Hà Anh",
    department: "Team Ship",
  },
  {
    reviewerCode: "S110",
    reviewerName: "Nguyễn Văn Việt",
    department: "Team Media",
  },
  {
    reviewerCode: "D2663",
    reviewerName: "Nguyễn Phúc Tài",
    department: "Team HR HCM",
  },
  {
    reviewerCode: "M48",
    reviewerName: "Lê Thùy Linh",
    department: "Team MKT",
  },
  {
    reviewerCode: "M67",
    reviewerName: "Phạm Thị Ngọc Thơ",
    department: "Team MKT",
  },
  {
    reviewerCode: "M60",
    reviewerName: "Nguyễn Bích Hà",
    department: "Team MKT",
  },
  {
    reviewerCode: "D1969",
    reviewerName: "Trần Hương Mai",
    department: "TL Abby HN",
  },
  {
    reviewerCode: "D717",
    reviewerName: "Vũ Thúy Nhật",
    department: "TL Abby HN",
  },
  {
    reviewerCode: "D248",
    reviewerName: "Ngô Dương Hương",
    department: "TL Abby HN",
  },
  {
    reviewerCode: "D4086",
    reviewerName: "Đặng Kim Xuân",
    department: "TL Abby HCM",
  },
  {
    reviewerCode: "D1729",
    reviewerName: "Nguyễn Phương Thảo",
    department: "TL Abby HCM",
  },
  {
    reviewerCode: "D2655",
    reviewerName: "Lê Thị Ngọc Hiền",
    department: "TL Abby HCM",
  },
  {
    reviewerCode: "D1906",
    reviewerName: "Nguyễn Quang Bình",
    department: "TL Savor",
  },
  {
    reviewerCode: "D1151",
    reviewerName: "Đặng Thị Thu Hằng",
    department: "TL Savor",
  },
  {
    reviewerCode: "D352",
    reviewerName: "Hoàng Thị Dịu",
    department: "TL Savor",
  },
];
