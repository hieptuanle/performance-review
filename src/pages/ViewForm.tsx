import {
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonItem,
  IonLabel,
  IonListHeader,
  IonTextarea,
  IonButton,
  IonSelect,
  IonSelectOption,
  IonCard,
  IonLoading,
  IonModal,
  IonToast,
  IonIcon,
  IonCheckbox,
} from "@ionic/react";

import { useHistory, useParams } from "react-router";
import { Fragment, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import useRootStore from "../hooks/useRootStore";
import FormType from "../components/FormType";
import { Question } from "../models/ViewFormStore";
import { TableStore } from "../models/TableStore";
import NotFound from "./NotFound";
import RevieweeIntro from "../components/RevieweeIntro";
import { informationCircleOutline } from "ionicons/icons";
import "./style.css";

const QuestionHeader = observer<{ question: Question; index: number }>(
  ({ question, index }) => {
    const rootStore = useRootStore();
    const revieweeName = rootStore.viewFormStore.reviewee?.revieweeName;
    const isSalary = question.content.includes("lương");
    return (
      <IonListHeader lines="full">
        <IonLabel>
          <h2
            style={{
              fontSize: "1.5em",
              fontWeight: "bold",
              whiteSpace: "pre-line",
            }}
          >
            {question.content.replaceAll(`{{NAME}}`, revieweeName || "")}
          </h2>
        </IonLabel>
        {!isSalary && (
          <IonButton
            onClick={() => {
              rootStore.viewFormStore.setCurrentQuestion(question);
              rootStore.viewFormStore.setShowDefinitionModal(true);
            }}
          >
            <IonIcon icon={informationCircleOutline}></IonIcon> &nbsp; Mô tả
            tiêu chí
          </IonButton>
        )}
      </IonListHeader>
    );
  }
);

const ScaleQuestionCard = observer<{ question: Question; index: number }>(
  ({ question, index, ...rest }) => {
    const rootStore = useRootStore();
    const reviewType = rootStore.viewFormStore?.reviewForm?.reviewType || 3;
    const isSelfAssessment = reviewType <= 2;
    const options = [
      {
        value: "1",
        label: "1. Kém.",
      },
      {
        value: "2",
        label: "2. Cần cải thiện.",
      },
      {
        value: "3",
        label: "3. Đạt kì vọng.",
      },
      {
        value: "4",
        label: "4. Vượt kì vọng.",
      },
      {
        value: "5",
        label: "5. Xuất sắc.",
      },
    ];
    return (
      <IonCard key={question.content}>
        <QuestionHeader question={question} index={index}></QuestionHeader>
        <IonItem>
          <IonLabel position="fixed">Chấm điểm</IonLabel>
          <IonSelect
            value={question.mark}
            onIonChange={(e) => {
              rootStore.viewFormStore.setMark(question, e.detail.value || "");
            }}
            // interface="popover"
          >
            {options.map((d) => (
              <IonSelectOption key={d.value} value={d.value}>
                {d.label}
              </IonSelectOption>
            ))}
            {!isSelfAssessment ? (
              <IonSelectOption value={"0"}>Không đánh giá</IonSelectOption>
            ) : null}
          </IonSelect>
        </IonItem>
        <IonItem>
          <IonLabel position="fixed">
            Giải thích<span style={{ color: "red" }}>*</span>
          </IonLabel>
          <IonTextarea
            required
            value={question.answer}
            onIonChange={(e) => {
              rootStore.viewFormStore.setAnswer(question, e.detail.value || "");
            }}
            style={{ minHeight: "200px", lineHeight: "1.5em" }}
            autoGrow={false}
            rows={5}
          ></IonTextarea>
        </IonItem>
      </IonCard>
    );
  }
);

const ObjectQuestionCard = observer<{
  question: Question;
  index: number;
  tableStore: TableStore;
}>(({ question, index, tableStore, ...rest }) => {
  const isFuture = question.content.includes("6 tháng tiếp theo");
  const rootStore = useRootStore();
  const handleStatusChange = (index: number, e: any) => {
    const value = parseInt(e.target.value, 10);
    tableStore.updateStatus(index, value);
    rootStore.viewFormStore.setOkr(question, tableStore.data);
  };

  const handleObjectChange = (index: number, e: any) => {
    const value = e.target.value;
    tableStore.updateObject(index, value);
    rootStore.viewFormStore.setOkr(question, tableStore.data);
  };
  const handleKeyResultChange = (index: number, e: any) => {
    const value = e.target.value;
    tableStore.updateKeyResult(index, value);
    rootStore.viewFormStore.setOkr(question, tableStore.data);
  };
  const handleDetailChange = (index: number, e: any) => {
    const value = e.target.value;
    tableStore.updateDetail(index, value);
    rootStore.viewFormStore.setOkr(question, tableStore.data);
  };

  return (
    <IonCard key={question.content}>
      <QuestionHeader question={question} index={index}></QuestionHeader>
      <IonItem>
        <table className="full-width">
          <thead>
            <tr>
              <th>STT</th>
              <th>Mục tiêu</th>
              <th>
                {isFuture
                  ? "Kết quả then chốt"
                  : "Kết quả then chốt đã đề ra kỳ trước"}
              </th>
              {!isFuture && <th>Tình trạng(%)</th>}
              <th>
                {isFuture
                  ? "Kế hoạch thực hiện"
                  : "Mô tả kết quả thực tế đã đạt được"}
              </th>
            </tr>
          </thead>
          <tbody>
            {tableStore.data.map((item, index) => (
              <tr key={index}>
                <td style={{ textAlign: "center" }}>{index + 1}</td>
                <td style={{ textAlign: "center" }}>
                  <textarea
                    className="full-width"
                    value={item.object}
                    onChange={(e) => handleObjectChange(index, e)}
                    placeholder="Tự luận (min 15 từ)"
                  ></textarea>
                </td>
                <td>
                  <textarea
                    className="full-width"
                    value={item.keyResult}
                    onChange={(e) => handleKeyResultChange(index, e)}
                    placeholder="Tự luận (min 50 từ)"
                  ></textarea>
                </td>
                {!isFuture && (
                  <td>
                    <input
                      className="full-width"
                      type="number"
                      value={item.process}
                      onChange={(e) => handleStatusChange(index, e)}
                      min="0"
                      max="100"
                    />
                  </td>
                )}
                <td>
                  <textarea
                    className="full-width"
                    value={item.detail}
                    onChange={(e) => handleDetailChange(index, e)}
                    placeholder="Tự luận (min 100 từ)"
                  ></textarea>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </IonItem>
    </IonCard>
  );
});

const TextQuestionCard = observer<{ question: Question; index: number }>(
  ({ question, index, ...rest }) => {
    const rootStore = useRootStore();
    return (
      <IonCard key={question.content}>
        <QuestionHeader question={question} index={index}></QuestionHeader>
        <IonItem>
          <IonLabel position="stacked">
            Câu trả lời tự luận<span style={{ color: "red" }}>*</span>
          </IonLabel>
          <IonTextarea
            required
            onIonChange={(e) => {
              rootStore.viewFormStore.setAnswer(question, e.detail.value || "");
            }}
            style={{ minHeight: "50px", lineHeight: "1.5em" }}
            autoGrow={true}
            rows={5}
          ></IonTextarea>
        </IonItem>
      </IonCard>
    );
  }
);

const FormQuestions = observer(() => {
  const rootStore = useRootStore();
  const questions = rootStore.viewFormStore.questions;

  return (
    <Fragment>
      {questions.map((question, index) => {
        if (question.isHidden) return "";
        if (question.layout === "Header") {
          return (
            <IonListHeader lines="full">
              <IonLabel>
                <h2 style={{ fontSize: "1.5em", fontWeight: "bold" }}>
                  {question.content}
                </h2>
              </IonLabel>
            </IonListHeader>
          );
        }
        if (question.layout === "Scale") {
          return (
            <ScaleQuestionCard
              key={question.content}
              question={question}
              index={index}
            ></ScaleQuestionCard>
          );
        }
        if (question.layout === "Object") {
          return (
            <ObjectQuestionCard
              key={question.content}
              question={question}
              index={index}
              tableStore={new TableStore()}
            ></ObjectQuestionCard>
          );
        }
        return (
          <TextQuestionCard
            key={question.content}
            question={question}
            index={index}
          ></TextQuestionCard>
        );
      })}
    </Fragment>
  );
});

const DefinitionModal = observer(() => {
  const rootStore = useRootStore();
  const position = rootStore.viewFormStore.reviewee?.revieweePositions[0];

  return (
    <IonModal
      isOpen={rootStore.viewFormStore.showDefinitionModal}
      onDidDismiss={() => {
        rootStore.viewFormStore.setShowDefinitionModal(false);
      }}
      cssClass="ion-padding"
    >
      <IonHeader translucent={true}>
        <IonToolbar>
          <IonButtons slot="end">
            <IonButton
              onClick={() =>
                rootStore.viewFormStore.setShowDefinitionModal(false)
              }
            >
              Thoát
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen={true} className="ion-padding">
        <h2>Mô tả đánh giá thang điểm của vị trí {position || null}</h2>

        <div>
          <p>
            5. Xuất sắc: Vượt xa kì vọng, tạo ra các kết quả tích cực ảnh hưởng
            tốt đến kết quả công việc, tạo ra tiến bộ nổi bật trong công việc
          </p>
          <p>
            4. Vượt kì vọng: Vượt trên kì vọng, góp phần tạo ra kết quả tốt, đảm
            bảo yêu cầu cầu công việc
          </p>
          <p>
            3. Đạt kì vọng: Đảm bảo kì vọng, vừa đủ để hoàn thành công việc,
            nhiệm vụ của cá nhân
          </p>
          <p>
            2. Cần cải thiện: Chưa đảm bảo kì vọng, còn một số điểm cần cải
            thiện để hoàn thành vai trò công việc của cá nhân
          </p>
          <p>
            1. Kém: Kết quả kém, không đạt kì vọng, ảnh hưởng xấu đến kết quả
            công việc của bản thân
          </p>
        </div>
      </IonContent>
    </IonModal>
  );
});

const ViewForm = observer(() => {
  const rootStore = useRootStore();
  const history = useHistory();
  const params = useParams<{ formId: string }>();
  const [showLoading, setShowLoading] = useState(false);
  const [showToastSuccess, setShowToastSuccess] = useState(false);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    async function getReviewResponse() {
      const reviewResponse =
        await rootStore.viewRevieweeStore.getReviewResponseBySlug(
          params.formId
        );

      return reviewResponse;
    }
    const formId = params.formId;
    const form = rootStore.reviewFormStore.getFormFromSlug(formId);

    if (!form) return;
    rootStore.viewFormStore.setReviewForm(form);
    const matchReviewee = rootStore.revieweeStore.reviewees.find((reviewee) => {
      return reviewee.revieweeCode === form.revieweeCode;
    });

    if (!matchReviewee) return;

    rootStore.viewRevieweeStore.getReviewee(params.formId);

    rootStore.viewFormStore.setReviewee(matchReviewee);

    rootStore.viewFormStore.setQuestions(
      matchReviewee.revieweePositions,
      form.reviewType,
      !!form.isTeamManager,
      getReviewResponse()
    );
  }, [params.formId, rootStore]);

  const form = rootStore.viewFormStore.reviewForm;

  if (!form) {
    return <NotFound></NotFound>;
  }

  const matchReviewee = rootStore.viewFormStore.reviewee;

  if (!matchReviewee) {
    return <NotFound></NotFound>;
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>
            {form.revieweeName} |{" "}
            <FormType formType={form.reviewType}></FormType>{" "}
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        <IonLoading
          isOpen={showLoading}
          onDidDismiss={() => setShowLoading(false)}
          message={"Đang gửi..."}
        />
        <IonToast
          isOpen={showToastSuccess}
          onDidDismiss={() => setShowToastSuccess(false)}
          message="Review của bạn đã được lưu."
          duration={2000}
        />
        <DefinitionModal />

        <RevieweeIntro
          reviewForm={form}
          reviewee={matchReviewee}
        ></RevieweeIntro>
        <FormQuestions></FormQuestions>
        {![1, 2].includes(form.reviewType) ? (
          <IonCard>
            <IonItem>
              <IonCheckbox
                checked={checked}
                onIonChange={(e) => setChecked(e.detail.checked)}
              />
              <IonLabel> Ẩn danh</IonLabel>
            </IonItem>
          </IonCard>
        ) : (
          ""
        )}

        <div style={{ width: "100%" }} className="ion-text-center">
          <IonButton
            onClick={async () => {
              setShowLoading(true);
              try {
                await rootStore.viewFormStore.submitReviewResponse(
                  form,
                  matchReviewee,
                  checked
                );
                setShowToastSuccess(true);
                history.push("/forms");
              } catch (e: any) {
                alert(e.message);
              } finally {
                setShowLoading(false);
              }
            }}
          >
            Gửi
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
});

export default ViewForm;
