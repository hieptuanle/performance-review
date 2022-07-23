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
      this.rootStore.authenticationStore.viewMode === "bom"
    ) {
      return this.reviewees;
    }

    if (
      this.rootStore.authenticationStore.isManager &&
      this.rootStore.authenticationStore.viewMode === "manager"
    ) {
      const myForms = this.rootStore.individualFormStore.myForms;
      const revieweeCodes = myForms.map((form) => {
        return form.revieweeCode;
      });
      return this.reviewees.filter((reviewee) => {
        return revieweeCodes.includes(reviewee.revieweeCode);
      });
    }

    return this.reviewees.filter((reviewee) => {
      return (
        reviewee.revieweeCode === this.rootStore.authenticationStore.user?.code
      );
    });
  }
}
