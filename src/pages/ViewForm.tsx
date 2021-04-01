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
  IonCardContent,
  useIonViewWillEnter,
} from "@ionic/react";
import "./Tab1.css";

import { RouteComponentProps } from "react-router";
import { Fragment } from "react";
import { observer } from "mobx-react-lite";
import useRootStore from "../hooks/useRootStore";
import FormType from "../components/FormType";
import RevieweeTitle from "../components/RevieweePosition";
import UserAvatar from "../components/UserAvatar";
import { ReviewForm } from "../models/ReviewFormStore";
import { Question } from "../models/ViewFormStore";
import NotFound from "./NotFound";
interface ViewFormPageProps
  extends RouteComponentProps<{
    formId: string;
  }> {}

const RevieweeIntro: React.FC<{ form: ReviewForm }> = ({ form }) => {
  return (
    <IonCard>
      <IonCardContent>
        <IonItem>
          <UserAvatar revieweeCode={form.revieweeCode}></UserAvatar>
          <IonLabel>
            <h1>{form.revieweeName}</h1>
            <p>
              <RevieweeTitle revieweeCode={form.revieweeCode}></RevieweeTitle>
            </p>
          </IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>
            <p>Kiểu form</p>
            <h2>
              <FormType formType={form.reviewType}></FormType>
            </h2>
          </IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>
            <p>Form này đại diện cho</p>
            <h2>{form.reviewType === 3 ? form.reviewerName : "Cá nhân bạn"}</h2>
          </IonLabel>
        </IonItem>
      </IonCardContent>
    </IonCard>
  );
};

const ScaleQuestionCard = observer<{ question: Question; index: number }>(
  ({ question, index }) => {
    const rootStore = useRootStore();
    return (
      <IonCard>
        <IonListHeader>
          <h2>
            {index + 1}. {question.content}
          </h2>
        </IonListHeader>
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
          <IonLabel position="fixed">Giải thích</IonLabel>
          <IonTextarea
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
        <IonListHeader>
          <h2>
            {index + 1}. {question.content}
          </h2>
        </IonListHeader>
        <IonItem>
          <IonLabel position="stacked">Câu trả lời tự luận</IonLabel>
          <IonTextarea
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

const FormQuestions = observer<{ positions: string[]; reviewType: number }>(
  ({ positions, reviewType }) => {
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
  }
);

const ViewForm: React.FC<ViewFormPageProps> = ({ match }) => {
  const rootStore = useRootStore();
  useIonViewWillEnter(() => {
    const formId = match.params.formId;
    const form = rootStore.reviewFormStore.getFormFromSlug(formId);
    if (!form) return;
    const matchReviewee = rootStore.revieweeStore.reviewees.find((reviewee) => {
      return reviewee.revieweeCode === form.revieweeCode;
    });
    if (!matchReviewee) return;
    rootStore.viewFormStore.setQuestions(
      matchReviewee.revieweePositions,
      form.reviewType
    );
  });

  const formId = match.params.formId;
  const form = rootStore.reviewFormStore.getFormFromSlug(formId);

  if (!form) {
    return <NotFound></NotFound>;
  }

  const matchReviewee = rootStore.revieweeStore.reviewees.find((reviewee) => {
    return reviewee.revieweeCode === form.revieweeCode;
  });

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
        <RevieweeIntro form={form}></RevieweeIntro>
        <FormQuestions
          reviewType={form.reviewType}
          positions={matchReviewee.revieweePositions}
        ></FormQuestions>

        <div style={{ width: "100%" }} className="ion-text-center">
          <IonButton
            onClick={() => {
              console.log(rootStore.viewFormStore.asJs());
            }}
          >
            Gửi
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default ViewForm;
