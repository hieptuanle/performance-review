import { computed, makeObservable, observable } from "mobx";
import { RootStore } from "./RootStore";
import * as urlSlug from "url-slug";
import { ReviewForm } from "./ReviewFormStore";
import { get } from "lodash";
import { forms as rawForms } from "../data/forms";

interface IndividualForm extends ReviewForm {
  reviewerCode: string;
  reviewerName: string;
  managerCode?: string;
  managerName?: string;
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
      this.rootStore.authenticationStore.viewMode === "bom"
    )
      return this.forms;

    // TODO: Nếu là Manager thì lấy form của nhóm
    if (
      this.rootStore.authenticationStore.isManager &&
      this.rootStore.authenticationStore.viewMode === "manager"
    ) {
      return this.forms.filter((form) => {
        return (
          form.managerCode === this.rootStore.authenticationStore.user?.code
        );
      });
    }

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
    slug: urlSlug.convert(`${item.code} ${item.displayName} 1 ${item.code}`),
    reviewType: 1,
    managerCode: item.managerCode,
    managerName: item.managerName,
  });
  // if (item.managerCode) {
  //   result.push({
  //     revieweeCode: item.code,
  //     revieweeName: item.displayName,
  //     reviewerName: get(item, `managerName`),
  //     reviewerCode: get(item, `managerCode`),
  //     reviewType: 4,
  //     slug: urlSlug.convert(
  //       `${item.code} ${item.displayName} 4 ${get(item, `managerCode`)}`
  //     ),
  //     managerCode: item.managerCode,
  //     managerName: item.managerName,
  //   });
  // }
  const indices = ["1", "2", "3", "4", "5"];
  indices.forEach((index) => {
    if (get(item, `reviewerCode${index}`)) {
      result.push({
        revieweeCode: item.code,
        revieweeName: item.displayName,
        reviewerName: get(item, `reviewerName${index}`, ""),
        reviewerCode: get(item, `reviewerCode${index}`, ""),
        reviewType: 3,
        slug: urlSlug.convert(
          `${item.code} ${item.displayName} - ${get(
            item,
            `reviewerCode${index}`
          )}`
        ),
        managerCode: item.managerCode,
        managerName: item.managerName,
      });
    }
  });
  return result;
}, []);
