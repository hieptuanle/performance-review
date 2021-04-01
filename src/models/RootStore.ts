import { AuthenticationStore } from "./AuthenticationStore";
import { IndividualFormStore } from "./IndividualFormStore";
import { TeamFormStore } from "./TeamFormStore";
import { UserStore } from "./UserStore";
import { RevieweeStore } from "./RevieweeStore";
import { TeamMemberStore } from "./TeamMemberStore";

export class RootStore {
  authenticationStore: AuthenticationStore;
  individualFormStore: IndividualFormStore;
  teamFormStore: TeamFormStore;
  userStore: UserStore;
  revieweeStore: RevieweeStore;
  teamMemberStore: TeamMemberStore;
  constructor() {
    this.authenticationStore = new AuthenticationStore(this);
    this.individualFormStore = new IndividualFormStore(this);
    this.teamFormStore = new TeamFormStore(this);
    this.userStore = new UserStore(this);
    this.revieweeStore = new RevieweeStore(this);
    this.teamMemberStore = new TeamMemberStore(this);
  }
}
