import { makeAutoObservable } from "mobx";

export interface TableRow {
  object: string;
  process: number;
  detail: string;
  keyResult: string;
}

const emptyRows = (count: number): TableRow[] =>
  Array.from({ length: count }, () => ({
    object: "",
    process: 0,
    detail: "",
    keyResult: "",
  }));

export class TableStore {
  data: TableRow[];

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

  constructor(initialData?: TableRow[]) {
    this.data =
      initialData && initialData.length > 0 ? initialData : emptyRows(5);
    makeAutoObservable(this);
  }
}
