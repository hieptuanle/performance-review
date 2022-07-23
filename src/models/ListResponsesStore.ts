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
    if (this.rootStore.authenticationStore.viewMode === "employee") {
      link += "?employeeCode=" + this.rootStore.authenticationStore.userCode;
    } else if (this.rootStore.authenticationStore.viewMode === "manager") {
      link += "?managerCode=" + this.rootStore.authenticationStore.userCode;
    }

    const reviewResponses = (await this.rootStore.transportStore.get(
      link
    )) as ReviewResponse[];
    runInAction(() => {
      this.responses = reviewResponses;
    });
  }
}
