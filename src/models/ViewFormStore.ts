import { action, makeAutoObservable, toJS } from "mobx";
import { RootStore } from "./RootStore";
import { ReviewForm } from "./ReviewFormStore";
import { Reviewee } from "./RevieweeStore";
import { ReviewResponse } from "./ReviewResponseStore";
import { getObjectId } from "../utils/helper";
import store from "store";
import { compact } from "lodash";

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

  setQuestions(positions: string[], reviewType: number) {
    let questions: Question[] = [];

    if (reviewType === 3) {
      const textQuestions = [
        "Dựa vào các tiêu chí ASK, theo bạn đâu là điểm được thể hiện tốt nhất trong 3 tháng qua của {{NAME}}?",
        "Dựa vào các tiêu chí ASK, theo bạn đâu là điểm cần cải thiện trong 3 tháng qua của {{NAME}}?",
        "Bạn có muốn đưa ra lời khuyên hay góp ý gì cho {{NAME}} không? Điều này sẽ ảnh hưởng như thế nào đến công việc của bạn?",
      ].map<Question>((d) => {
        return {
          group: "Colleague",
          content: d,
          layout: "Text",
          mark: 0,
          answer: "",
        };
      });

      questions = [...questions, ...textQuestions];
    } else {
      let scaleQuestions = [
        "Dựa trên các tiêu chí ASK, hãy tự đánh giá sự thay đổi về thái độ của bạn trong 3 tháng qua",
        "Dựa trên các tiêu chí ASK, hãy tự đánh giá sự thay đổi về kĩ năng của bạn trong 3 tháng qua",
        "Dựa trên các tiêu chí ASK, hãy tự đánh giá sự thay đổi về kiến thức của bạn trong 3 tháng qua",
      ];

      questions = scaleQuestions.map<Question>((d) => {
        return {
          group: "Personal",
          content: d,
          layout: "Scale",
          mark: 0,
          answer: "",
        };
      });

      const textQuestions = compact([
        "Trong 3 tháng vừa qua bạn thấy mình làm tốt nhất điều gì hoặc đã đạt được những thành tích gì trong công việc của mình? ",
        "Trong 3 tháng vừa qua bạn còn mục tiêu gì chưa đạt được hoặc công việc nào không đạt được như kì vọng? Tại sao? ",
        "Mục tiêu của bạn trong 3 tháng tới là gì?",
        "Bạn sẽ đo lường sự tiến bộ của mình đối với những mục tiêu này như thế nào? (cần có các con số để thể hiện)",
        "Bạn sẽ phân bổ và thực hiện các mục tiêu mới của mình với thời gian như thế nào?",
        "Bạn mong muốn được hỗ trợ như thế nào để đạt được muc tiêu trên? (từ quản lý bộ phận, đồng nghiệp hoặc các bộ phận khác trong công ty)",
        "Bạn có đề xuất mức lương kỳ vọng hoặc các chế độ đãi ngộ khác như thế nào?",
      ]).map<Question>((d) => {
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

  async submitReviewResponse(
    form: ReviewForm,
    reviewee: Reviewee,
    anonymous: Boolean
  ) {
    const notDoneQuestion = this.questions.find((question) => {
      return !question.answer;
    });
    if (notDoneQuestion) {
      throw new Error(
        `Bạn chưa giải thích câu hỏi: ${notDoneQuestion.content}`
      );
    }
    // let minLength = 100;
    // if (form.reviewType === 3) {
    //   minLength = 50;
    // }
    // const notEnoughLengthQuestion = filter(this.questions, (question) => {
    //   return split(question.answer, "").length < minLength;
    // });
    // if (notEnoughLengthQuestion.length) {
    //   throw new Error(`Các mục sau chưa đủ số từ tối thiểu`);
    // }
    const reviewReponse: ReviewResponse = {
      _id: getObjectId(),
      reviewDepartment: undefined,
      revieweeCode: reviewee.revieweeCode,
      revieweeName: reviewee.revieweeName,
      revieweeDepartment: reviewee.revieweeDepartment,

      reviewerName: form.reviewerName,
      reviewerCode: form.reviewerCode,

      reviewType: form.reviewType,
      anonymous,
      slug: form.slug,

      positions: reviewee.revieweePositions,
      questions: this.questions,
      user: this.rootStore.authenticationStore.user?._id,
    };

    await this.rootStore.reviewResponseStore.insertOne(reviewReponse);

    this.clearLocalStorage();
  }
}
