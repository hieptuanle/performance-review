import { action, makeAutoObservable, toJS } from "mobx";
import { RootStore } from "./RootStore";
import { ReviewForm } from "./ReviewFormStore";
import { Reviewee } from "./RevieweeStore";
import { ReviewResponse } from "./ReviewResponseStore";
import { getObjectId } from "../utils/helper";
import store from "store";
import _, { compact, filter, split, get, find } from "lodash";

export interface Question {
  group: string;
  content: string;
  layout: "Scale" | "Text" | "Header" | "Object";
  mark: string | number;
  answer: string;
  timeContent: string;
  okrs: any[];
  isHidden?: Boolean;
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
    const existsQuestions = get(data, "questions");
    let questions: Question[] = [];
    const defaultScaleQuestions = [
      {
        content: "I. Review ba nhóm đánh giá năng lực cá nhân",
        isHeader: true,
      },
      {
        content: `1. Tự đánh giá về thái độ, tác phong làm việc cá nhân
    Giải thích:
    - Tuân thủ quy định, nội quy của công ty
    - Tác phong làm việc nghiêm túc đặc biệt liên quan tới thời gian: đi làm, nghỉ phép, giờ họp, deadline làm task...
    - Chủ động thay đổi và giữ tác phong kỷ luật thay vì bị động sau khi bị nhắc nhở`,
      },
      {
        content: `2. Mức độ thành thạo trong việc thực hiện nhiệm vụ, xử lý tình huống tại vị trí công việc của mình
    Giải thích:
    - Hiểu rõ quy trình làm việc, hệ thống vận hành của bộ phận mình và tất cả các bộ phận khác trong công ty 
    - Có ý tưởng cải thiện, nâng cấp, điều chỉnh quy trình làm việc, hệ thống vận hành
    - Triển khai các thay đổi để nâng cao hiệu suất và kết quả công việc liên phòng ban`,
      },
      {
        content: `3. Sự tiến bộ về kiến thức chuyên môn và ứng dụng vào công việc
    Giải thích:
    - Có đầy đủ kỹ năng và kiến thức chuyên môn để thực hiện nhiệm vụ được giao
    - Tham gia khóa học, hội thảo, đào tạo trực tiếp hoặc trực tuyến liên quan đến chuyên môn công việc
    - Chủ động, có định hướng và quan tâm đến việc học thêm kiến thức chuyên môn và sử dụng AI trong công việc`,
      },
      {
        content:
          "II. Review khả năng hợp tác, làm việc với các bộ phận liên quan",
        isHeader: true,
      },
      {
        content: `4. Giao tiếp, làm việc nhóm với đồng nghiệp, bộ phận liên quan
    Giải thích:
    - Phản hồi thông tin nhanh
    - Giao tiếp, lắng nghe ý kiến, trao đổi thông tin với đồng nghiệp, giữa các bộ phận đạt hiệu suất công việc cao
    - Không tạo ra mâu thuẫn, xung đột trong quy trình làm việc, hệ thống vận hành với bộ phận khác`,
      },
      {
        content: `5. Khả năng tạo độ tin cậy và chất lượng công việc trong làm việc nhóm với đồng nghiệp, bộ phận liên quan
    Giải thích:
    - Đạt được sự ủng hộ cho những thay đổi được đề xuất thông qua làm việc nhóm với đồng nghiệp, bộ phận liên quan
    - Tạo dựng được cảm giác an tâm, an toàn trong trao đổi, xử lý nhiệm vụ liên phòng ban 
    - Góp phần tạo nên văn hóa tôn trọng, đa dạng và hòa nhập`,
      },
    ];
    const managerScaleQuestions = [
      {
        content: `6. Năng lực quản lý
      Giải thích: 
      - Phân bổ, lên kế hoạch, giám sát đội ngũ nhằm hoàn thành các mục tiêu công việc đề ra
      - Tạo động lực, hướng dẫn và định hướng công việc cho đội ngũ nhân viên 
      - Làm gương và truyền giá trị cốt lõi công ty đến với các nhân viên phụ trách`,
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
        `II. Góp ý hoặc đề xuất khác dành cho đồng nghiệp`,
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
          content: `III. Review kết quả OKR 6 tháng trước`,
          isObject: true,
        },
        {
          content: `IV. Lên OKR giai đoạn 6 tháng tiếp theo`,
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
        `V. Quỹ trợ lý AI
        Giải thích:
          Tác dụng của công cụ AI đang lớn dần và tạo ra được nhiều giá trị công việc
          Quỹ này nhằm hỗ trợ/tài trợ chi phí cần thiết (50-100%) cho việc sử dụng công cụ AI trong 6 tháng tiếp theo vào ứng dụng công việc tại vị trí của mình, điền các nội dung sau:
        - Sử dụng công cụ AI nào?
        - Chi phí duy trì hoạt động công cụ AI
        - Dự kiến kết quả công việc sẽ thay đổi thế nào khi có trợ lý AI`,
        `VI. Đề xuất của bạn về mức lương và đãi ngộ khác`,
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
    console.log(existsQuestions, "existsQuestions");
    _.forEach(questions, (question) => {
      const matchQuestion = find(existsQuestions, {
        content: question.content,
      });
      console.log(matchQuestion);
      if (
        matchQuestion &&
        (matchQuestion.answer || get(matchQuestion, "okrs.length"))
      ) {
        if (matchQuestion.answer) {
          question.answer = matchQuestion.answer;
        }
        if (get(matchQuestion, "okrs.length")) {
          question.okrs = matchQuestion.okrs;
        }
        if (matchQuestion.mark) {
          question.mark = matchQuestion.mark;
        }
        question.isHidden = true;
      }
    });
    console.log("questions", questions);
    this.questions = questions;
    if (this.reviewForm) {
      const key = "questions_" + this.reviewForm.slug;
      const savedQuestions = (store.get(key) || []) as Question[];
      savedQuestions.forEach((question) => {
        if (!question.answer && !get(question, "okrs.length")) {
          return;
        }
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
