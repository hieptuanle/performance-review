import { computed, makeObservable, observable } from "mobx";
import { RootStore } from "./RootStore";
import * as urlSlug from "url-slug";
import { ReviewForm } from "./ReviewFormStore";
import { get } from "lodash";
import { forms as rawForms } from "./forms";

interface IndividualForm extends ReviewForm {
  reviewerCode: string;
  reviewerName: string;
}

export class IndividualFormStore {
  rootStore: RootStore;

  forms = forms;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;

    makeObservable(this, {
      forms: observable,
      myForms: computed,
    });
  }

  get myForms() {
    // Nếu là BOM thì lấy hết tất cả form
    if (
      this.rootStore.authenticationStore.isBom &&
      this.rootStore.authenticationStore.seeAll
    )
      return this.forms;

    return this.forms.filter((form) => {
      return form.reviewerCode === this.rootStore.authenticationStore.userCode;
    });
  }
}

const forms = rawForms.reduce<IndividualForm[]>((result, item) => {
  result.push({
    revieweeCode: item.code,
    revieweeName: item.displayName,
    reviewerCode: item.code,
    reviewerName: item.displayName,
    slug: urlSlug.convert(
      `${item.code} ${item.displayName} ${item.group} ${item.code}`
    ),
    reviewType: item.group,
  });
  const indices = ["1", "2", "3", "4", "5"];
  indices.forEach((index) => {
    if (get(item, `reviewerCode${index}`)) {
      result.push({
        revieweeCode: item.code,
        revieweeName: item.displayName,
        reviewerName: get(item, `reviewerName${index}`),
        reviewerCode: get(item, `reviewerCode${index}`),
        reviewType: 3,
        slug: urlSlug.convert(
          `${item.code} ${item.displayName} 3 ${get(
            item,
            `reviewerCode${index}`
          )}`
        ),
      });
    }
  });
  return result;
}, []);
console.log({ forms });
