import { action, makeAutoObservable, toJS } from "mobx";
import { RootStore } from "./RootStore";
import { ReviewForm } from "./ReviewFormStore";
import { Reviewee } from "./RevieweeStore";
import { ReviewResponse } from "./ReviewResponseStore";
import { getObjectId } from "../utils/helper";
import store from "store";

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
  reviewee: Reviewee | null = null;
  questions: Question[] = [];
  currentQuestion: Question | null = null;
  showDefinitionModal = false;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;

    makeAutoObservable(this, {
      setQuestions: action,
      clearQuestions: action,
      setAnswer: action,
      setMark: action,
      setCurrentQuestion: action,
      setShowDefinitionModal: action,
      rootStore: false,
    });
  }

  asJs() {
    return toJS(this.questions);
  }

  setCurrentQuestion(question: Question) {
    this.currentQuestion = question;
  }
  setShowDefinitionModal(show: boolean) {
    this.showDefinitionModal = show;
  }

  updateLocalStorage() {
    if (this.reviewForm) {
      const key = "questions_" + this.reviewForm.slug;
      store.set(key, this.questions);
    }
  }

  clearLocalStorage() {
    if (this.reviewForm) {
      const key = "questions_" + this.reviewForm.slug;
      store.remove(key);
    }
  }

  setAnswer(question: Question, answer: string) {
    question.answer = answer;
    this.updateLocalStorage();
  }
  setMark(question: Question, mark: string) {
    question.mark = mark;
    this.updateLocalStorage();
  }

  setReviewForm(reviewForm: ReviewForm | null) {
    this.reviewForm = reviewForm;
  }
  setReviewee(reviewee: Reviewee | null) {
    this.reviewee = reviewee;
  }

  clearQuestions() {
    this.questions = [];
  }

  setQuestions(positions: string[], reviewType: number, isManager: boolean) {
    // const criteriaPositions =
    //   this.rootStore.criterionStore.criterionPositions.filter(
    //     (criterionPosition) => {
    //       if (!positions.includes(criterionPosition.position)) return false;

    //       switch (reviewType) {
    //         case 1:
    //         case 2:
    //         case 4:
    //           return true;
    //         case 3:
    //           return ["Attitude", "Skill"].includes(criterionPosition.group);
    //         default:
    //           return false;
    //       }
    //     }
    //   );

    // const questions = uniqBy(
    //   criteriaPositions.map<Question>((d) => {
    //     return {
    //       group: d.group,
    //       content: d.criterion,
    //       layout: "Scale",
    //       mark: 0,
    //       answer: "",
    //     };
    //   }),
    //   "content"
    // );

    let questions: Question[] = [];

    if (reviewType === 2) {
      let scaleQuestions = [
        "Bạn đánh giá như thế nào về thái độ trong công việc của {{NAME}}?",
        "Bạn đánh giá như thế nào về kĩ năng làm việc của {{NAME}}?",
        "Bạn đánh giá như thế nào về kiến thức trong công việc của {{NAME}}?",
      ];
      if (isManager) {
        scaleQuestions.push(
          "Bạn đánh giá như thế nào về khả năng quản lý của {{NAME}}?"
        );
      }

      questions = scaleQuestions.map<Question>((d) => {
        return {
          group: "Colleague",
          content: d,
          layout: "Scale",
          mark: 0,
          answer: "",
        };
      });

      const textQuestions = [
        "Bạn ấn tượng nhất với thay đổi nào của {{NAME}} trong vòng 3 tháng qua? Tại sao?",
        "Bạn có muốn đưa ra lời khuyên gì để {{NAME}} thay đổi không? Điều này sẽ ảnh hưởng như thế nào đến công việc của bạn?",
      ].map<Question>((d) => {
        return {
          group: "Colleauge",
          content: d,
          layout: "Text",
          mark: 0,
          answer: "",
        };
      });

      questions = [...questions, ...textQuestions];
    } else {
      let scaleQuestions = [
        "Bạn đánh giá như thế nào về thái độ trong công việc của mình?",
        "Bạn đánh giá như thế nào về kĩ năng làm việc của mình?",
        "Bạn đánh giá như thế nào về kiến thức trong công việc của mình?",
      ];

      if (isManager) {
        scaleQuestions.push(
          "Bạn đánh giá như thế nào về khả năng quản lý của mình?"
        );
      }

      questions = scaleQuestions.map<Question>((d) => {
        return {
          group: "Personal",
          content: d,
          layout: "Scale",
          mark: 0,
          answer: "",
        };
      });

      const textQuestions = [
        "Trong 3 tháng vừa qua bạn thấy mình làm tốt nhất điều gì hoặc đã đạt được những thành tích gì trong công việc của mình?",
        "Trong 3 tháng vừa qua bạn còn mục tiêu gì chưa đạt được hoặc công việc nào không đạt được như kì vọng? Tại sao?",
        "Bạn có thấy mình có tiềm năng phát triển trong vị trí hoặc mảng công việc nào khác ở 4handy không? Tại sao?",
        "Theo bạn, quản lý cấp trên nên có những thay đổi gì để giúp bạn cũng như team của bạn đạt được kết quả tốt hơn?",
        "Bạn có đề xuất mức lương kỳ vọng hoặc các chế độ đãi ngộ khác như thế nào?",
      ].map<Question>((d) => {
        return {
          group: "Personal",
          content: d,
          layout: "Text",
          mark: 0,
          answer: "",
        };
      });
      questions.push(...textQuestions);
    }

    this.questions = questions;
    if (this.reviewForm) {
      const key = "questions_" + this.reviewForm.slug;
      const savedQuestions = (store.get(key) || []) as Question[];
      savedQuestions.forEach((question) => {
        const matchQuestion = this.questions.find((_question) => {
          return _question.content === question.content;
        });
        if (matchQuestion) {
          matchQuestion.answer = question.answer;
          matchQuestion.mark = question.mark;
        }
      });
    }
  }

  async submitReviewResponse(form: ReviewForm, reviewee: Reviewee) {
    const notDoneQuestion = this.questions.find((question) => {
      return !question.answer;
    });
    if (notDoneQuestion) {
      throw new Error(
        `Bạn chưa giải thích câu hỏi: ${notDoneQuestion.content}`
      );
    }
    const reviewReponse: ReviewResponse = {
      _id: getObjectId(),
      reviewDepartment: form.reviewType === 3 ? form.reviewerName : undefined,
      revieweeCode: reviewee.revieweeCode,
      revieweeName: reviewee.revieweeName,
      revieweeDepartment: reviewee.revieweeDepartment,

      reviewerName: form.reviewerName,
      reviewerCode: form.reviewerCode,

      reviewType: form.reviewType,

      slug: form.slug,

      positions: reviewee.revieweePositions,
      questions: this.questions,
      user: this.rootStore.authenticationStore.user?._id,
    };

    await this.rootStore.reviewResponseStore.insertOne(reviewReponse);

    this.clearLocalStorage();
  }
}
