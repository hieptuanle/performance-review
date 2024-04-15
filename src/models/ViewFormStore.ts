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

  setQuestions(positions: string[], reviewType: number) {
    let questions: Question[] = [];

    if ([3, 4].includes(reviewType)) {
      const scaleQuestions = [
        { content: "I. Review thái độ và năng lực làm việc", isHeader: true },
        {
          content: `1. Tác phong và kỷ luật
            Giải thích:
              - Tuân thủ quy định, nội quy của công ty, không gây ra vi phạm 
              - Đảm bảo tác phong làm việc nghiêm túc về trang phục, thời gian, địa điểm
              - Đảm bảo tính cam kết trong công việc`,
        },
        {
          content: `2. Giao tiếp và làm việc nhóm
            Giải thích:
            - Có kỹ năng lắng nghe và giao tiếp với đồng nghiệp tốt, cả bằng lời nói và văn bản
            - Phản hồi kịp thời trong công việc
            - Hỗ trợ tốt đồng nghiệp trong làm việc nhóm`,
        },
        {
          content: `3. Trách nhiệm với công việc
            Giải thích:
            - Sẵn sàng nhận nhiệm vụ, đồng thời nỗ lực hết sức mình để hoàn thành nhiệm vụ, không tránh né, đùn đẩy nhiệm vụ qua cho hoàn cảnh hay người khác.
            - Nỗ lực hoàn thành công việc đúng cam kết đề ra
            - Dám chịu trách nhiệm, nhận lỗi khi mình không hoàn thành nhiệm vụ, không đổ thừa cho hoàn cảnh hay người khác`,
        },
        {
          content: `4. Kỹ năng và kiến thức chuyên môn
            Giải thích:
            - Có đầy đủ kỹ năng và kiến thức chuyên môn để thực hiện nhiệm vụ được giao
            - Chủ động và quan tâm đến việc học thêm kỹ năng và kiến thức chuyên môn mới`,
        },
        {
          content: `5. Am hiểu hoạt động công ty
            Giải thích:
            - Nắm rõ chức năng các bộ phận trong công ty
            - Am hiểu quy trình, hệ thống vận hành về thông tin và hàng hóa trong công ty
            - Chủ động quan sát, theo dõi và cải thiện, nâng cấp hệ thống của bộ phận`,
        },
        {
          content: `6. Quản lý`,
        },
      ].map<Question>((data) => {
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
        `II. Góp ý và đề xuất khác cho đồng hiệp`,
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
      let scaleQuestions = [
        { content: "I. Review thái độ và năng lực làm việc", isHeader: true },
        {
          content: `1. Tác phong và kỷ luật
          Giải thích:
            - Tuân thủ quy định, nội quy của công ty, không gây ra vi phạm 
            - Đảm bảo tác phong làm việc nghiêm túc về trang phục, thời gian, địa điểm
            - Đảm bảo tính cam kết trong công việc`,
        },
        {
          content: `2. Giao tiếp và làm việc nhóm
          Giải thích:
          - Có kỹ năng lắng nghe và giao tiếp với đồng nghiệp tốt, cả bằng lời nói và văn bản
          - Phản hồi kịp thời trong công việc
          - Hỗ trợ tốt đồng nghiệp trong làm việc nhóm`,
        },
        {
          content: `3. Trách nhiệm với công việc
          Giải thích:
          - Sẵn sàng nhận nhiệm vụ, đồng thời nỗ lực hết sức mình để hoàn thành nhiệm vụ, không tránh né, đùn đẩy nhiệm vụ qua cho hoàn cảnh hay người khác.
          - Nỗ lực hoàn thành công việc đúng cam kết đề ra
          - Dám chịu trách nhiệm, nhận lỗi khi mình không hoàn thành nhiệm vụ, không đổ thừa cho hoàn cảnh hay người khác`,
        },
        {
          content: `4. Kỹ năng và kiến thức chuyên môn
          Giải thích:
          - Có đầy đủ kỹ năng và kiến thức chuyên môn để thực hiện nhiệm vụ được giao
          - Chủ động và quan tâm đến việc học thêm kỹ năng và kiến thức chuyên môn mới`,
        },
        {
          content: `5. Am hiểu hoạt động công ty
          Giải thích:
          - Nắm rõ chức năng các bộ phận trong công ty
          - Am hiểu quy trình, hệ thống vận hành về thông tin và hàng hóa trong công ty
          - Chủ động quan sát, theo dõi và cải thiện, nâng cấp hệ thống của bộ phận`,
        },
        {
          content: `6. Quản lý`,
        },
        {
          content: `II. Review kết quả OKR 6 tháng trước`,
          isObject: true,
        },
        {
          content: `III. Lên OKR giai đoạn 6 tháng tiếp theo`,
          isObject: true,
        },
      ];

      questions = scaleQuestions.map<Question>((data) => {
        return {
          group: "Personal",
          content: data.content,
          layout: data.isHeader ? "Header" : data.isObject ? "Object" : "Scale",
          mark: 0,
          answer: "",
          timeContent: "",
          okrs: [],
        };
      });

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
