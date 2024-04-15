import { makeAutoObservable } from "mobx";

export class TableStore {
  data = [
    { object: "", process: 0, detail: "", keyResult: "" },
    { object: "", process: 0, detail: "", keyResult: "" },
    { object: "", process: 0, detail: "", keyResult: "" },
    { object: "", process: 0, detail: "", keyResult: "" },
    { object: "", process: 0, detail: "", keyResult: "" },
  ];

  updateStatus(index: number, value: number) {
    const status = Math.min(100, Math.max(0, value)); // Đảm bảo giá trị trong khoảng 0 - 100
    this.data[index].process = status;
  }
  updateObject(index: number, value: string) {
    this.data[index].object = value;
  }
  updateKeyResult(index: number, value: string) {
    this.data[index].keyResult = value;
  }
  updateDetail(index: number, value: string) {
    this.data[index].detail = value;
  }

  constructor() {
    makeAutoObservable(this);
  }
}
