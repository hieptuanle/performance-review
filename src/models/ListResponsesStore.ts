import { makeAutoObservable, runInAction } from "mobx";
import { ReviewResponse } from "../models/ReviewResponseStore";
import { RootStore } from "../models/RootStore";

export class ListResponsesStore {
  rootStore: RootStore;
  responses: ReviewResponse[] = [];
  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this);
  }

  async findMyResponses() {
    const reviewResponses = (await this.rootStore.transportStore.get(
      "/review-responses"
    )) as ReviewResponse[];
    runInAction(() => {
      this.responses = reviewResponses;
    });
  }
}
