import { AuthenticationStore } from "./AuthenticationStore";
import { IndividualFormStore } from "./IndividualFormStore";
import { TeamFormStore } from "./TeamFormStore";
import { UserStore } from "./UserStore";
import { RevieweeStore } from "./RevieweeStore";
import { TeamMemberStore } from "./TeamMemberStore";
import { ReviewFormStore } from "./ReviewFormStore";
import { CriterionStore } from "./CriterionStore";
import { ViewFormStore } from "./ViewFormStore";

export class RootStore {
  authenticationStore: AuthenticationStore;
  individualFormStore: IndividualFormStore;
  teamFormStore: TeamFormStore;
  userStore: UserStore;
  revieweeStore: RevieweeStore;
  teamMemberStore: TeamMemberStore;
  reviewFormStore: ReviewFormStore;
  criterionStore: CriterionStore;
  viewFormStore: ViewFormStore;

  constructor() {
    this.authenticationStore = new AuthenticationStore(this);
    this.individualFormStore = new IndividualFormStore(this);
    this.teamFormStore = new TeamFormStore(this);
    this.userStore = new UserStore(this);
    this.revieweeStore = new RevieweeStore(this);
    this.teamMemberStore = new TeamMemberStore(this);
    this.reviewFormStore = new ReviewFormStore(this);
    this.criterionStore = new CriterionStore(this);
    this.viewFormStore = new ViewFormStore(this);
  }
}
