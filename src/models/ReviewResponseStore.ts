import { makeAutoObservable } from "mobx";
import { RootStore } from "./RootStore";
import { Question } from "./ViewFormStore";

export interface ReviewResponse {
  _id: string;
  reviewDepartment?: string;

  revieweeCode: string;
  revieweeName: string;
  revieweeDepartment: string;

  reviewerName: string;
  reviewerCode?: string;

  reviewType: number;

  slug: string;

  positions: string[];
  questions: Question[];

  createdAt?: Date;
  updatedAt?: Date;
  user?: string;
  anonymous?: Boolean;
  isTeamManager?: Boolean;
}

export class ReviewResponseStore {
  rootStore: RootStore;
  reviewResponses: ReviewResponse[] = [];
  reviewResponse: ReviewResponse | {} = {};

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this, {
      rootStore: false,
    });
  }

  async insertOne(reviewResponse: ReviewResponse): Promise<ReviewResponse> {
    return this.rootStore.transportStore.post(
      "/review-responses",
      reviewResponse
    );
  }
}
