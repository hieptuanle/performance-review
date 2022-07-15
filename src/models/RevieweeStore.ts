import { makeObservable, observable } from "mobx";
import { RootStore } from "./RootStore";
import * as urlSlug from "url-slug";
import { forms as rawForms } from "../data/forms";

export interface Reviewee {
  revieweeCode: string;
  revieweeName: string;
  revieweeDepartment: string;
  revieweePositions: string[];
  // reviewLink: string;
  revieweeSlug: string;
}

export class RevieweeStore {
  rootStore: RootStore;

  reviewees = reviewees;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;

    makeObservable(this, {
      reviewees: observable,
    });
  }
}

const reviewees = rawForms.map<Reviewee>((d) => {
  return {
    revieweeCode: d.code,
    revieweeName: d.displayName,
    revieweeDepartment: d.department,
    revieweePositions: [d.position].filter((d) => !!d),
    revieweeSlug: urlSlug.convert(`${d.code} ${d.displayName}`),
  };
});
