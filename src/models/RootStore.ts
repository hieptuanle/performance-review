import { AuthenticationStore } from "./AuthenticationStore";
import { IndividualFormStore } from "./IndividualFormStore";
import { TeamFormStore } from "./TeamFormStore";
import { UserStore } from "./UserStore";
import { RevieweeStore } from "./RevieweeStore";
import { TeamMemberStore } from "./TeamMemberStore";
import { ReviewFormStore } from "./ReviewFormStore";

export class RootStore {
  authenticationStore: AuthenticationStore;
  individualFormStore: IndividualFormStore;
  teamFormStore: TeamFormStore;
  userStore: UserStore;
  revieweeStore: RevieweeStore;
  teamMemberStore: TeamMemberStore;
  reviewFormStore: ReviewFormStore;
  constructor() {
    this.authenticationStore = new AuthenticationStore(this);
    this.individualFormStore = new IndividualFormStore(this);
    this.teamFormStore = new TeamFormStore(this);
    this.userStore = new UserStore(this);
    this.revieweeStore = new RevieweeStore(this);
    this.teamMemberStore = new TeamMemberStore(this);
    this.reviewFormStore = new ReviewFormStore(this);
  }
}
