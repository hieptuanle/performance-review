import { action, makeAutoObservable, toJS } from "mobx";
import { RootStore } from "./RootStore";
import { ReviewForm } from "./ReviewFormStore";
import { Reviewee } from "./RevieweeStore";
import { ReviewResponse } from "./ReviewResponseStore";
import { getObjectId } from "../utils/helper";
import store from "store";
import _, { compact, filter, split } from "lodash";

export interface Question {
  group: string;
  content: string;
  layout: "Scale" | "Text" | "Header";
  mark: string | number;
  answer: string;
  timeContent: string;
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

    if ([3, 4].includes(reviewType)) {
      const textQuestions = [
        "Dựa vào các tiêu chí ASK, theo bạn đâu là điểm được thể hiện tốt nhất trong 6 tháng qua của {{NAME}}?",
        "Dựa vào các tiêu chí ASK, theo bạn đâu là điểm cần cải thiện trong 6 tháng qua của {{NAME}}?",
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
        { content: "I. Đánh giá ASK", isHeader: true },
        { content: "1. Attitude", isHeader: true },
        {
          content: "1.1. Thái độ với công việc",
          isHeader: true,
        },
        {
          content:
            "1.1.1. Công việc luôn được hoàn thành (ít lỗi hoặc không có lỗi), hiệu quả và đúng thời hạn",
        },
        {
          content:
            "1.1.2. Luôn thực hiện với tinh thần trách nhiệm cao, quản lý thời gian và khối lượng công việc một cách hiệu quả để đảm bảo tiến độ công việc",
        },
        {
          content: "1.2. Thái độ với đồng nghiệp",
          isHeader: true,
        },
        {
          content:
            "1.2.1. Luôn luôn giữ thái độ hòa nhã, vui vẻ và chuyên nghiệp với đồng nghiệp và mọi người trong công ty",
        },
        {
          content:
            "1.2.2. Sẵn sàng chia sẻ và đưa ra ý kiến đóng góp để không ngừng nâng cao hiệu quả công việc                			",
        },
        { content: "2. Skills", isHeader: true },
        {
          content: "2.1. Kỹ năng mềm",
          isHeader: true,
        },
        {
          content:
            "2.1.1. Kĩ năng giao tiếp - Giao tiếp bằng văn bản và bằng lời nói rõ ràng, có tổ chức và hiệu quả; nghe và hiểu tốt",
        },
        {
          content:
            "2.1.2. Hợp tác & làm việc theo nhóm - Tôn trọng đồng nghiệp khi phối hợp và triển khai kế hoạch, sử dụng quyền hạn một cách hợp lý để hoàn thành mục tiêu",
        },
        {
          content: "2.2. Kỹ năng cứng",
          isHeader: true,
        },
        {
          content: "2.2.1. Kĩ năng tin học văn phòng",
        },
        {
          content: "2.2.2. Kĩ năng liên quan đến chuyên môn, công việc",
        },
        { content: "3. Knowledge", isHeader: true },
        {
          content: `3.1. Kiến thức chuyên môn
- Đánh giá các kiến thức chuyên môn liên quan đến công việc
- Tìm hiểu, học hỏi thêm các kiến thức mới liên quan đến công việc`,
        },
        {
          content: "3.2. Am hiểu quy trình hệ thống",
        },
      ];

      questions = scaleQuestions.map<Question>((data) => {
        return {
          group: "Personal",
          content: data.content,
          layout: data.isHeader ? "Header" : "Scale",
          mark: 0,
          answer: "",
        };
      });

      const textQuestions = compact([
        "IV. Đề xuất mức lương và chế độ đãi ngộ				",
        "V. Kỳ vọng hoặc đề xuất cải thiện về chương trình PERFORMANCE REVIEW 360 (Nếu có)",
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
    const notSelectScaleQuestions = filter(this.questions, (question) => {
      return question.layout === "Scale" && !question.mark;
    });
    if (notSelectScaleQuestions.length) {
      throw new Error(
        `Bạn chưa chấm điểm cho câu hỏi: ` +
          _.map(notSelectScaleQuestions, "content").join(" ,")
      );
    }

    const notDoneQuestions = filter(this.questions, (question) => {
      return question.layout === "Scale" && !question.answer;
    });
    if (notDoneQuestions.length) {
      throw new Error(
        `Bạn chưa giải thích câu hỏi: ` +
          _.map(notDoneQuestions, "content").join(" ,")
      );
    }

    let minLength = 50;

    const notEnoughLengthQuestion = filter(
      this.questions,
      (question, index) => {
        console.log(question);
        return index < 7 && split(question.answer, " ").length < minLength;
      }
    );

    if (notEnoughLengthQuestion.length) {
      throw new Error(
        `Các mục sau chưa đủ ${minLength} tối thiểu: ` +
          _.map(notEnoughLengthQuestion, "content").join(" ,")
      );
    }

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
