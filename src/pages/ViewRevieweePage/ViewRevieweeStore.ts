import { action, computed, makeAutoObservable, runInAction } from "mobx";
import { Reviewee } from "../../models/RevieweeStore";
import { ReviewResponse } from "../../models/ReviewResponseStore";
import { RootStore } from "../../models/RootStore";
import { groupBy, flatMap, map, orderBy, sumBy, filter } from "lodash";

function round(number: number) {
  return Math.round(number * 10) / 10;
}
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
    return map(groupBy(questions, "content"), (answers, key) => {
      const selfAssessmentMark = round(
        sumBy(
          filter(answers, (x) => x.reviewType <= 2 && x.mark > 0),
          (x) => parseInt(`${x.mark}`)
        ) / filter(answers, (x) => x.reviewType <= 2 && x.mark > 0).length
      );

      const otherMark = round(
        sumBy(
          filter(answers, (x) => x.reviewType > 2 && x.mark > 0),
          (x) => parseInt(`${x.mark}`)
        ) / filter(answers, (x) => x.reviewType > 2 && x.mark > 0).length
      );

      return {
        selfAssessmentMark,
        otherMark,
        content: key,
        group: answers[0].group,
        layout: answers[0].layout,
        answers: orderBy(
          answers,
          (answer) => {
            return answer.reviewType;
          },
          ["asc"]
        ),
      };
    });
  }

  getReviewee(revieweeSlug: string) {
    const matchReviewee = this.rootStore.revieweeStore.reviewees.find(
      (reviewee) => {
        return reviewee.revieweeSlug === revieweeSlug;
      }
    );
    this.reviewee = matchReviewee || null;
  }

  async getReviewResponse(reviewee: Reviewee) {
    const reviewResponses = (await this.rootStore.transportStore.get(
      "/review-responses/?revieweeCode=" +
        reviewee.revieweeCode +
        "&reviewerCode=" +
        this.rootStore.authenticationStore.userCode
    )) as ReviewResponse[];
    runInAction(() => {
      this.reviewResponses = reviewResponses;
    });
  }
}
