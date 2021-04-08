import { makeAutoObservable, runInAction } from "mobx";
import { RootStore } from "./RootStore";

export class FormSummaryStore {
  rootStore: RootStore;
  summary: { [key: string]: any } = {};

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this);
  }

  async getSummary() {
    const summary = await this.rootStore.transportStore.get(
      "/review-responses/summary"
    );
    runInAction(() => {
      this.summary = summary;
    });
  }
}
