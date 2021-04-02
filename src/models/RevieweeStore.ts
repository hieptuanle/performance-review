import { makeObservable, observable } from "mobx";
import { RootStore } from "./RootStore";

export interface Reviewee {
  revieweeCode: string;
  revieweeName: string;
  revieweeDepartment: string;
  revieweePositions: string[];
  reviewLink: string;
}

export class RevieweeStore {
  rootStore: RootStore;

  reviewees = reviewees;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;

    makeObservable(this, {
      reviewees: observable,
    });
  }
}

const reviewees = [
  {
    revieweeCode: "D2960",
    revieweeName: "Nguyễn Kiên Cường",
    revieweeDepartment: "Kiểm toán",
    revieweePosition1: "Kiểm toán viên nội bộ",
    revieweePosition2: "",
    reviewLink: "https://drive.google.com",
  },
  {
    revieweeCode: "D4309",
    revieweeName: "Nguyễn Văn Cương",
    revieweeDepartment: "Purchasing",
    revieweePosition1: "Chuyên viên phân tích dữ liệu",
    revieweePosition2: "",
    reviewLink: "https://drive.google.com",
  },
  {
    revieweeCode: "D583",
    revieweeName: "Nguyễn Thế Anh",
    revieweeDepartment: "B1",
    revieweePosition1: "Quản lý sản xuất bếp",
    revieweePosition2: "",
    reviewLink: "https://drive.google.com",
  },
  {
    revieweeCode: "D2663",
    revieweeName: "Nguyễn Phúc Tài",
    revieweeDepartment: "HR",
    revieweePosition1: "Chuyên viên nhân sự tổng hợp",
    revieweePosition2: "",
    reviewLink: "https://drive.google.com",
  },
  {
    revieweeCode: "D4163",
    revieweeName: "Lê Đăng Dũng",
    revieweeDepartment: "QC",
    revieweePosition1: "Nhân viên giám sát chất lượng",
    revieweePosition2: "",
    reviewLink: "https://drive.google.com",
  },
  {
    revieweeCode: "S306",
    revieweeName: "Nguyễn Thị Ngọc Anh",
    revieweeDepartment: "Kiểm toán",
    revieweePosition1: "Kiểm toán viên nội bộ",
    revieweePosition2: "",
    reviewLink: "https://drive.google.com",
  },
  {
    revieweeCode: "D3982",
    revieweeName: "Hoàng Văn Luýt",
    revieweeDepartment: "QC",
    revieweePosition1: "Nhân viên giám sát chất lượng",
    revieweePosition2: "",
    reviewLink: "https://drive.google.com",
  },
  {
    revieweeCode: "D2680",
    revieweeName: "Nguyễn Thị Diệp",
    revieweeDepartment: "Logistics",
    revieweePosition1: "Chuyên viên phân tích dữ liệu",
    revieweePosition2: "",
    reviewLink: "https://drive.google.com",
  },
  {
    revieweeCode: "D2825",
    revieweeName: "Phạm Ngọc Quỳnh",
    revieweeDepartment: "QC",
    revieweePosition1: "Nhân viên giám sát chất lượng",
    revieweePosition2: "",
    reviewLink: "https://drive.google.com",
  },
  {
    revieweeCode: "D4280",
    revieweeName: "Lương Đình Dương",
    revieweeDepartment: "Tài xế",
    revieweePosition1: "Tài xế xe tải",
    revieweePosition2: "",
    reviewLink: "https://drive.google.com",
  },
  {
    revieweeCode: "M70",
    revieweeName: "Phạm Khánh Linh",
    revieweeDepartment: "Purchasing",
    revieweePosition1: "Chuyên viên mua hàng",
    revieweePosition2: "",
    reviewLink: "https://drive.google.com",
  },
  {
    revieweeCode: "D2821",
    revieweeName: "Lương Kim Phượng",
    revieweeDepartment: "HR",
    revieweePosition1: "Chuyên viên Tuyển dụng",
    revieweePosition2: "",
    reviewLink: "https://drive.google.com",
  },
  {
    revieweeCode: "D479",
    revieweeName: "Nguyễn Minh Ngọc",
    revieweeDepartment: "Kho - ĐG",
    revieweePosition1: "Chuyên viên nhân sự tổng hợp",
    revieweePosition2: "",
    reviewLink: "https://drive.google.com",
  },
  {
    revieweeCode: "D337",
    revieweeName: "Nguyễn Thành Nam",
    revieweeDepartment: "B2",
    revieweePosition1: "Chuyên viên nghiên cứu, phát triển sản phẩm",
    revieweePosition2: "Quản lý sản xuất bếp",
    reviewLink: "https://drive.google.com",
  },
  {
    revieweeCode: "S78",
    revieweeName: "Bùi Thị Hương",
    revieweeDepartment: "Kho - ĐG",
    revieweePosition1: "Quản lý vận hành kho",
    revieweePosition2: "",
    reviewLink: "https://drive.google.com",
  },
  {
    revieweeCode: "D557",
    revieweeName: "Vũ Thị Lành",
    revieweeDepartment: "Kho - ĐG",
    revieweePosition1: "Quản lý vận hành đóng gói",
    revieweePosition2: "",
    reviewLink: "https://drive.google.com",
  },
  {
    revieweeCode: "D1516",
    revieweeName: "Nguyễn Thùy Dương",
    revieweeDepartment: "QC",
    revieweePosition1: "Nhân viên giám sát chất lượng",
    revieweePosition2: "",
    reviewLink: "https://drive.google.com",
  },
  {
    revieweeCode: "D2607",
    revieweeName: "Nguyễn Bá Nam",
    revieweeDepartment: "Đánh giá",
    revieweePosition1: "Chuyên viên nhân sự tổng hợp",
    revieweePosition2: "",
    reviewLink: "https://drive.google.com",
  },
  {
    revieweeCode: "D169",
    revieweeName: "Trương Thu Hằng",
    revieweeDepartment: "BS",
    revieweePosition1: "Business Analyst",
    revieweePosition2: "",
    reviewLink: "https://drive.google.com",
  },
  {
    revieweeCode: "C037",
    revieweeName: "Nguyễn Thị Quỳnh",
    revieweeDepartment: "KT",
    revieweePosition1: "Kế toán tổng hợp",
    revieweePosition2: "",
    reviewLink: "https://drive.google.com",
  },
  {
    revieweeCode: "S110",
    revieweeName: "Nguyễn Văn Việt",
    revieweeDepartment: "OFFICE",
    revieweePosition1: "Nhân viên thiết kế",
    revieweePosition2: "",
    reviewLink: "https://drive.google.com",
  },
  {
    revieweeCode: "D93",
    revieweeName: "Nguyễn Thúy Vi",
    revieweeDepartment: "Training",
    revieweePosition1: "Chuyên viên đào tạo và phát triển",
    revieweePosition2: "Visual merchandiser",
    reviewLink: "https://drive.google.com",
  },
  {
    revieweeCode: "E73",
    revieweeName: "Nguyễn Anh Tú",
    revieweeDepartment: "HC",
    revieweePosition1: "IT helpdesk",
    revieweePosition2: "",
    reviewLink: "https://drive.google.com",
  },
  {
    revieweeCode: "M38",
    revieweeName: "Phạm Ngọc Quỳnh",
    revieweeDepartment: "E0",
    revieweePosition1: "Chuyên viên bán hàng",
    revieweePosition2: "Chăm sóc khách hàng",
    reviewLink: "https://drive.google.com",
  },
  {
    revieweeCode: "S41",
    revieweeName: "Nguyễn Hữu Long",
    revieweeDepartment: "Kho - ĐG",
    revieweePosition1: "Quản lý vận hành kho",
    revieweePosition2: "",
    reviewLink: "https://drive.google.com",
  },
  {
    revieweeCode: "S146",
    revieweeName: "Bùi Văn Vương",
    revieweeDepartment: "HC",
    revieweePosition1: "Nhân viên kỹ thuật nội thất",
    revieweePosition2: "",
    reviewLink: "https://drive.google.com",
  },
  {
    revieweeCode: "D2537",
    revieweeName: "Nguyễn Văn Thao",
    revieweeDepartment: "HC",
    revieweePosition1: "Nhân viên kỹ thuật điện nước",
    revieweePosition2: "",
    reviewLink: "https://drive.google.com",
  },
  {
    revieweeCode: "D79",
    revieweeName: "Nguyễn Thị Mỹ Linh",
    revieweeDepartment: "Training",
    revieweePosition1: "Chuyên viên đào tạo và phát triển",
    revieweePosition2: "",
    reviewLink: "https://drive.google.com",
  },
  {
    revieweeCode: "D388",
    revieweeName: "Trần Phương Anh",
    revieweeDepartment: "Kho - ĐG",
    revieweePosition1: "Trưởng phòng kho vận",
    revieweePosition2: "",
    reviewLink: "https://drive.google.com",
  },
  {
    revieweeCode: "E09",
    revieweeName: "Chu Huy Thắng",
    revieweeDepartment: "Tech",
    revieweePosition1: "Lập trình viên Full stack",
    revieweePosition2: "",
    reviewLink: "https://drive.google.com",
  },
  {
    revieweeCode: "E62",
    revieweeName: "Nguyễn Xuân Trọng",
    revieweeDepartment: "Tech",
    revieweePosition1: "Lập trình viên Full stack",
    revieweePosition2: "",
    reviewLink: "https://drive.google.com",
  },
].map<Reviewee>((d) => {
  return {
    revieweeCode: d.revieweeCode,
    revieweeName: d.revieweeName,
    revieweeDepartment: d.revieweeDepartment,
    revieweePositions: [d.revieweePosition1, d.revieweePosition2].filter(
      (d) => !!d
    ),
    reviewLink: d.reviewLink,
  };
});
