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
    let link = "/review-responses";
    if (this.rootStore.authenticationStore.seeAll !== true) {
      link += "?revieweeCode=" + this.rootStore.authenticationStore.userCode;
    }
    const reviewResponses = (await this.rootStore.transportStore.get(
      link
    )) as ReviewResponse[];
    runInAction(() => {
      this.responses = reviewResponses;
    });
  }
}
