import { makeAutoObservable } from "mobx";
import { RootStore } from "./RootStore";

interface Question {
  content: string;
  layout: "Scale" | "Text";
}

export class QuestionStore {
  rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;

    makeAutoObservable(this, {
      rootStore: false,
    });
  }

  getQuestions(positions: string[], reviewType: number) {
    const criteriaPositions = this.rootStore.criterionStore.criterionPositions.filter(
      (criterionPosition) => {
        if (!positions.includes(criterionPosition.position)) return false;

        switch (reviewType) {
          case 1:
          case 2:
          case 3:
            return true;
          case 4:
            return ["Attitude", "Skill"].includes(criterionPosition.group);
          default:
            return false;
        }
      }
    );

    const questions = criteriaPositions.map<Question>((d) => {
      return { content: d.criterion, layout: "Scale" };
    });

    if (reviewType === 1) {
      questions.push({
        content: "Bạn có kì vọng mức lương là bao nhiêu?",
        layout: "Text",
      });
    }
    if (reviewType === 4) {
      questions.push({
        content: "Bạn thấy nhân viên này thế nào?",
        layout: "Text",
      });
    }
    return questions;
  }
}
