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
    reviewLink:
      "https://docs.google.com/spreadsheets/d/190pNvwNWFJL1M42-F65Ga5c8_SLIpBkZPdwO54A6jlA/edit#gid=111538391",
  },
  {
    revieweeCode: "D4309",
    revieweeName: "Nguyễn Văn Cương",
    revieweeDepartment: "Purchasing",
    revieweePosition1: "Chuyên viên phân tích dữ liệu",
    revieweePosition2: "",
    reviewLink:
      "https://docs.google.com/spreadsheets/d/1B19FrE0jKvJ6j7xgke_vsTFXdv6M7tknbBne_G_-O2U/edit#gid=1518152008",
  },
  {
    revieweeCode: "D583",
    revieweeName: "Nguyễn Thế Anh",
    revieweeDepartment: "B1",
    revieweePosition1: "Quản lý sản xuất bếp",
    revieweePosition2: "",
    reviewLink:
      "https://docs.google.com/spreadsheets/d/1tU6L3ry8HsQd_dB6UKhrVF9_ja-t2rigFGwCuI45rLM/edit#gid=132395495",
  },
  {
    revieweeCode: "D2663",
    revieweeName: "Nguyễn Phúc Tài",
    revieweeDepartment: "HR",
    revieweePosition1: "Chuyên viên nhân sự tổng hợp",
    revieweePosition2: "",
    reviewLink:
      "https://docs.google.com/spreadsheets/d/11UaZciMqzFrBBTTNlAzaAVicLZRcw2UP1X6TaR7f0ME/edit#gid=2095323487",
  },
  {
    revieweeCode: "D4163",
    revieweeName: "Lê Đăng Dũng",
    revieweeDepartment: "QC",
    revieweePosition1: "Nhân viên giám sát chất lượng",
    revieweePosition2: "",
    reviewLink:
      "https://docs.google.com/spreadsheets/d/1jX3NvSklaxbWGxoEEcb5-w4699rt15Q-LK5jaZ69le4/edit?usp=sharing",
  },
  {
    revieweeCode: "S306",
    revieweeName: "Nguyễn Thị Ngọc Anh",
    revieweeDepartment: "Kiểm toán",
    revieweePosition1: "Kiểm toán viên nội bộ",
    revieweePosition2: "",
    reviewLink:
      "https://docs.google.com/spreadsheets/d/1jX3NvSklaxbWGxoEEcb5-w4699rt15Q-LK5jaZ69le4/edit?usp=sharing",
  },
  {
    revieweeCode: "D3982",
    revieweeName: "Hoàng Văn Luýt",
    revieweeDepartment: "QC",
    revieweePosition1: "Nhân viên giám sát chất lượng",
    revieweePosition2: "",
    reviewLink:
      "https://docs.google.com/spreadsheets/d/1_hnV4kq6G6Xm8IdtFfVyICjufGyD9JwH9HZN1YcYplk/edit?usp=sharing",
  },
  {
    revieweeCode: "D2680",
    revieweeName: "Nguyễn Thị Diệp",
    revieweeDepartment: "Logistics",
    revieweePosition1: "Chuyên viên phân tích dữ liệu",
    revieweePosition2: "",
    reviewLink:
      "https://docs.google.com/spreadsheets/d/1lz8nrwV38u7u-CcpEAKtgV8yF4aZzNt3BkIaEL4Ijjs/edit?usp=sharing",
  },
  {
    revieweeCode: "D2825",
    revieweeName: "Phạm Ngọc Quỳnh",
    revieweeDepartment: "QC",
    revieweePosition1: "Nhân viên giám sát chất lượng",
    revieweePosition2: "",
    reviewLink:
      "https://docs.google.com/spreadsheets/d/1bnflY7_SiRdh9PRGRoLEh2DPVTB0yCUC12x4QqeOYGs/edit?usp=sharing",
  },
  {
    revieweeCode: "D4280",
    revieweeName: "Lương Đình Dương",
    revieweeDepartment: "Tài xế",
    revieweePosition1: "Tài xế xe tải",
    revieweePosition2: "",
    reviewLink:
      "https://docs.google.com/spreadsheets/d/1m-rh6M9nBbxgkWDRopcJNoSHTG-YGlscO9UXVL3IIQw/edit?usp=sharing",
  },
  {
    revieweeCode: "M70",
    revieweeName: "Phạm Khánh Linh",
    revieweeDepartment: "Purchasing",
    revieweePosition1: "Chuyên viên mua hàng",
    revieweePosition2: "",
    reviewLink:
      "https://docs.google.com/spreadsheets/d/1XtnBchqaAzyxIRL34MJWOuXGjI05gLkp-8Tpx123xqo/edit?usp=sharing",
  },
  {
    revieweeCode: "D2821",
    revieweeName: "Lương Kim Phượng",
    revieweeDepartment: "HR",
    revieweePosition1: "Chuyên viên Tuyển dụng",
    revieweePosition2: "",
    reviewLink:
      "https://docs.google.com/spreadsheets/d/1yva5ND3qWEE04vjJRILf7sJ2W5hwtJlzskV60FHYgtk/edit?usp=sharing",
  },
  {
    revieweeCode: "D479",
    revieweeName: "Nguyễn Minh Ngọc",
    revieweeDepartment: "Kho - ĐG",
    revieweePosition1: "Chuyên viên nhân sự tổng hợp",
    revieweePosition2: "",
    reviewLink:
      "https://docs.google.com/spreadsheets/d/14Pz7MuFiSshE--ARAOuGlHVd1mFxTuDXRq_wMCLJ3Yg/edit?usp=sharing",
  },
  {
    revieweeCode: "D337",
    revieweeName: "Nguyễn Thành Nam",
    revieweeDepartment: "B2",
    revieweePosition1: "Chuyên viên nghiên cứu, phát triển sản phẩm",
    revieweePosition2: "Quản lý sản xuất bếp",
    reviewLink:
      "https://docs.google.com/spreadsheets/d/1_SH1BN-2fCWqFOZe7JSHipt8g0hNgaew_IKiFkelYLY/edit?usp=sharing",
  },
  {
    revieweeCode: "S78",
    revieweeName: "Bùi Thị Hương",
    revieweeDepartment: "Kho - ĐG",
    revieweePosition1: "Quản lý vận hành kho",
    revieweePosition2: "",
    reviewLink:
      "https://docs.google.com/spreadsheets/d/1xShW3H910JDoDotoEBLdQXQ8tnciYaJGo6t68yL4eyY/edit?usp=sharing",
  },
  {
    revieweeCode: "D557",
    revieweeName: "Vũ Thị Lành",
    revieweeDepartment: "Kho - ĐG",
    revieweePosition1: "Quản lý vận hành đóng gói",
    revieweePosition2: "",
    reviewLink:
      "https://docs.google.com/spreadsheets/d/1WaNflK7Q3HcQlAe_e8rroYEzA920VmWwA_njU403w58/edit?usp=sharing",
  },
  {
    revieweeCode: "D1516",
    revieweeName: "Nguyễn Thùy Dương",
    revieweeDepartment: "QC",
    revieweePosition1: "Nhân viên giám sát chất lượng",
    revieweePosition2: "",
    reviewLink:
      "https://docs.google.com/spreadsheets/d/1gJfTVHkz0y6EvJ3d0uvSeDbXDliWakpd9fuPMvkhLBs/edit?usp=sharing",
  },
  {
    revieweeCode: "D2607",
    revieweeName: "Nguyễn Bá Nam",
    revieweeDepartment: "Đánh giá",
    revieweePosition1: "Chuyên viên nhân sự tổng hợp",
    revieweePosition2: "",
    reviewLink:
      "https://docs.google.com/spreadsheets/d/1fC5vfLPIzkrjWjJes2hP5jSTILy7S9htJzO1rmp2vsE/edit?usp=sharing",
  },
  {
    revieweeCode: "D169",
    revieweeName: "Trương Thu Hằng",
    revieweeDepartment: "BS",
    revieweePosition1: "Business Analyst",
    revieweePosition2: "",
    reviewLink:
      "https://docs.google.com/spreadsheets/d/1wcE9feUcYojEbFsN5ygQ7RjUdIMhyAUBLXMgDtp9iMw/edit?usp=sharing",
  },
  {
    revieweeCode: "C037",
    revieweeName: "Nguyễn Thị Quỳnh",
    revieweeDepartment: "KT",
    revieweePosition1: "Kế toán tổng hợp",
    revieweePosition2: "",
    reviewLink:
      "https://docs.google.com/spreadsheets/d/1WSn6GBzWkwf8HC8RTxJfAL7GtsWs92dGtRVK1R6b-9A/edit#gid=692968336",
  },
  {
    revieweeCode: "S110",
    revieweeName: "Nguyễn Văn Việt",
    revieweeDepartment: "OFFICE",
    revieweePosition1: "Nhân viên thiết kế",
    revieweePosition2: "",
    reviewLink:
      "https://docs.google.com/spreadsheets/d/1JPRhQP9zMrfjhjvPMJzCO2qPER7Bu83gALlTzOkW_P4/edit?usp=sharing",
  },
  {
    revieweeCode: "D93",
    revieweeName: "Nguyễn Thúy Vi",
    revieweeDepartment: "Training",
    revieweePosition1: "Chuyên viên đào tạo và phát triển",
    revieweePosition2: "Visual merchandiser",
    reviewLink:
      "https://docs.google.com/spreadsheets/d/1ryVpn28rqGSuyIcf_WG97KBSnib5-i6hsPmxmdC6f3o/edit?usp=sharing",
  },
  {
    revieweeCode: "E73",
    revieweeName: "Nguyễn Anh Tú",
    revieweeDepartment: "HC",
    revieweePosition1: "IT helpdesk",
    revieweePosition2: "",
    reviewLink:
      "https://docs.google.com/spreadsheets/d/1ryVpn28rqGSuyIcf_WG97KBSnib5-i6hsPmxmdC6f3o/edit?usp=sharing",
  },
  {
    revieweeCode: "M38",
    revieweeName: "Phạm Ngọc Quỳnh",
    revieweeDepartment: "E0",
    revieweePosition1: "Chuyên viên bán hàng",
    revieweePosition2: "Chăm sóc khách hàng",
    reviewLink:
      "https://docs.google.com/spreadsheets/d/1TrkAN3bnzwuGzjCeAWkoFqBe3FmPvScw2oPoZb5H4Ow/edit?usp=sharing",
  },
  {
    revieweeCode: "S41",
    revieweeName: "Nguyễn Hữu Long",
    revieweeDepartment: "Kho - ĐG",
    revieweePosition1: "Quản lý vận hành kho",
    revieweePosition2: "",
    reviewLink:
      "https://docs.google.com/spreadsheets/d/1TrkAN3bnzwuGzjCeAWkoFqBe3FmPvScw2oPoZb5H4Ow/edit?usp=sharing",
  },
  {
    revieweeCode: "S146",
    revieweeName: "Bùi Văn Vương",
    revieweeDepartment: "HC",
    revieweePosition1: "Nhân viên kỹ thuật nội thất",
    revieweePosition2: "",
    reviewLink:
      "https://docs.google.com/spreadsheets/d/1zwJc9QKcid5us_HDUOAif4Xtd0tS8V_i31EyFz9e3oI/edit?usp=sharing",
  },
  {
    revieweeCode: "D2537",
    revieweeName: "Nguyễn Văn Thao",
    revieweeDepartment: "HC",
    revieweePosition1: "Nhân viên kỹ thuật điện nước",
    revieweePosition2: "",
    reviewLink:
      "https://docs.google.com/spreadsheets/d/16MKK4NKp9UN2MtcujwX4QAZgt2tHrYfbpbhtEw-QSmU/edit?usp=sharing",
  },
  {
    revieweeCode: "D79",
    revieweeName: "Nguyễn Thị Mỹ Linh",
    revieweeDepartment: "Training",
    revieweePosition1: "Chuyên viên đào tạo và phát triển",
    revieweePosition2: "",
    reviewLink:
      "https://docs.google.com/spreadsheets/d/1VTsCIqEO3nSIW5guI-nScCePRqvGhzN4IOKQMFiIt1c/edit?usp=sharing",
  },
  {
    revieweeCode: "D388",
    revieweeName: "Trần Phương Anh",
    revieweeDepartment: "Kho - ĐG",
    revieweePosition1: "Trưởng phòng kho vận",
    revieweePosition2: "",
    reviewLink:
      "https://docs.google.com/spreadsheets/d/1CP52JNR9xZvNDY6xGwl8TA7wcBT0S4J0gCOfFmaJ_PE/edit?usp=sharing",
  },
  {
    revieweeCode: "E09",
    revieweeName: "Chu Huy Thắng",
    revieweeDepartment: "Tech",
    revieweePosition1: "Lập trình viên Full stack",
    revieweePosition2: "",
    reviewLink:
      "https://docs.google.com/spreadsheets/d/1CP52JNR9xZvNDY6xGwl8TA7wcBT0S4J0gCOfFmaJ_PE/edit?usp=sharing",
  },
  {
    revieweeCode: "E62",
    revieweeName: "Vũ Xuân Trọng",
    revieweeDepartment: "Tech",
    revieweePosition1: "Lập trình viên Full stack",
    revieweePosition2: "",
    reviewLink:
      "https://docs.google.com/spreadsheets/d/1qS5AKbmha3RQdE6GKccn47WNbFWt9YIwknicSa5CMYs/edit#gid=470392220",
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
