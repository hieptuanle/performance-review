import { computed, makeObservable, observable } from "mobx";
import { ReviewForm } from "./ReviewFormStore";
import { RootStore } from "./RootStore";
import * as urlSlug from "url-slug";

interface TeamForm extends ReviewForm {
  departmentReview: string;
}

export class TeamFormStore {
  rootStore: RootStore;

  forms = forms;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;

    makeObservable(this, {
      forms: observable,
      myForms: computed,
      rootStore: false,
    });
  }

  get myForms() {
    // Nếu là BOM thì lấy hết tất cả form
    if (
      this.rootStore.authenticationStore.isBom &&
      this.rootStore.authenticationStore.seeAll
    )
      return this.forms;

    const matchMember = this.rootStore.teamMemberStore.members.find(
      (d) => d.reviewerCode === this.rootStore.authenticationStore.userCode
    );

    if (!matchMember) return [];
    return this.forms.filter((form) => {
      return form.departmentReview === matchMember.department;
    });
  }
}

const forms = [
  {
    departmentReview: "Team Tuyển dụng",
    revieweeCode: "E62",
    revieweeName: "Vũ Xuân Trọng",
  },
  {
    departmentReview: "Team Tuyển dụng",
    revieweeCode: "D79",
    revieweeName: "Nguyễn Thị Mỹ Linh",
  },
  {
    departmentReview: "Team Tuyển dụng",
    revieweeCode: "D169",
    revieweeName: "Trương Thu Hằng",
  },
  {
    departmentReview: "Team Tuyển dụng",
    revieweeCode: "D479",
    revieweeName: "Nguyễn Minh Ngọc",
  },
  {
    departmentReview: "Team Tuyển dụng",
    revieweeCode: "D93",
    revieweeName: "Nguyễn Thúy Vi",
  },
  {
    departmentReview: "Team Tuyển dụng",
    revieweeCode: "S78",
    revieweeName: "Bùi Thị Hương",
  },
  {
    departmentReview: "Team Tuyển dụng",
    revieweeCode: "D557",
    revieweeName: "Vũ Thị Lành",
  },
  {
    departmentReview: "Team Tuyển dụng",
    revieweeCode: "E09",
    revieweeName: "Chu Huy Thắng",
  },
  {
    departmentReview: "Team Tuyển dụng",
    revieweeCode: "D388",
    revieweeName: "Trần Phương Anh",
  },
  {
    departmentReview: "Team Tuyển dụng",
    revieweeCode: "M38",
    revieweeName: "Phạm Ngọc Quỳnh",
  },
  {
    departmentReview: "Team Tuyển dụng",
    revieweeCode: "D2607",
    revieweeName: "Nguyễn Bá Nam",
  },
  {
    departmentReview: "Team Training",
    revieweeCode: "S110",
    revieweeName: "Nguyễn Văn Việt",
  },
  {
    departmentReview: "Team Training",
    revieweeCode: "D337",
    revieweeName: "Nguyễn Thành Nam",
  },
  {
    departmentReview: "Team Training",
    revieweeCode: "S41",
    revieweeName: "Nguyễn Hữu Long",
  },
  {
    departmentReview: "Team Training",
    revieweeCode: "S78",
    revieweeName: "Bùi Thị Hương",
  },
  {
    departmentReview: "Team Training",
    revieweeCode: "D583",
    revieweeName: "Nguyễn Thế Anh",
  },
  {
    departmentReview: "Team Training",
    revieweeCode: "E09",
    revieweeName: "Chu Huy Thắng",
  },
  {
    departmentReview: "Team Training",
    revieweeCode: "D388",
    revieweeName: "Trần Phương Anh",
  },
  {
    departmentReview: "Team Training",
    revieweeCode: "M70",
    revieweeName: "Phạm Khánh Linh",
  },
  {
    departmentReview: "Team Training",
    revieweeCode: "M38",
    revieweeName: "Phạm Ngọc Quỳnh",
  },
  {
    departmentReview: "Team Training",
    revieweeCode: "D2607",
    revieweeName: "Nguyễn Bá Nam",
  },
  {
    departmentReview: "Team Đánh giá",
    revieweeCode: "D79",
    revieweeName: "Nguyễn Thị Mỹ Linh",
  },
  {
    departmentReview: "Team Đánh giá",
    revieweeCode: "D479",
    revieweeName: "Nguyễn Minh Ngọc",
  },
  {
    departmentReview: "Team Đánh giá",
    revieweeCode: "D93",
    revieweeName: "Nguyễn Thúy Vi",
  },
  {
    departmentReview: "Team Đánh giá",
    revieweeCode: "D1516",
    revieweeName: "Nguyễn Thùy Dương",
  },
  {
    departmentReview: "Team Đánh giá",
    revieweeCode: "D2821",
    revieweeName: "Lương Kim Phượng",
  },
  {
    departmentReview: "Team Đánh giá",
    revieweeCode: "S306",
    revieweeName: "Nguyễn Thị Ngọc Anh",
  },
  {
    departmentReview: "Team Đánh giá",
    revieweeCode: "D557",
    revieweeName: "Vũ Thị Lành",
  },
  {
    departmentReview: "Team Đánh giá",
    revieweeCode: "C037",
    revieweeName: "Nguyễn Thị Quỳnh",
  },
  {
    departmentReview: "Team Đánh giá",
    revieweeCode: "D583",
    revieweeName: "Nguyễn Thế Anh",
  },
  {
    departmentReview: "Team Đánh giá",
    revieweeCode: "E09",
    revieweeName: "Chu Huy Thắng",
  },
  {
    departmentReview: "Team lịch trực",
    revieweeCode: "E62",
    revieweeName: "Vũ Xuân Trọng",
  },
  {
    departmentReview: "Team lịch trực",
    revieweeCode: "D169",
    revieweeName: "Trương Thu Hằng",
  },
  {
    departmentReview: "Team lịch trực",
    revieweeCode: "D479",
    revieweeName: "Nguyễn Minh Ngọc",
  },
  {
    departmentReview: "Team lịch trực",
    revieweeCode: "D93",
    revieweeName: "Nguyễn Thúy Vi",
  },
  {
    departmentReview: "Team lịch trực",
    revieweeCode: "D337",
    revieweeName: "Nguyễn Thành Nam",
  },
  {
    departmentReview: "Team lịch trực",
    revieweeCode: "D2821",
    revieweeName: "Lương Kim Phượng",
  },
  {
    departmentReview: "Team lịch trực",
    revieweeCode: "C037",
    revieweeName: "Nguyễn Thị Quỳnh",
  },
  {
    departmentReview: "Team lịch trực",
    revieweeCode: "D583",
    revieweeName: "Nguyễn Thế Anh",
  },
  {
    departmentReview: "Team lịch trực",
    revieweeCode: "E73",
    revieweeName: "Nguyễn Anh Tú",
  },
  {
    departmentReview: "Team lịch trực",
    revieweeCode: "E09",
    revieweeName: "Chu Huy Thắng",
  },
  {
    departmentReview: "Team lịch trực",
    revieweeCode: "M38",
    revieweeName: "Phạm Ngọc Quỳnh",
  },
  {
    departmentReview: "Team QC",
    revieweeCode: "D2537",
    revieweeName: "Nguyễn Văn Thao",
  },
  {
    departmentReview: "Team QC",
    revieweeCode: "D337",
    revieweeName: "Nguyễn Thành Nam",
  },
  {
    departmentReview: "Team QC",
    revieweeCode: "D557",
    revieweeName: "Vũ Thị Lành",
  },
  {
    departmentReview: "Team QC",
    revieweeCode: "D583",
    revieweeName: "Nguyễn Thế Anh",
  },
  {
    departmentReview: "Team QC",
    revieweeCode: "E73",
    revieweeName: "Nguyễn Anh Tú",
  },
  {
    departmentReview: "Team QC",
    revieweeCode: "E09",
    revieweeName: "Chu Huy Thắng",
  },
  {
    departmentReview: "Team QC",
    revieweeCode: "D388",
    revieweeName: "Trần Phương Anh",
  },
  {
    departmentReview: "Team QC",
    revieweeCode: "M70",
    revieweeName: "Phạm Khánh Linh",
  },
  {
    departmentReview: "Team QC",
    revieweeCode: "M38",
    revieweeName: "Phạm Ngọc Quỳnh",
  },
  {
    departmentReview: "Team QC",
    revieweeCode: "D2607",
    revieweeName: "Nguyễn Bá Nam",
  },
  {
    departmentReview: "Team Buying",
    revieweeCode: "D4309",
    revieweeName: "Nguyễn Văn Cương",
  },
  {
    departmentReview: "Team Buying",
    revieweeCode: "D4163",
    revieweeName: "Lê Đăng Dũng",
  },
  {
    departmentReview: "Team Buying",
    revieweeCode: "D2825",
    revieweeName: "Phạm Ngọc Quỳnh",
  },
  {
    departmentReview: "Team Buying",
    revieweeCode: "S41",
    revieweeName: "Nguyễn Hữu Long",
  },
  {
    departmentReview: "Team Buying",
    revieweeCode: "D557",
    revieweeName: "Vũ Thị Lành",
  },
  {
    departmentReview: "Team Buying",
    revieweeCode: "D2680",
    revieweeName: "Nguyễn Thị Diệp",
  },
  {
    departmentReview: "Team Buying",
    revieweeCode: "C037",
    revieweeName: "Nguyễn Thị Quỳnh",
  },
  {
    departmentReview: "Team Buying",
    revieweeCode: "D583",
    revieweeName: "Nguyễn Thế Anh",
  },
  {
    departmentReview: "Team Buying",
    revieweeCode: "E09",
    revieweeName: "Chu Huy Thắng",
  },
  {
    departmentReview: "Team Buying",
    revieweeCode: "D388",
    revieweeName: "Trần Phương Anh",
  },
  {
    departmentReview: "Team Logistic",
    revieweeCode: "D3982",
    revieweeName: "Hoàng Văn Luýt",
  },
  {
    departmentReview: "Team Logistic",
    revieweeCode: "D169",
    revieweeName: "Trương Thu Hằng",
  },
  {
    departmentReview: "Team Logistic",
    revieweeCode: "D337",
    revieweeName: "Nguyễn Thành Nam",
  },
  {
    departmentReview: "Team Logistic",
    revieweeCode: "S41",
    revieweeName: "Nguyễn Hữu Long",
  },
  {
    departmentReview: "Team Logistic",
    revieweeCode: "S78",
    revieweeName: "Bùi Thị Hương",
  },
  {
    departmentReview: "Team Logistic",
    revieweeCode: "D557",
    revieweeName: "Vũ Thị Lành",
  },
  {
    departmentReview: "Team Logistic",
    revieweeCode: "D583",
    revieweeName: "Nguyễn Thế Anh",
  },
  {
    departmentReview: "Team Logistic",
    revieweeCode: "D388",
    revieweeName: "Trần Phương Anh",
  },
  {
    departmentReview: "Team Logistic",
    revieweeCode: "M70",
    revieweeName: "Phạm Khánh Linh",
  },
  {
    departmentReview: "Team Logistic",
    revieweeCode: "M38",
    revieweeName: "Phạm Ngọc Quỳnh",
  },
  {
    departmentReview: "Team Kho",
    revieweeCode: "D4280",
    revieweeName: "Lương Đình Dương",
  },
  {
    departmentReview: "Team Kho",
    revieweeCode: "D1516",
    revieweeName: "Nguyễn Thùy Dương",
  },
  {
    departmentReview: "Team Kho",
    revieweeCode: "D2821",
    revieweeName: "Lương Kim Phượng",
  },
  {
    departmentReview: "Team Kho",
    revieweeCode: "S306",
    revieweeName: "Nguyễn Thị Ngọc Anh",
  },
  {
    departmentReview: "Team Kho",
    revieweeCode: "D2680",
    revieweeName: "Nguyễn Thị Diệp",
  },
  {
    departmentReview: "Team Kho",
    revieweeCode: "E73",
    revieweeName: "Nguyễn Anh Tú",
  },
  {
    departmentReview: "Team Kho",
    revieweeCode: "M70",
    revieweeName: "Phạm Khánh Linh",
  },
  {
    departmentReview: "Team Kho",
    revieweeCode: "M38",
    revieweeName: "Phạm Ngọc Quỳnh",
  },
  {
    departmentReview: "Team Kho",
    revieweeCode: "D2607",
    revieweeName: "Nguyễn Bá Nam",
  },
  {
    departmentReview: "Team Đóng gói",
    revieweeCode: "S146",
    revieweeName: "Bùi Văn Vương",
  },
  {
    departmentReview: "Team Đóng gói",
    revieweeCode: "D4309",
    revieweeName: "Nguyễn Văn Cương",
  },
  {
    departmentReview: "Team Đóng gói",
    revieweeCode: "D2537",
    revieweeName: "Nguyễn Văn Thao",
  },
  {
    departmentReview: "Team Đóng gói",
    revieweeCode: "D4163",
    revieweeName: "Lê Đăng Dũng",
  },
  {
    departmentReview: "Team Đóng gói",
    revieweeCode: "D2825",
    revieweeName: "Phạm Ngọc Quỳnh",
  },
  {
    departmentReview: "Team Đóng gói",
    revieweeCode: "D1516",
    revieweeName: "Nguyễn Thùy Dương",
  },
  {
    departmentReview: "Team Đóng gói",
    revieweeCode: "S41",
    revieweeName: "Nguyễn Hữu Long",
  },
  {
    departmentReview: "Team Đóng gói",
    revieweeCode: "S78",
    revieweeName: "Bùi Thị Hương",
  },
  {
    departmentReview: "Team Đóng gói",
    revieweeCode: "E73",
    revieweeName: "Nguyễn Anh Tú",
  },
  {
    departmentReview: "Team Đóng gói",
    revieweeCode: "M70",
    revieweeName: "Phạm Khánh Linh",
  },
  {
    departmentReview: "Team Đóng gói",
    revieweeCode: "D2607",
    revieweeName: "Nguyễn Bá Nam",
  },
  {
    departmentReview: "Team Kiểm toán",
    revieweeCode: "D169",
    revieweeName: "Trương Thu Hằng",
  },
  {
    departmentReview: "Team Kiểm toán",
    revieweeCode: "D337",
    revieweeName: "Nguyễn Thành Nam",
  },
  {
    departmentReview: "Team Kiểm toán",
    revieweeCode: "S78",
    revieweeName: "Bùi Thị Hương",
  },
  {
    departmentReview: "Team Kiểm toán",
    revieweeCode: "D2680",
    revieweeName: "Nguyễn Thị Diệp",
  },
  {
    departmentReview: "Team Kiểm toán",
    revieweeCode: "D583",
    revieweeName: "Nguyễn Thế Anh",
  },
  {
    departmentReview: "Team Kiểm toán",
    revieweeCode: "E09",
    revieweeName: "Chu Huy Thắng",
  },
  {
    departmentReview: "Team Kiểm toán",
    revieweeCode: "D388",
    revieweeName: "Trần Phương Anh",
  },
  {
    departmentReview: "Team Kiểm toán",
    revieweeCode: "M70",
    revieweeName: "Phạm Khánh Linh",
  },
  {
    departmentReview: "Team Kiểm toán",
    revieweeCode: "M38",
    revieweeName: "Phạm Ngọc Quỳnh",
  },
  {
    departmentReview: "Team Kiểm toán",
    revieweeCode: "D2607",
    revieweeName: "Nguyễn Bá Nam",
  },
  {
    departmentReview: "Team Kế toán nội bộ",
    revieweeCode: "D2960",
    revieweeName: "Nguyễn Kiên Cường",
  },
  {
    departmentReview: "Team Kế toán nội bộ",
    revieweeCode: "S146",
    revieweeName: "Bùi Văn Vương",
  },
  {
    departmentReview: "Team Kế toán nội bộ",
    revieweeCode: "D169",
    revieweeName: "Trương Thu Hằng",
  },
  {
    departmentReview: "Team Kế toán nội bộ",
    revieweeCode: "D2537",
    revieweeName: "Nguyễn Văn Thao",
  },
  {
    departmentReview: "Team Kế toán nội bộ",
    revieweeCode: "D479",
    revieweeName: "Nguyễn Minh Ngọc",
  },
  {
    departmentReview: "Team Kế toán nội bộ",
    revieweeCode: "S41",
    revieweeName: "Nguyễn Hữu Long",
  },
  {
    departmentReview: "Team Kế toán nội bộ",
    revieweeCode: "D2663",
    revieweeName: "Nguyễn Phúc Tài",
  },
  {
    departmentReview: "Team Kế toán nội bộ",
    revieweeCode: "D2821",
    revieweeName: "Lương Kim Phượng",
  },
  {
    departmentReview: "Team Kế toán nội bộ",
    revieweeCode: "S78",
    revieweeName: "Bùi Thị Hương",
  },
  {
    departmentReview: "Team Kế toán nội bộ",
    revieweeCode: "D557",
    revieweeName: "Vũ Thị Lành",
  },
  {
    departmentReview: "Team Kế toán nội bộ",
    revieweeCode: "E73",
    revieweeName: "Nguyễn Anh Tú",
  },
  {
    departmentReview: "Team Kế toán nội bộ",
    revieweeCode: "D2607",
    revieweeName: "Nguyễn Bá Nam",
  },
  {
    departmentReview: "Team Kế toán thuế",
    revieweeCode: "D3982",
    revieweeName: "Hoàng Văn Luýt",
  },
  {
    departmentReview: "Team Kế toán thuế",
    revieweeCode: "S41",
    revieweeName: "Nguyễn Hữu Long",
  },
  {
    departmentReview: "Team Kế toán thuế",
    revieweeCode: "D2663",
    revieweeName: "Nguyễn Phúc Tài",
  },
  {
    departmentReview: "Team Kế toán thuế",
    revieweeCode: "D2821",
    revieweeName: "Lương Kim Phượng",
  },
  {
    departmentReview: "Team Kế toán thuế",
    revieweeCode: "S78",
    revieweeName: "Bùi Thị Hương",
  },
  {
    departmentReview: "Team Kế toán thuế",
    revieweeCode: "D2680",
    revieweeName: "Nguyễn Thị Diệp",
  },
  {
    departmentReview: "Team Kế toán thuế",
    revieweeCode: "C037",
    revieweeName: "Nguyễn Thị Quỳnh",
  },
  {
    departmentReview: "Team Kế toán thuế",
    revieweeCode: "E73",
    revieweeName: "Nguyễn Anh Tú",
  },
  {
    departmentReview: "Team Kế toán thuế",
    revieweeCode: "E09",
    revieweeName: "Chu Huy Thắng",
  },
  {
    departmentReview: "Team Kế toán thuế",
    revieweeCode: "D388",
    revieweeName: "Trần Phương Anh",
  },
  {
    departmentReview: "Team Kế toán thuế",
    revieweeCode: "M70",
    revieweeName: "Phạm Khánh Linh",
  },
  {
    departmentReview: "Team Kế toán thuế",
    revieweeCode: "M38",
    revieweeName: "Phạm Ngọc Quỳnh",
  },
  {
    departmentReview: "Team Bếp",
    revieweeCode: "D2537",
    revieweeName: "Nguyễn Văn Thao",
  },
  {
    departmentReview: "Team Bếp",
    revieweeCode: "D479",
    revieweeName: "Nguyễn Minh Ngọc",
  },
  {
    departmentReview: "Team Bếp",
    revieweeCode: "D1516",
    revieweeName: "Nguyễn Thùy Dương",
  },
  {
    departmentReview: "Team Bếp",
    revieweeCode: "D337",
    revieweeName: "Nguyễn Thành Nam",
  },
  {
    departmentReview: "Team Bếp",
    revieweeCode: "S306",
    revieweeName: "Nguyễn Thị Ngọc Anh",
  },
  {
    departmentReview: "Team Bếp",
    revieweeCode: "D557",
    revieweeName: "Vũ Thị Lành",
  },
  {
    departmentReview: "Team Bếp",
    revieweeCode: "E73",
    revieweeName: "Nguyễn Anh Tú",
  },
  {
    departmentReview: "Team Bếp",
    revieweeCode: "E09",
    revieweeName: "Chu Huy Thắng",
  },
  {
    departmentReview: "Team Bếp",
    revieweeCode: "D388",
    revieweeName: "Trần Phương Anh",
  },
  {
    departmentReview: "Team Bếp",
    revieweeCode: "M70",
    revieweeName: "Phạm Khánh Linh",
  },
  {
    departmentReview: "Team Bếp",
    revieweeCode: "D2607",
    revieweeName: "Nguyễn Bá Nam",
  },
  {
    departmentReview: "Team Tech",
    revieweeCode: "D169",
    revieweeName: "Trương Thu Hằng",
  },
  {
    departmentReview: "Team Tech",
    revieweeCode: "S306",
    revieweeName: "Nguyễn Thị Ngọc Anh",
  },
  {
    departmentReview: "Team Tech",
    revieweeCode: "C037",
    revieweeName: "Nguyễn Thị Quỳnh",
  },
  {
    departmentReview: "Team Tech",
    revieweeCode: "D583",
    revieweeName: "Nguyễn Thế Anh",
  },
  {
    departmentReview: "Team Tech",
    revieweeCode: "E73",
    revieweeName: "Nguyễn Anh Tú",
  },
  {
    departmentReview: "Team Tech",
    revieweeCode: "D388",
    revieweeName: "Trần Phương Anh",
  },
  {
    departmentReview: "Team Tech",
    revieweeCode: "M70",
    revieweeName: "Phạm Khánh Linh",
  },
  {
    departmentReview: "Team HC",
    revieweeCode: "D3982",
    revieweeName: "Hoàng Văn Luýt",
  },
  {
    departmentReview: "Team HC",
    revieweeCode: "D479",
    revieweeName: "Nguyễn Minh Ngọc",
  },
  {
    departmentReview: "Team HC",
    revieweeCode: "D4163",
    revieweeName: "Lê Đăng Dũng",
  },
  {
    departmentReview: "Team HC",
    revieweeCode: "D2825",
    revieweeName: "Phạm Ngọc Quỳnh",
  },
  {
    departmentReview: "Team HC",
    revieweeCode: "D1516",
    revieweeName: "Nguyễn Thùy Dương",
  },
  {
    departmentReview: "Team HC",
    revieweeCode: "S41",
    revieweeName: "Nguyễn Hữu Long",
  },
  {
    departmentReview: "Team HC",
    revieweeCode: "D2663",
    revieweeName: "Nguyễn Phúc Tài",
  },
  {
    departmentReview: "Team HC",
    revieweeCode: "S78",
    revieweeName: "Bùi Thị Hương",
  },
  {
    departmentReview: "Team HC",
    revieweeCode: "D557",
    revieweeName: "Vũ Thị Lành",
  },
  {
    departmentReview: "Team HC",
    revieweeCode: "C037",
    revieweeName: "Nguyễn Thị Quỳnh",
  },
  {
    departmentReview: "Team HC",
    revieweeCode: "D583",
    revieweeName: "Nguyễn Thế Anh",
  },
  {
    departmentReview: "Team HC",
    revieweeCode: "D388",
    revieweeName: "Trần Phương Anh",
  },
  {
    departmentReview: "Team BS",
    revieweeCode: "E62",
    revieweeName: "Vũ Xuân Trọng",
  },
  {
    departmentReview: "Team BS",
    revieweeCode: "D4309",
    revieweeName: "Nguyễn Văn Cương",
  },
  {
    departmentReview: "Team BS",
    revieweeCode: "D557",
    revieweeName: "Vũ Thị Lành",
  },
  {
    departmentReview: "Team BS",
    revieweeCode: "D2680",
    revieweeName: "Nguyễn Thị Diệp",
  },
  {
    departmentReview: "Team BS",
    revieweeCode: "C037",
    revieweeName: "Nguyễn Thị Quỳnh",
  },
  {
    departmentReview: "Team BS",
    revieweeCode: "E09",
    revieweeName: "Chu Huy Thắng",
  },
  {
    departmentReview: "Team BS",
    revieweeCode: "D388",
    revieweeName: "Trần Phương Anh",
  },
  {
    departmentReview: "Team BS",
    revieweeCode: "M70",
    revieweeName: "Phạm Khánh Linh",
  },
  {
    departmentReview: "Team BS",
    revieweeCode: "M38",
    revieweeName: "Phạm Ngọc Quỳnh",
  },
  {
    departmentReview: "Team BS",
    revieweeCode: "D2607",
    revieweeName: "Nguyễn Bá Nam",
  },
  {
    departmentReview: "Team Ship",
    revieweeCode: "S110",
    revieweeName: "Nguyễn Văn Việt",
  },
  {
    departmentReview: "Team Ship",
    revieweeCode: "D79",
    revieweeName: "Nguyễn Thị Mỹ Linh",
  },
  {
    departmentReview: "Team Ship",
    revieweeCode: "D2825",
    revieweeName: "Phạm Ngọc Quỳnh",
  },
  {
    departmentReview: "Team Ship",
    revieweeCode: "D93",
    revieweeName: "Nguyễn Thúy Vi",
  },
  {
    departmentReview: "Team Ship",
    revieweeCode: "S41",
    revieweeName: "Nguyễn Hữu Long",
  },
  {
    departmentReview: "Team Ship",
    revieweeCode: "S306",
    revieweeName: "Nguyễn Thị Ngọc Anh",
  },
  {
    departmentReview: "Team Ship",
    revieweeCode: "D2680",
    revieweeName: "Nguyễn Thị Diệp",
  },
  {
    departmentReview: "Team Ship",
    revieweeCode: "C037",
    revieweeName: "Nguyễn Thị Quỳnh",
  },
  {
    departmentReview: "Team Ship",
    revieweeCode: "D388",
    revieweeName: "Trần Phương Anh",
  },
  {
    departmentReview: "Team Ship",
    revieweeCode: "M70",
    revieweeName: "Phạm Khánh Linh",
  },
  {
    departmentReview: "Team Ship",
    revieweeCode: "D2607",
    revieweeName: "Nguyễn Bá Nam",
  },
  {
    departmentReview: "Team Media",
    revieweeCode: "S146",
    revieweeName: "Bùi Văn Vương",
  },
  {
    departmentReview: "Team Media",
    revieweeCode: "D79",
    revieweeName: "Nguyễn Thị Mỹ Linh",
  },
  {
    departmentReview: "Team Media",
    revieweeCode: "D3982",
    revieweeName: "Hoàng Văn Luýt",
  },
  {
    departmentReview: "Team Media",
    revieweeCode: "D4163",
    revieweeName: "Lê Đăng Dũng",
  },
  {
    departmentReview: "Team Media",
    revieweeCode: "D93",
    revieweeName: "Nguyễn Thúy Vi",
  },
  {
    departmentReview: "Team Media",
    revieweeCode: "D337",
    revieweeName: "Nguyễn Thành Nam",
  },
  {
    departmentReview: "Team Media",
    revieweeCode: "D388",
    revieweeName: "Trần Phương Anh",
  },
  {
    departmentReview: "Team Media",
    revieweeCode: "M70",
    revieweeName: "Phạm Khánh Linh",
  },
  {
    departmentReview: "Team Media",
    revieweeCode: "M38",
    revieweeName: "Phạm Ngọc Quỳnh",
  },
  {
    departmentReview: "Team Media",
    revieweeCode: "D2607",
    revieweeName: "Nguyễn Bá Nam",
  },
  {
    departmentReview: "Team HR HCM",
    revieweeCode: "D79",
    revieweeName: "Nguyễn Thị Mỹ Linh",
  },
  {
    departmentReview: "Team HR HCM",
    revieweeCode: "D3982",
    revieweeName: "Hoàng Văn Luýt",
  },
  {
    departmentReview: "Team HR HCM",
    revieweeCode: "D93",
    revieweeName: "Nguyễn Thúy Vi",
  },
  {
    departmentReview: "Team HR HCM",
    revieweeCode: "D2821",
    revieweeName: "Lương Kim Phượng",
  },
  {
    departmentReview: "Team HR HCM",
    revieweeCode: "D2607",
    revieweeName: "Nguyễn Bá Nam",
  },
  {
    departmentReview: "Team MKT",
    revieweeCode: "S110",
    revieweeName: "Nguyễn Văn Việt",
  },
  {
    departmentReview: "Team MKT",
    revieweeCode: "D4309",
    revieweeName: "Nguyễn Văn Cương",
  },
  {
    departmentReview: "Team MKT",
    revieweeCode: "D2680",
    revieweeName: "Nguyễn Thị Diệp",
  },
  {
    departmentReview: "Team MKT",
    revieweeCode: "C037",
    revieweeName: "Nguyễn Thị Quỳnh",
  },
  {
    departmentReview: "Team MKT",
    revieweeCode: "E09",
    revieweeName: "Chu Huy Thắng",
  },
  {
    departmentReview: "Team MKT",
    revieweeCode: "M70",
    revieweeName: "Phạm Khánh Linh",
  },
  {
    departmentReview: "Team MKT",
    revieweeCode: "M38",
    revieweeName: "Phạm Ngọc Quỳnh",
  },
  {
    departmentReview: "Team MKT",
    revieweeCode: "D2607",
    revieweeName: "Nguyễn Bá Nam",
  },
  {
    departmentReview: "TL Abby HN",
    revieweeCode: "D2960",
    revieweeName: "Nguyễn Kiên Cường",
  },
  {
    departmentReview: "TL Abby HN",
    revieweeCode: "D4280",
    revieweeName: "Lương Đình Dương",
  },
  {
    departmentReview: "TL Abby HN",
    revieweeCode: "S146",
    revieweeName: "Bùi Văn Vương",
  },
  {
    departmentReview: "TL Abby HN",
    revieweeCode: "D4309",
    revieweeName: "Nguyễn Văn Cương",
  },
  {
    departmentReview: "TL Abby HN",
    revieweeCode: "D2537",
    revieweeName: "Nguyễn Văn Thao",
  },
  {
    departmentReview: "TL Abby HN",
    revieweeCode: "D4163",
    revieweeName: "Lê Đăng Dũng",
  },
  {
    departmentReview: "TL Abby HN",
    revieweeCode: "D2825",
    revieweeName: "Phạm Ngọc Quỳnh",
  },
  {
    departmentReview: "TL Abby HN",
    revieweeCode: "D1516",
    revieweeName: "Nguyễn Thùy Dương",
  },
  {
    departmentReview: "TL Abby HN",
    revieweeCode: "D2821",
    revieweeName: "Lương Kim Phượng",
  },
  {
    departmentReview: "TL Abby HN",
    revieweeCode: "S306",
    revieweeName: "Nguyễn Thị Ngọc Anh",
  },
  {
    departmentReview: "TL Abby HN",
    revieweeCode: "D2680",
    revieweeName: "Nguyễn Thị Diệp",
  },
  {
    departmentReview: "TL Abby HN",
    revieweeCode: "E73",
    revieweeName: "Nguyễn Anh Tú",
  },
  {
    departmentReview: "TL Abby HN",
    revieweeCode: "M38",
    revieweeName: "Phạm Ngọc Quỳnh",
  },
  {
    departmentReview: "TL Abby HN",
    revieweeCode: "D2607",
    revieweeName: "Nguyễn Bá Nam",
  },
  {
    departmentReview: "TL Abby HCM",
    revieweeCode: "D3982",
    revieweeName: "Hoàng Văn Luýt",
  },
  {
    departmentReview: "TL Abby HCM",
    revieweeCode: "D2663",
    revieweeName: "Nguyễn Phúc Tài",
  },
  {
    departmentReview: "TL Abby HCM",
    revieweeCode: "S306",
    revieweeName: "Nguyễn Thị Ngọc Anh",
  },
  {
    departmentReview: "TL Abby HCM",
    revieweeCode: "C037",
    revieweeName: "Nguyễn Thị Quỳnh",
  },
  {
    departmentReview: "TL Abby HCM",
    revieweeCode: "M38",
    revieweeName: "Phạm Ngọc Quỳnh",
  },
  {
    departmentReview: "TL Abby HCM",
    revieweeCode: "D2607",
    revieweeName: "Nguyễn Bá Nam",
  },
  {
    departmentReview: "TL Savor",
    revieweeCode: "D2960",
    revieweeName: "Nguyễn Kiên Cường",
  },
  {
    departmentReview: "TL Savor",
    revieweeCode: "D4280",
    revieweeName: "Lương Đình Dương",
  },
  {
    departmentReview: "TL Savor",
    revieweeCode: "S146",
    revieweeName: "Bùi Văn Vương",
  },
  {
    departmentReview: "TL Savor",
    revieweeCode: "D4309",
    revieweeName: "Nguyễn Văn Cương",
  },
  {
    departmentReview: "TL Savor",
    revieweeCode: "D2537",
    revieweeName: "Nguyễn Văn Thao",
  },
  {
    departmentReview: "TL Savor",
    revieweeCode: "D4163",
    revieweeName: "Lê Đăng Dũng",
  },
  {
    departmentReview: "TL Savor",
    revieweeCode: "D2825",
    revieweeName: "Phạm Ngọc Quỳnh",
  },
  {
    departmentReview: "TL Savor",
    revieweeCode: "D1516",
    revieweeName: "Nguyễn Thùy Dương",
  },
  {
    departmentReview: "TL Savor",
    revieweeCode: "D337",
    revieweeName: "Nguyễn Thành Nam",
  },
  {
    departmentReview: "TL Savor",
    revieweeCode: "D2821",
    revieweeName: "Lương Kim Phượng",
  },
  {
    departmentReview: "TL Savor",
    revieweeCode: "S306",
    revieweeName: "Nguyễn Thị Ngọc Anh",
  },
  {
    departmentReview: "TL Savor",
    revieweeCode: "D2680",
    revieweeName: "Nguyễn Thị Diệp",
  },
  {
    departmentReview: "TL Savor",
    revieweeCode: "D583",
    revieweeName: "Nguyễn Thế Anh",
  },
  {
    departmentReview: "TL Savor",
    revieweeCode: "E73",
    revieweeName: "Nguyễn Anh Tú",
  },
  {
    departmentReview: "TL Savor",
    revieweeCode: "D2607",
    revieweeName: "Nguyễn Bá Nam",
  },
].map<TeamForm>((d) => {
  return {
    ...d,
    reviewerName: d.departmentReview,
    reviewType: 3,
    slug: urlSlug.convert(
      `${d.revieweeCode} ${d.revieweeName} 3 ${d.departmentReview}`
    ),
  };
});
