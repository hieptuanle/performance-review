import { makeAutoObservable } from "mobx";
import { Reviewee } from "../../models/RevieweeStore";
import { RootStore } from "../../models/RootStore";

export class ListRevieweesStore {
  rootStore: RootStore;
  reviewees: Reviewee[] = [];

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    this.reviewees = this.rootStore.revieweeStore.reviewees;
    makeAutoObservable(this);
  }
}
