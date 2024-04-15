import { AuthenticationStore } from "./AuthenticationStore";
import { IndividualFormStore } from "./IndividualFormStore";
import { UserStore } from "./UserStore";
import { RevieweeStore } from "./RevieweeStore";
import { ReviewFormStore } from "./ReviewFormStore";
import { CriterionStore } from "./CriterionStore";
import { ViewFormStore } from "./ViewFormStore";
import { ReviewResponseStore } from "./ReviewResponseStore";
import { TransportStore } from "./TransportStore";
import { ListResponsesStore } from "./ListResponsesStore";
import { ViewResponseStore } from "./ViewResponseStore";
import { FormSummaryStore } from "./FormSummaryStore";
import { ListRevieweesStore } from "../pages/ListRevieweesPage/ListRevieweesStore";
import { ViewRevieweeStore } from "../pages/ViewRevieweePage/ViewRevieweeStore";
export class RootStore {
  authenticationStore: AuthenticationStore;
  individualFormStore: IndividualFormStore;
  userStore: UserStore;
  revieweeStore: RevieweeStore;
  reviewFormStore: ReviewFormStore;
  criterionStore: CriterionStore;
  viewFormStore: ViewFormStore;
  reviewResponseStore: ReviewResponseStore;
  transportStore: TransportStore;
  listResponsesStore: ListResponsesStore;
  viewResponseStore: ViewResponseStore;
  formSummaryStore: FormSummaryStore;
  listRevieweesStore: ListRevieweesStore;
  viewRevieweeStore: ViewRevieweeStore;
  createTableStore() {
    return new TableStore();
  }
  constructor() {
    this.authenticationStore = new AuthenticationStore(this);
    this.individualFormStore = new IndividualFormStore(this);
    this.userStore = new UserStore(this);
    this.revieweeStore = new RevieweeStore(this);
    this.reviewFormStore = new ReviewFormStore(this);
    this.criterionStore = new CriterionStore(this);
    this.viewFormStore = new ViewFormStore(this);
    this.reviewResponseStore = new ReviewResponseStore(this);
    this.transportStore = new TransportStore(this);
    this.listResponsesStore = new ListResponsesStore(this);
    this.viewResponseStore = new ViewResponseStore(this);
    this.formSummaryStore = new FormSummaryStore(this);
    this.listRevieweesStore = new ListRevieweesStore(this);
    this.viewRevieweeStore = new ViewRevieweeStore(this);
  }
}
