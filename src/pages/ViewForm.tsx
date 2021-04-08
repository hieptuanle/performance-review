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
  useIonViewWillEnter,
  IonLoading,
  IonModal,
  IonIcon,
  IonToast,
} from "@ionic/react";
import { informationCircleOutline } from "ionicons/icons";

import { useHistory, useParams } from "react-router";
import { Fragment, useState } from "react";
import { observer } from "mobx-react-lite";
import useRootStore from "../hooks/useRootStore";
import FormType from "../components/FormType";
import { Question } from "../models/ViewFormStore";
import NotFound from "./NotFound";
import RevieweeIntro from "../components/RevieweeIntro";

const QuestionHeader = observer<{ question: Question; index: number }>(
  ({ question, index }) => {
    const rootStore = useRootStore();
    return (
      <IonListHeader lines="full">
        <IonLabel>
          <h2 style={{ fontSize: "1.5em", fontWeight: "bold" }}>
            {index + 1}. {question.content}
          </h2>
        </IonLabel>
        <IonButton
          onClick={() => {
            rootStore.viewFormStore.setCurrentQuestion(question);
            rootStore.viewFormStore.setShowDefinitionModal(true);
            console.log(rootStore.viewFormStore.showDefinitionModal);
          }}
        >
          <IonIcon icon={informationCircleOutline}></IonIcon> &nbsp; Mô tả tiêu
          chí
        </IonButton>
      </IonListHeader>
    );
  }
);

const ScaleQuestionCard = observer<{ question: Question; index: number }>(
  ({ question, index }) => {
    const rootStore = useRootStore();
    return (
      <IonCard>
        <QuestionHeader question={question} index={index}></QuestionHeader>
        <IonItem>
          <IonLabel position="fixed">Chấm điểm</IonLabel>
          <IonSelect
            value={question.mark}
            onIonChange={(e) => {
              rootStore.viewFormStore.setMark(question, e.detail.value || "");
            }}
            interface="popover"
          >
            {["1", "2", "3", "4", "5"].map((d) => (
              <IonSelectOption key={d} value={d}>
                {d}
              </IonSelectOption>
            ))}
            <IonSelectOption value={0}>Không đánh giá</IonSelectOption>
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
            style={{ minHeight: "50px", lineHeight: "1.5em" }}
            autoGrow={true}
            rows={5}
          ></IonTextarea>
        </IonItem>
      </IonCard>
    );
  }
);

const TextQuestionCard = observer<{ question: Question; index: number }>(
  ({ question, index }) => {
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
        if (question.layout === "Scale") {
          return (
            <ScaleQuestionCard
              key={question.content}
              question={question}
              index={index}
            ></ScaleQuestionCard>
          );
        } else {
          return (
            <TextQuestionCard
              key={question.content}
              question={question}
              index={index}
            ></TextQuestionCard>
          );
        }
      })}
    </Fragment>
  );
});

const DefinitionModal = observer(() => {
  const rootStore = useRootStore();
  const currentQuestion = rootStore.viewFormStore.currentQuestion;
  const matchedCriterion = rootStore.criterionStore.getMatchingCriterion(
    currentQuestion?.content
  );
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
        <h2>{currentQuestion?.content}</h2>
        {matchedCriterion ? (
          <>
            <h3>Định nghĩa</h3>
            <p>{matchedCriterion.definition || "Đang cập nhật..."}</p>
            <h3>Mức 1</h3>
            <p>{matchedCriterion.level1 || "Đang cập nhật..."}</p>
            <h3>Mức 2</h3>
            <p>{matchedCriterion.level2 || "Đang cập nhật..."}</p>
            <h3>Mức 3</h3>
            <p>{matchedCriterion.level3 || "Đang cập nhật..."}</p>
            <h3>Mức 4</h3>
            <p>{matchedCriterion.level4 || "Đang cập nhật..."}</p>
            <h3>Mức 5</h3>
            <p>{matchedCriterion.level5 || "Đang cập nhật..."}</p>
          </>
        ) : (
          <p>Mô tả cho câu hỏi này đang được cập nhật...</p>
        )}
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

  useIonViewWillEnter(() => {
    const formId = params.formId;
    const form = rootStore.reviewFormStore.getFormFromSlug(formId);
    if (!form) return;
    rootStore.viewFormStore.setReviewForm(form);
    const matchReviewee = rootStore.revieweeStore.reviewees.find((reviewee) => {
      return reviewee.revieweeCode === form.revieweeCode;
    });
    if (!matchReviewee) return;
    rootStore.viewFormStore.setReviewee(matchReviewee);
    rootStore.viewFormStore.setQuestions(
      matchReviewee.revieweePositions,
      form.reviewType
    );
  });

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

        <div style={{ width: "100%" }} className="ion-text-center">
          <IonButton
            onClick={async () => {
              setShowLoading(true);
              try {
                await rootStore.viewFormStore.submitReviewResponse(
                  form,
                  matchReviewee
                );
                setShowToastSuccess(true);
                history.push("/forms");
              } catch (e) {
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
