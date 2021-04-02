import { computed, makeObservable, observable } from "mobx";
import { RootStore } from "./RootStore";
import * as urlSlug from "url-slug";
import { ReviewForm } from "./ReviewFormStore";

interface IndividualForm extends ReviewForm {
  reviewerCode: string;
  reviewerName: string;
}

export class IndividualFormStore {
  rootStore: RootStore;

  forms = forms;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;

    makeObservable(this, {
      forms: observable,
      myForms: computed,
    });
  }

  get myForms() {
    // Nếu là BOM thì lấy hết tất cả form
    if (this.rootStore.authenticationStore.isBom) return this.forms;

    return this.forms.filter((form) => {
      return form.reviewerCode === this.rootStore.authenticationStore.userCode;
    });
  }
}

const forms = [
  {
    reviewerCode: "D583",
    reviewerName: "Nguyễn Thế Anh",
    reviewType: 1,
    revieweeCode: "D583",
    revieweeName: "Nguyễn Thế Anh",
  },
  {
    reviewerCode: "D337",
    reviewerName: "Nguyễn Thành Nam",
    reviewType: 1,
    revieweeCode: "D337",
    revieweeName: "Nguyễn Thành Nam",
  },
  {
    reviewerCode: "D169",
    reviewerName: "Trương Thu Hằng",
    reviewType: 1,
    revieweeCode: "D169",
    revieweeName: "Trương Thu Hằng",
  },
  {
    reviewerCode: "D2607",
    reviewerName: "Nguyễn Bá Nam",
    reviewType: 1,
    revieweeCode: "D2607",
    revieweeName: "Nguyễn Bá Nam",
  },
  {
    reviewerCode: "M38",
    reviewerName: "Phạm Ngọc Quỳnh",
    reviewType: 1,
    revieweeCode: "M38",
    revieweeName: "Phạm Ngọc Quỳnh",
  },
  {
    reviewerCode: "E73",
    reviewerName: "Nguyễn Anh Tú",
    reviewType: 1,
    revieweeCode: "E73",
    revieweeName: "Nguyễn Anh Tú",
  },
  {
    reviewerCode: "S146",
    reviewerName: "Bùi Văn Vương",
    reviewType: 1,
    revieweeCode: "S146",
    revieweeName: "Bùi Văn Vương",
  },
  {
    reviewerCode: "D2537",
    reviewerName: "Nguyễn Văn Thao",
    reviewType: 1,
    revieweeCode: "D2537",
    revieweeName: "Nguyễn Văn Thao",
  },
  {
    reviewerCode: "D2663",
    reviewerName: "Nguyễn Phúc Tài",
    reviewType: 1,
    revieweeCode: "D2663",
    revieweeName: "Nguyễn Phúc Tài",
  },
  {
    reviewerCode: "D2821",
    reviewerName: "Lương Kim Phượng",
    reviewType: 1,
    revieweeCode: "D2821",
    revieweeName: "Lương Kim Phượng",
  },
  {
    reviewerCode: "D479",
    reviewerName: "Nguyễn Minh Ngọc",
    reviewType: 1,
    revieweeCode: "D479",
    revieweeName: "Nguyễn Minh Ngọc",
  },
  {
    reviewerCode: "S78",
    reviewerName: "Bùi Thị Hương",
    reviewType: 1,
    revieweeCode: "S78",
    revieweeName: "Bùi Thị Hương",
  },
  {
    reviewerCode: "D557",
    reviewerName: "Vũ Thị Lành",
    reviewType: 1,
    revieweeCode: "D557",
    revieweeName: "Vũ Thị Lành",
  },
  {
    reviewerCode: "S41",
    reviewerName: "Nguyễn Hữu Long",
    reviewType: 1,
    revieweeCode: "S41",
    revieweeName: "Nguyễn Hữu Long",
  },
  {
    reviewerCode: "D388",
    reviewerName: "Trần Phương Anh",
    reviewType: 1,
    revieweeCode: "D388",
    revieweeName: "Trần Phương Anh",
  },
  {
    reviewerCode: "D2960",
    reviewerName: "Nguyễn Kiên Cường",
    reviewType: 1,
    revieweeCode: "D2960",
    revieweeName: "Nguyễn Kiên Cường",
  },
  {
    reviewerCode: "S306",
    reviewerName: "Nguyễn Thị Ngọc Anh",
    reviewType: 1,
    revieweeCode: "S306",
    revieweeName: "Nguyễn Thị Ngọc Anh",
  },
  {
    reviewerCode: "C037",
    reviewerName: "Nguyễn Thị Quỳnh",
    reviewType: 1,
    revieweeCode: "C037",
    revieweeName: "Nguyễn Thị Quỳnh",
  },
  {
    reviewerCode: "D2680",
    reviewerName: "Nguyễn Thị Diệp",
    reviewType: 1,
    revieweeCode: "D2680",
    revieweeName: "Nguyễn Thị Diệp",
  },
  {
    reviewerCode: "S110",
    reviewerName: "Nguyễn Văn Việt",
    reviewType: 1,
    revieweeCode: "S110",
    revieweeName: "Nguyễn Văn Việt",
  },
  {
    reviewerCode: "D4309",
    reviewerName: "Nguyễn Văn Cương",
    reviewType: 1,
    revieweeCode: "D4309",
    revieweeName: "Nguyễn Văn Cương",
  },
  {
    reviewerCode: "M70",
    reviewerName: "Phạm Khánh Linh",
    reviewType: 1,
    revieweeCode: "M70",
    revieweeName: "Phạm Khánh Linh",
  },
  {
    reviewerCode: "D4163",
    reviewerName: "Lê Đăng Dũng",
    reviewType: 1,
    revieweeCode: "D4163",
    revieweeName: "Lê Đăng Dũng",
  },
  {
    reviewerCode: "D3982",
    reviewerName: "Hoàng Văn Luýt",
    reviewType: 1,
    revieweeCode: "D3982",
    revieweeName: "Hoàng Văn Luýt",
  },
  {
    reviewerCode: "D2825",
    reviewerName: "Phạm Ngọc Quỳnh",
    reviewType: 1,
    revieweeCode: "D2825",
    revieweeName: "Phạm Ngọc Quỳnh",
  },
  {
    reviewerCode: "D1516",
    reviewerName: "Nguyễn Thùy Dương",
    reviewType: 1,
    revieweeCode: "D1516",
    revieweeName: "Nguyễn Thùy Dương",
  },
  {
    reviewerCode: "D4280",
    reviewerName: "Lương Đình Dương",
    reviewType: 1,
    revieweeCode: "D4280",
    revieweeName: "Lương Đình Dương",
  },
  {
    reviewerCode: "E09",
    reviewerName: "Chu Huy Thắng",
    reviewType: 1,
    revieweeCode: "E09",
    revieweeName: "Chu Huy Thắng",
  },
  {
    reviewerCode: "E62",
    reviewerName: "Vũ Xuân Trọng",
    reviewType: 1,
    revieweeCode: "E62",
    revieweeName: "Vũ Xuân Trọng",
  },
  {
    reviewerCode: "D93",
    reviewerName: "Nguyễn Thúy Vi",
    reviewType: 1,
    revieweeCode: "D93",
    revieweeName: "Nguyễn Thúy Vi",
  },
  {
    reviewerCode: "D79",
    reviewerName: "Nguyễn Thị Mỹ Linh",
    reviewType: 1,
    revieweeCode: "D79",
    revieweeName: "Nguyễn Thị Mỹ Linh",
  },
  {
    reviewerCode: "D583",
    reviewerName: "Nguyễn Thế Anh",
    reviewType: 2,
    revieweeCode: "D337",
    revieweeName: "Nguyễn Thành Nam",
  },
  {
    reviewerCode: "D456",
    reviewerName: "Trần Thị Lệ Quyên",
    reviewType: 2,
    revieweeCode: "D583",
    revieweeName: "Nguyễn Thế Anh",
  },
  {
    reviewerCode: "D327",
    reviewerName: "Dương Thị Nhung",
    reviewType: 4,
    revieweeCode: "D583",
    revieweeName: "Nguyễn Thế Anh",
  },
  {
    reviewerCode: "D327",
    reviewerName: "Dương Thị Nhung",
    reviewType: 4,
    revieweeCode: "D337",
    revieweeName: "Nguyễn Thành Nam",
  },
  {
    reviewerCode: "D327",
    reviewerName: "Dương Thị Nhung",
    reviewType: 4,
    revieweeCode: "D2663",
    revieweeName: "Nguyễn Phúc Tài",
  },
  {
    reviewerCode: "D327",
    reviewerName: "Dương Thị Nhung",
    reviewType: 4,
    revieweeCode: "D388",
    revieweeName: "Trần Phương Anh",
  },
  {
    reviewerCode: "D327",
    reviewerName: "Dương Thị Nhung",
    reviewType: 4,
    revieweeCode: "S306",
    revieweeName: "Nguyễn Thị Ngọc Anh",
  },
  {
    reviewerCode: "D327",
    reviewerName: "Dương Thị Nhung",
    reviewType: 4,
    revieweeCode: "D4163",
    revieweeName: "Lê Đăng Dũng",
  },
  {
    reviewerCode: "D327",
    reviewerName: "Dương Thị Nhung",
    reviewType: 4,
    revieweeCode: "D3982",
    revieweeName: "Hoàng Văn Luýt",
  },
  {
    reviewerCode: "D327",
    reviewerName: "Dương Thị Nhung",
    reviewType: 4,
    revieweeCode: "D2825",
    revieweeName: "Phạm Ngọc Quỳnh",
  },
  {
    reviewerCode: "D327",
    reviewerName: "Dương Thị Nhung",
    reviewType: 4,
    revieweeCode: "D1516",
    revieweeName: "Nguyễn Thùy Dương",
  },
  {
    reviewerCode: "D337",
    reviewerName: "Nguyễn Thành Nam",
    reviewType: 2,
    revieweeCode: "D583",
    revieweeName: "Nguyễn Thế Anh",
  },
  {
    reviewerCode: "D1334",
    reviewerName: "Hà Thị Lan Nhi",
    reviewType: 2,
    revieweeCode: "D337",
    revieweeName: "Nguyễn Thành Nam",
  },
  {
    reviewerCode: "D708",
    reviewerName: "Đinh Phương Thảo",
    reviewType: 2,
    revieweeCode: "D169",
    revieweeName: "Trương Thu Hằng",
  },
  {
    reviewerCode: "D2607",
    reviewerName: "Nguyễn Bá Nam",
    reviewType: 2,
    revieweeCode: "D2663",
    revieweeName: "Nguyễn Phúc Tài",
  },
  {
    reviewerCode: "D5099",
    reviewerName: "Nguyễn Minh Hạnh",
    reviewType: 2,
    revieweeCode: "D2607",
    revieweeName: "Nguyễn Bá Nam",
  },
  {
    reviewerCode: "S363",
    reviewerName: "Vương Thị Hương Ly",
    reviewType: 2,
    revieweeCode: "D2607",
    revieweeName: "Nguyễn Bá Nam",
  },
  {
    reviewerCode: "D2079",
    reviewerName: "Nguyễn Hà Anh",
    reviewType: 2,
    revieweeCode: "M38",
    revieweeName: "Phạm Ngọc Quỳnh",
  },
  {
    reviewerCode: "D3379",
    reviewerName: "Phạm Phương Linh",
    reviewType: 2,
    revieweeCode: "M38",
    revieweeName: "Phạm Ngọc Quỳnh",
  },
  {
    reviewerCode: "E73",
    reviewerName: "Nguyễn Anh Tú",
    reviewType: 2,
    revieweeCode: "S146",
    revieweeName: "Bùi Văn Vương",
  },
  {
    reviewerCode: "E73",
    reviewerName: "Nguyễn Anh Tú",
    reviewType: 2,
    revieweeCode: "D2537",
    revieweeName: "Nguyễn Văn Thao",
  },
  {
    reviewerCode: "S146",
    reviewerName: "Bùi Văn Vương",
    reviewType: 2,
    revieweeCode: "E73",
    revieweeName: "Nguyễn Anh Tú",
  },
  {
    reviewerCode: "S146",
    reviewerName: "Bùi Văn Vương",
    reviewType: 2,
    revieweeCode: "D2537",
    revieweeName: "Nguyễn Văn Thao",
  },
  {
    reviewerCode: "D2537",
    reviewerName: "Nguyễn Văn Thao",
    reviewType: 2,
    revieweeCode: "E73",
    revieweeName: "Nguyễn Anh Tú",
  },
  {
    reviewerCode: "D2537",
    reviewerName: "Nguyễn Văn Thao",
    reviewType: 2,
    revieweeCode: "S146",
    revieweeName: "Bùi Văn Vương",
  },
  {
    reviewerCode: "D2821",
    reviewerName: "Lương Kim Phượng",
    reviewType: 2,
    revieweeCode: "D2663",
    revieweeName: "Nguyễn Phúc Tài",
  },
  {
    reviewerCode: "M30",
    reviewerName: "Lê Thị Mơ",
    reviewType: 4,
    revieweeCode: "D2607",
    revieweeName: "Nguyễn Bá Nam",
  },
  {
    reviewerCode: "M30",
    reviewerName: "Lê Thị Mơ",
    reviewType: 4,
    revieweeCode: "D2663",
    revieweeName: "Nguyễn Phúc Tài",
  },
  {
    reviewerCode: "M30",
    reviewerName: "Lê Thị Mơ",
    reviewType: 4,
    revieweeCode: "D2821",
    revieweeName: "Lương Kim Phượng",
  },
  {
    reviewerCode: "M30",
    reviewerName: "Lê Thị Mơ",
    reviewType: 4,
    revieweeCode: "D93",
    revieweeName: "Nguyễn Thúy Vi",
  },
  {
    reviewerCode: "M30",
    reviewerName: "Lê Thị Mơ",
    reviewType: 4,
    revieweeCode: "D79",
    revieweeName: "Nguyễn Thị Mỹ Linh",
  },
  {
    reviewerCode: "D1862",
    reviewerName: "Chu Hà An",
    reviewType: 2,
    revieweeCode: "D2663",
    revieweeName: "Nguyễn Phúc Tài",
  },
  {
    reviewerCode: "D1862",
    reviewerName: "Chu Hà An",
    reviewType: 2,
    revieweeCode: "D2821",
    revieweeName: "Lương Kim Phượng",
  },
  {
    reviewerCode: "D479",
    reviewerName: "Nguyễn Minh Ngọc",
    reviewType: 2,
    revieweeCode: "S78",
    revieweeName: "Bùi Thị Hương",
  },
  {
    reviewerCode: "D479",
    reviewerName: "Nguyễn Minh Ngọc",
    reviewType: 2,
    revieweeCode: "D557",
    revieweeName: "Vũ Thị Lành",
  },
  {
    reviewerCode: "D479",
    reviewerName: "Nguyễn Minh Ngọc",
    reviewType: 2,
    revieweeCode: "S41",
    revieweeName: "Nguyễn Hữu Long",
  },
  {
    reviewerCode: "D479",
    reviewerName: "Nguyễn Minh Ngọc",
    reviewType: 2,
    revieweeCode: "D388",
    revieweeName: "Trần Phương Anh",
  },
  {
    reviewerCode: "S78",
    reviewerName: "Bùi Thị Hương",
    reviewType: 2,
    revieweeCode: "D479",
    revieweeName: "Nguyễn Minh Ngọc",
  },
  {
    reviewerCode: "S78",
    reviewerName: "Bùi Thị Hương",
    reviewType: 2,
    revieweeCode: "D557",
    revieweeName: "Vũ Thị Lành",
  },
  {
    reviewerCode: "S78",
    reviewerName: "Bùi Thị Hương",
    reviewType: 2,
    revieweeCode: "S41",
    revieweeName: "Nguyễn Hữu Long",
  },
  {
    reviewerCode: "S78",
    reviewerName: "Bùi Thị Hương",
    reviewType: 2,
    revieweeCode: "D388",
    revieweeName: "Trần Phương Anh",
  },
  {
    reviewerCode: "D557",
    reviewerName: "Vũ Thị Lành",
    reviewType: 2,
    revieweeCode: "D479",
    revieweeName: "Nguyễn Minh Ngọc",
  },
  {
    reviewerCode: "D557",
    reviewerName: "Vũ Thị Lành",
    reviewType: 2,
    revieweeCode: "S78",
    revieweeName: "Bùi Thị Hương",
  },
  {
    reviewerCode: "D557",
    reviewerName: "Vũ Thị Lành",
    reviewType: 2,
    revieweeCode: "S41",
    revieweeName: "Nguyễn Hữu Long",
  },
  {
    reviewerCode: "D557",
    reviewerName: "Vũ Thị Lành",
    reviewType: 2,
    revieweeCode: "D388",
    revieweeName: "Trần Phương Anh",
  },
  {
    reviewerCode: "S41",
    reviewerName: "Nguyễn Hữu Long",
    reviewType: 2,
    revieweeCode: "D479",
    revieweeName: "Nguyễn Minh Ngọc",
  },
  {
    reviewerCode: "S41",
    reviewerName: "Nguyễn Hữu Long",
    reviewType: 2,
    revieweeCode: "S78",
    revieweeName: "Bùi Thị Hương",
  },
  {
    reviewerCode: "S41",
    reviewerName: "Nguyễn Hữu Long",
    reviewType: 2,
    revieweeCode: "D557",
    revieweeName: "Vũ Thị Lành",
  },
  {
    reviewerCode: "S41",
    reviewerName: "Nguyễn Hữu Long",
    reviewType: 2,
    revieweeCode: "D388",
    revieweeName: "Trần Phương Anh",
  },
  {
    reviewerCode: "D5246",
    reviewerName: "Trần Phương Anh",
    reviewType: 4,
    revieweeCode: "D479",
    revieweeName: "Nguyễn Minh Ngọc",
  },
  {
    reviewerCode: "D5246",
    reviewerName: "Trần Phương Anh",
    reviewType: 4,
    revieweeCode: "S78",
    revieweeName: "Bùi Thị Hương",
  },
  {
    reviewerCode: "D5246",
    reviewerName: "Trần Phương Anh",
    reviewType: 4,
    revieweeCode: "D557",
    revieweeName: "Vũ Thị Lành",
  },
  {
    reviewerCode: "D5246",
    reviewerName: "Trần Phương Anh",
    reviewType: 4,
    revieweeCode: "S41",
    revieweeName: "Nguyễn Hữu Long",
  },
  {
    reviewerCode: "D2960",
    reviewerName: "Nguyễn Kiên Cường",
    reviewType: 2,
    revieweeCode: "S306",
    revieweeName: "Nguyễn Thị Ngọc Anh",
  },
  {
    reviewerCode: "S306",
    reviewerName: "Nguyễn Thị Ngọc Anh",
    reviewType: 2,
    revieweeCode: "D2960",
    revieweeName: "Nguyễn Kiên Cường",
  },
  {
    reviewerCode: "D02",
    reviewerName: "Nguyễn Thu Thảo",
    reviewType: 4,
    revieweeCode: "D2960",
    revieweeName: "Nguyễn Kiên Cường",
  },
  {
    reviewerCode: "D02",
    reviewerName: "Nguyễn Thu Thảo",
    reviewType: 4,
    revieweeCode: "S306",
    revieweeName: "Nguyễn Thị Ngọc Anh",
  },
  {
    reviewerCode: "D2961",
    reviewerName: "Bùi Thu Phương",
    reviewType: 2,
    revieweeCode: "C037",
    revieweeName: "Nguyễn Thị Quỳnh",
  },
  {
    reviewerCode: "D3138",
    reviewerName: "Lê Thị Thanh Phương",
    reviewType: 2,
    revieweeCode: "C037",
    revieweeName: "Nguyễn Thị Quỳnh",
  },
  {
    reviewerCode: "D2680",
    reviewerName: "Nguyễn Thị Diệp",
    reviewType: 2,
    revieweeCode: "D4309",
    revieweeName: "Nguyễn Văn Cương",
  },
  {
    reviewerCode: "D4309",
    reviewerName: "Nguyễn Văn Cương",
    reviewType: 2,
    revieweeCode: "D2680",
    revieweeName: "Nguyễn Thị Diệp",
  },
  {
    reviewerCode: "D4426",
    reviewerName: "Hoàng Nhật Tùng Dương",
    reviewType: 2,
    revieweeCode: "M70",
    revieweeName: "Phạm Khánh Linh",
  },
  {
    reviewerCode: "D4105",
    reviewerName: "Ngô Ngọc Châm",
    reviewType: 2,
    revieweeCode: "M70",
    revieweeName: "Phạm Khánh Linh",
  },
  {
    reviewerCode: "D4163",
    reviewerName: "Lê Đăng Dũng",
    reviewType: 2,
    revieweeCode: "D3982",
    revieweeName: "Hoàng Văn Luýt",
  },
  {
    reviewerCode: "D4163",
    reviewerName: "Lê Đăng Dũng",
    reviewType: 2,
    revieweeCode: "D2825",
    revieweeName: "Phạm Ngọc Quỳnh",
  },
  {
    reviewerCode: "D4163",
    reviewerName: "Lê Đăng Dũng",
    reviewType: 2,
    revieweeCode: "D1516",
    revieweeName: "Nguyễn Thùy Dương",
  },
  {
    reviewerCode: "D3982",
    reviewerName: "Hoàng Văn Luýt",
    reviewType: 2,
    revieweeCode: "D4163",
    revieweeName: "Lê Đăng Dũng",
  },
  {
    reviewerCode: "D3982",
    reviewerName: "Hoàng Văn Luýt",
    reviewType: 2,
    revieweeCode: "D2825",
    revieweeName: "Phạm Ngọc Quỳnh",
  },
  {
    reviewerCode: "D3982",
    reviewerName: "Hoàng Văn Luýt",
    reviewType: 2,
    revieweeCode: "D1516",
    revieweeName: "Nguyễn Thùy Dương",
  },
  {
    reviewerCode: "D2825",
    reviewerName: "Phạm Ngọc Quỳnh",
    reviewType: 2,
    revieweeCode: "D4163",
    revieweeName: "Lê Đăng Dũng",
  },
  {
    reviewerCode: "D2825",
    reviewerName: "Phạm Ngọc Quỳnh",
    reviewType: 2,
    revieweeCode: "D3982",
    revieweeName: "Hoàng Văn Luýt",
  },
  {
    reviewerCode: "D2825",
    reviewerName: "Phạm Ngọc Quỳnh",
    reviewType: 2,
    revieweeCode: "D1516",
    revieweeName: "Nguyễn Thùy Dương",
  },
  {
    reviewerCode: "D1516",
    reviewerName: "Nguyễn Thùy Dương",
    reviewType: 2,
    revieweeCode: "D4163",
    revieweeName: "Lê Đăng Dũng",
  },
  {
    reviewerCode: "D1516",
    reviewerName: "Nguyễn Thùy Dương",
    reviewType: 2,
    revieweeCode: "D3982",
    revieweeName: "Hoàng Văn Luýt",
  },
  {
    reviewerCode: "D1516",
    reviewerName: "Nguyễn Thùy Dương",
    reviewType: 2,
    revieweeCode: "D2825",
    revieweeName: "Phạm Ngọc Quỳnh",
  },
  {
    reviewerCode: "E09",
    reviewerName: "Chu Huy Thắng",
    reviewType: 4,
    revieweeCode: "E62",
    revieweeName: "Vũ Xuân Trọng",
  },
  {
    reviewerCode: "E62",
    reviewerName: "Vũ Xuân Trọng",
    reviewType: 2,
    revieweeCode: "E09",
    revieweeName: "Chu Huy Thắng",
  },
  {
    reviewerCode: "E65",
    reviewerName: "Lê Quang Thành",
    reviewType: 2,
    revieweeCode: "E09",
    revieweeName: "Chu Huy Thắng",
  },
  {
    reviewerCode: "E65",
    reviewerName: "Lê Quang Thành",
    reviewType: 2,
    revieweeCode: "E62",
    revieweeName: "Vũ Xuân Trọng",
  },
  {
    reviewerCode: "D93",
    reviewerName: "Nguyễn Thúy Vi",
    reviewType: 2,
    revieweeCode: "D2663",
    revieweeName: "Nguyễn Phúc Tài",
  },
  {
    reviewerCode: "D93",
    reviewerName: "Nguyễn Thúy Vi",
    reviewType: 2,
    revieweeCode: "D79",
    revieweeName: "Nguyễn Thị Mỹ Linh",
  },
  {
    reviewerCode: "D79",
    reviewerName: "Nguyễn Thị Mỹ Linh",
    reviewType: 2,
    revieweeCode: "D2663",
    revieweeName: "Nguyễn Phúc Tài",
  },
  {
    reviewerCode: "D79",
    reviewerName: "Nguyễn Thị Mỹ Linh",
    reviewType: 2,
    revieweeCode: "D93",
    revieweeName: "Nguyễn Thúy Vi",
  },
  {
    reviewerCode: "M48",
    reviewerName: "Lê Thùy Linh",
    reviewType: 2,
    revieweeCode: "D93",
    revieweeName: "Nguyễn Thúy Vi",
  },
  {
    reviewerCode: "M48",
    reviewerName: "Lê Thùy Linh",
    reviewType: 2,
    revieweeCode: "D79",
    revieweeName: "Nguyễn Thị Mỹ Linh",
  },
].map<IndividualForm>((d) => {
  return {
    ...d,
    slug: urlSlug.convert(
      `${d.revieweeCode} ${d.revieweeName} ${d.reviewType} ${d.reviewerCode}`
    ),
  };
});
