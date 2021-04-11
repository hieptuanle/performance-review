import { action, makeAutoObservable, runInAction } from "mobx";
import { Reviewee } from "../../models/RevieweeStore";
import { ReviewResponse } from "../../models/ReviewResponseStore";
import { RootStore } from "../../models/RootStore";

export class ViewRevieweeStore {
  rootStore: RootStore;
  reviewResponses: ReviewResponse[] = [];
  reviewee: Reviewee | null = null;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this, {
      getReviewee: action,
    });
  }

  getReviewee(revieweeSlug: string) {
    const matchReviewee = this.rootStore.revieweeStore.reviewees.find(
      (reviewee) => {
        return (reviewee.revieweeSlug = revieweeSlug);
      }
    );
    this.reviewee = matchReviewee || null;
  }

  async getReviewResponse(reviewee: Reviewee) {
    const reviewResponses = (await this.rootStore.transportStore.get(
      "/review-responses/?revieweeCode=" + reviewee.revieweeCode
    )) as ReviewResponse[];
    runInAction(() => {
      this.reviewResponses = reviewResponses;
    });
  }
}
