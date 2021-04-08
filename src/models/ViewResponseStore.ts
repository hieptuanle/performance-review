import { makeAutoObservable, runInAction } from "mobx";
import { ReviewResponse } from "../models/ReviewResponseStore";
import { RootStore } from "../models/RootStore";

export class ViewResponseStore {
  rootStore: RootStore;
  response: ReviewResponse | null = null;
  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this);
  }

  async findOne(responseId: string) {
    console.log("find");
    const reviewResponse = (await this.rootStore.transportStore.get(
      "/review-responses/" + responseId
    )) as ReviewResponse;
    runInAction(() => {
      this.response = reviewResponse;
    });
  }

  async clear() {
    this.response = null;
  }
}
