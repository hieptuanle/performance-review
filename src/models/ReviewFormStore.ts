import { makeAutoObservable } from "mobx";
import { RootStore } from "./RootStore";

export interface ReviewForm {
  reviewType: number;
  reviewerCode?: string;
  reviewerName: string;
  revieweeCode: string;
  revieweeName: string;
  slug: string;
}

export class ReviewFormStore {
  rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;

    makeAutoObservable(this, {
      rootStore: false,
    });
  }

  get forms(): ReviewForm[] {
    return (this.rootStore.individualFormStore.myForms as ReviewForm[]).concat(
      this.rootStore.teamFormStore.myForms
    );
  }

  getFormFromSlug(slug: string) {
    return this.forms.find((form) => {
      return slug === form.slug;
    });
  }
}
