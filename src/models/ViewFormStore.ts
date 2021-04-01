import { action, makeAutoObservable, toJS } from "mobx";
import { RootStore } from "./RootStore";
import { uniqBy } from "lodash";
import { ReviewForm } from "./ReviewFormStore";

export interface Question {
  group: string;
  content: string;
  layout: "Scale" | "Text";
  mark: string | number;
  answer: string;
}

export class ViewFormStore {
  rootStore: RootStore;

  reviewForm: ReviewForm | null = null;
  questions: Question[] = [];

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;

    makeAutoObservable(this, {
      setQuestions: action,
      clearQuestions: action,
      setAnswer: action,
      setMark: action,
      rootStore: false,
    });
  }

  asJs() {
    return toJS(this.questions);
  }

  setAnswer(question: Question, answer: string) {
    question.answer = answer;
  }
  setMark(question: Question, mark: string) {
    question.mark = mark;
  }

  setReviewForm(reviewForm: ReviewForm) {
    this.reviewForm = reviewForm;
  }

  clearQuestions() {
    this.questions = [];
  }

  setQuestions(positions: string[], reviewType: number) {
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

    const questions = uniqBy(
      criteriaPositions.map<Question>((d) => {
        return {
          group: d.group,
          content: d.criterion,
          layout: "Scale",
          mark: 0,
          answer: "",
        };
      }),
      "content"
    );

    if (reviewType === 1) {
      personalQuestions.forEach((d) => {
        questions.push({
          group: "Personal",
          content: d,
          layout: "Text",
          mark: 0,
          answer: "",
        });
      });
    }
    if (reviewType === 4) {
      managerQuestions.forEach((d) => {
        questions.push({
          group: "Manager",
          content: d,
          layout: "Text",
          mark: 0,
          answer: "",
        });
      });
    }

    this.questions = questions;
  }

  submitReviewResponse() {
    // this.rootStore.reviewResponseStore.insertOne({
    //   reviewDepartment,
    // });
  }
}

const personalQuestions = [
  "Trong 6 tháng vừa qua bạn thấy mình làm tốt nhất điều gì hoặc đã đạt được những thành tích gì trong công việc của mình?",
  "Trong 6 tháng vừa qua bạn còn mục tiêu gì chưa đạt được hoặc công việc nào không đạt được như kì vọng? Tại sao?",
  "Bạn thấy mình có tiềm năng phát triển trong vị trí hoặc mảng công việc nào ở 4handy? Tại sao?",
  "Theo bạn, quản lý cấp trên nên có những thay đổi gì để giúp bạn cũng như team của bạn đạt được kết quả tốt hơn?",
  "Bạn có đề xuất mức lương kỳ vọng hoặc các chế độ đãi ngộ khác như thế nào?",
];

const managerQuestions = [
  "Trong 6 tháng vừa qua bạn thấy nhân viên của mình làm tốt nhất điều gì hoặc đã đạt được những thành tích gì trong công việc?",
  "Trong 6 tháng vừa qua nhân viên của bạn còn mục tiêu gì chưa đạt được hoặc công việc nào không đạt được như kì vọng? Tại sao?",
  "Bạn thấy nhân viên của mình có tiềm năng phát triển trong vị trí hoặc mảng công việc nào ở 4handy? Tại sao?",
  "Bạn có đề xuất thay đổi gì về cách làm việc đối với nhân viên của mình để giúp nhân viên đạt được kết quả tốt hơn không? Nếu có, giải thích tại sao?",
  "Bạn đề xuất mức lương hoặc chế độ đãi ngộ mới cho nhân viên của mình như thế nào?",
];
