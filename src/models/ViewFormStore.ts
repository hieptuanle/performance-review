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
  layout: "Scale" | "Text" | "Header" | "Object";
  mark: string | number;
  answer: string;
  timeContent: string;
  okrs: any[];
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
  setOkr(question: Question, okrs: any[]) {
    question.okrs = okrs;
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

  async setQuestions(
    positions: string[],
    reviewType: number,
    isTeamManager: Boolean,
    reviewResponse: Object
  ) {
    const data = await reviewResponse;
    console.log(data, "reviewResponse");
    let questions: Question[] = [];
    const defaultScaleQuestions = [
      { content: "I. Review thái độ và năng lực làm việc", isHeader: true },
      {
        content: `1. Tác phong và kỷ luật
    Giải thích:
      - Tuân thủ nội quy của công ty, không gây ra hình ảnh xấu của cá nhân và tập thể
      - Đảm bảo tác phong làm việc nghiêm túc về thời gian
      - Đảm bảo tính cam kết: hoàn thành công việc như lời nói, lời hứa`,
      },
      {
        content: `2. Giao tiếp và làm việc nhóm
    Giải thích:
    - Phản hồi nhanh, kịp thời 
    - Có kỹ năng giao tiếp tốt, cả bằng lời nói và văn bản, tin nhắn
    - Tương trợ tốt trong team cũng như liên bộ phận`,
      },
      {
        content: `3. Xây dựng kế hoạch và hoàn thành kế hoạch công việc
    Giải thích:
    - Chủ động xây dựng kế hoạch công việc cá nhân
    - Nỗ lực triển khai kế hoạch, hoàn thành mục tiêu đúng cam kết 
    - Dám chịu trách nhiệm, nhận lỗi khi chưa hoàn thành nhiệm vụ`,
      },
      {
        content: `4. Học hỏi và áp dụng kỹ năng và kiến thức chuyên môn
    Giải thích:
    - Tự trau dồi kỹ năng và kiến thức chuyên môn để thực hiện nhiệm vụ được giao
    - Ứng dụng kiến thức và kỹ năng học được vào công việc thực tế`,
      },
      {
        content: `5. Am hiểu, xây dựng và cải tiến hệ thống hoạt động nội bộ công ty
    Giải thích:
    - Am hiểu quy trình, hệ thống, dòng chảy của hàng hóa và thông tin trong công ty
    - Chủ động quan sát và cải tiến, nâng cấp hệ thống, quy trình của các bộ phận`,
      },
    ];
    const managerScaleQuestions = [
      {
        content: `6. Năng lực quản lý
      Giải thích: 
      - Chỉ đạo, giao quyền, phân công hợp lý
      - Lên kế hoạch, giám sát đội ngũ hoàn thành các mục tiêu đề ra
      - Hướng dẫn và kèm cặp về chuyên môn 
      - Quan tâm, chia sẻ các vấn đề cá nhân ảnh hưởng tới công việc
      - Giải quyết xung đột, đánh giá, đề xuất thưởng phạt hợp lý"`,
      },
    ];
    if ([3, 4].includes(reviewType)) {
      let allScaleQuestions = defaultScaleQuestions;
      if (isTeamManager) {
        allScaleQuestions = [
          ...defaultScaleQuestions,
          ...managerScaleQuestions,
        ];
      }
      const scaleQuestions = allScaleQuestions.map<Question>((data) => {
        return {
          group: "Colleague",
          content: data.content,
          layout: data.isHeader ? "Header" : "Scale",
          mark: 0,
          answer: "",
          timeContent: "",
          okrs: [],
        };
      });

      const textQuestions = compact([
        `II. Góp ý và đề xuất khác cho đồng nghiệp`,
      ]).map<Question>((d) => {
        return {
          group: "Personal",
          content: d,
          layout: "Text",
          mark: 0,
          answer: "",
          timeContent: "",
          okrs: [],
        };
      });
      questions = [...questions, ...scaleQuestions, ...textQuestions];
    } else {
      let allScaleQuestions = defaultScaleQuestions;
      if (isTeamManager) {
        allScaleQuestions = [
          ...defaultScaleQuestions,
          ...managerScaleQuestions,
        ];
      }

      questions = allScaleQuestions.map<Question>((data) => {
        return {
          group: "Personal",
          content: data.content,
          layout: data.isHeader ? "Header" : "Scale",
          mark: 0,
          answer: "",
          timeContent: "",
          okrs: [],
        };
      });

      const objectQuestions = [
        {
          content: `II. Review kết quả OKR 6 tháng trước`,
          isObject: true,
        },
        {
          content: `III. Lên OKR giai đoạn 6 tháng tiếp theo`,
          isObject: true,
        },
      ].map<Question>((data) => {
        return {
          group: "Personal",
          content: data.content,
          layout: "Object",
          mark: 0,
          answer: "",
          timeContent: "",
          okrs: [],
        };
      });

      questions.push(...objectQuestions);

      const textQuestions = compact([
        `IV. Đề xuất của bạn về mức lương và đãi ngộ khác`,
      ]).map<Question>((d) => {
        return {
          group: "Personal",
          content: d,
          layout: "Text",
          mark: 0,
          answer: "",
          timeContent: "",
          okrs: [],
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
      return _.includes(["Scale", "Text"], question.layout) && !question.answer;
    });
    if (notDoneQuestions.length) {
      throw new Error(
        `Bạn chưa giải thích câu hỏi: ` +
          _.map(notDoneQuestions, "content").join(" ,")
      );
    }

    let minLength = 15;

    const notEnoughLengthQuestion = filter(
      this.questions,
      (question, index) => {
        if (_.includes(["Object", "Header"], question.layout)) {
          return false;
        }
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
