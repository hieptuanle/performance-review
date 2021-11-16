import { computed, makeAutoObservable } from "mobx";
import { Reviewee } from "../../models/RevieweeStore";
import { RootStore } from "../../models/RootStore";

export class ListRevieweesStore {
  rootStore: RootStore;
  reviewees: Reviewee[] = [];

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    this.reviewees = this.rootStore.revieweeStore.reviewees;
    makeAutoObservable(this, {
      myReviewees: computed,
    });
  }

  get myReviewees() {
    if (
      this.rootStore.authenticationStore.isBom &&
      this.rootStore.authenticationStore.seeAll
    ) {
      return this.reviewees;
    }
    const myForms = this.rootStore.individualFormStore.myForms.filter(
      (form) => {
        return form.reviewType === 3;
      }
    );

    const revieweeCodes = myForms.map((form) => {
      return form.revieweeCode;
    });
    return this.reviewees.filter((reviewee) => {
      return revieweeCodes.includes(reviewee.revieweeCode);
    });
  }
}
