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
  layout: "Scale" | "Text" | "Header" | "Object" | "OkrReadonly";
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
    reviewResponse: Object,
  ) {
    const data = await reviewResponse;
    const existsQuestions = get(data, "questions");
    let questions: Question[] = [];
    const defaultScaleQuestions = [
      {
        content: "I. Review năng lực làm việc cá nhân",
        isHeader: true,
      },
      {
        content: `1. Thái độ, tác phong làm việc
    Biểu hiện:
    - Tuân thủ quy định, nội quy của công ty
    - Tác phong làm việc nghiêm túc đặc biệt liên quan tới thời gian: giờ họp, deadline task...
    - Thể hiện tinh thần quyết liệt, thích nghi với sự thay đổi`,
      },
      {
        content: `2. Mức độ cải tiến về kiến thức, kỹ năng 
    Biểu hiện:
    - Chủ động nâng cao năng lực bản thân và sử dụng AI hỗ trợ công việc
    - Có ý tưởng cải tiến, điều chỉnh, đổi mới quy trình làm việc
    - Triển khai các ý tưởng để tăng hiệu suất của cá nhân hoặc tập thể`,
      },
      {
        content: `3. Mức độ done task, OKR
    Biểu hiện:
    - Sắp xếp, ưu tiên, cân bằng hợp lý giữa các công việc gấp, nhanh với các công việc quan trọng, dài hạn 
    - Hoàn thành vượt mức kỳ vọng đối với các công việc, mục tiêu: về thời gian, về chất lượng 
    - Mở rộng thêm các mảng công việc mới`,
      },
      {
        content: "II. Review năng lực làm việc với người khác",
        isHeader: true,
      },
      {
        content: `4. Teamwork trong công việc liên quan tới KQCV của bộ phận mình
    Biểu hiện:
    -	Giao tiếp hiệu quả: xác nhận để hiểu đúng nhu cầu từ bộ phận liên quan, xác nhận lại deadline, output rõ ràng
    - Follow hàng ngày, chủ động trao đổi khi có vấn đề
    - Feedback và nhận feedback với tinh thần hợp tác, xây dựng`,
      },
      {
        content: `5. Tương trợ với các công việc chung, công việc của bộ phận khác 
    Biểu hiện:
    - Sẵn sàng đi hỗ trợ, tham gia các công việc chung 
    - Tương trợ mà không phân biệt người mới, người cũ; người từng giúp mình hay không 
    - Đặt lợi ích chung của tổ chức cao hơn lợi ích riêng của cá nhân, bộ phận`,
      },
    ];
    const managerScaleQuestions = [
      {
        content: `6. Năng lực quản lý
      Biểu hiện:
      - Lên mục tiêu, kế hoạch, giám sát đội ngũ nhằm hoàn thành công việc
      - Cải tiến quy trình làm việc của bộ phận
      - Tạo động lực, thưởng phạt phân minh, KPI rõ ràng
      - Đào tạo, gắn kết và nâng cao năng lực đội ngũ
      - Làm gương về giá trị cốt lõi công ty đến với mọi người xung quanh`,
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

      const okrQuestion: Question = {
        group: "Colleague",
        content: "OKR của nhân viên",
        layout: "OkrReadonly",
        mark: 0,
        answer: "",
        timeContent: "",
        okrs: [],
      };

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
      questions = [...questions, okrQuestion, ...scaleQuestions, ...textQuestions];
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
        `V. 4handy học tập
        Giải thích: 	
        - Ghi lại mong muốn hỗ trợ của công ty (50-100%) với các khoản chi đầu tư học tập như mua sách, khoá học, AI, phần mềm, máy móc...
        - Càng chi tiết, càng sớm, càng dễ được duyệt`,
        `VI. Đề xuất của bạn về mức lương, đãi ngộ hoặc luân chuyển công việc (nếu có)`,
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
    anonymous: Boolean,
  ) {
    const notSelectScaleQuestions = filter(this.questions, (question) => {
      return question.layout === "Scale" && !question.mark;
    });
    if (notSelectScaleQuestions.length) {
      throw new Error(
        `Bạn chưa chấm điểm cho câu hỏi: ` +
          _.map(notSelectScaleQuestions, "content").join(" ,"),
      );
    }

    const notDoneQuestions = filter(this.questions, (question) => {
      return _.includes(["Scale", "Text"], question.layout) && !question.answer;
    });
    if (notDoneQuestions.length) {
      throw new Error(
        `Bạn chưa giải thích câu hỏi: ` +
          _.map(notDoneQuestions, "content").join(" ,"),
      );
    }

    let minLength = 15;

    const notEnoughLengthQuestion = filter(
      this.questions,
      (question, index) => {
        if (_.includes(["Object", "Header", "OkrReadonly"], question.layout)) {
          return false;
        }
        console.log(question);
        return index < 7 && split(question.answer, " ").length < minLength;
      },
    );

    if (notEnoughLengthQuestion.length) {
      throw new Error(
        `Các mục sau chưa đủ ${minLength} tối thiểu: ` +
          _.map(notEnoughLengthQuestion, "content").join(" ,"),
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
