import { makeAutoObservable } from "mobx";

class TableStore {
  data = [
    { object: "", process: 0, detail: "" },
    { object: "", process: 0, detail: "" },
    { object: "", process: 0, detail: "" },
    { object: "", process: 0, detail: "" },
    { object: "", process: 0, detail: "" },
  ];

  updateStatus(index: number, value: number) {
    const status = Math.min(100, Math.max(0, value)); // Đảm bảo giá trị trong khoảng 0 - 100
    this.data[index].process = status;
  }
  updateObject(index: number, value: string) {
    this.data[index].object = value;
  }
  updateDetail(index: number, value: string) {
    this.data[index].detail = value;
  }

  constructor() {
    makeAutoObservable(this);
  }
}

export const tableStore = new TableStore();

export function createTableStore() {
  return new TableStore();
}
