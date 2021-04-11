import { action, computed, makeAutoObservable, runInAction } from "mobx";
import { Reviewee } from "../../models/RevieweeStore";
import { ReviewResponse } from "../../models/ReviewResponseStore";
import { RootStore } from "../../models/RootStore";
import { groupBy, flatMap, map } from "lodash";

export class ViewRevieweeStore {
  rootStore: RootStore;
  reviewResponses: ReviewResponse[] = [];
  reviewee: Reviewee | null = null;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this, {
      getReviewee: action,
      questions: computed,
    });
  }

  get questions() {
    const questions = flatMap(this.reviewResponses, (response) => {
      const { questions, ...rest } = response;
      return response.questions.map((question) => ({
        ...question,
        ...rest,
      }));
    });
    return map(groupBy(questions, "content"), (value, key) => {
      return {
        content: key,
        group: value[0].group,
        answers: value,
      };
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
