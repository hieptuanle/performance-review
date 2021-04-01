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

const FormQuestions = observer<{ positions: string[]; reviewType: number }>(
  ({ positions, reviewType }) => {
    const rootStore = useRootStore();
    const questions = rootStore.questionStore.getQuestions(
      positions,
      reviewType
    );
    return (
      <Fragment>
        {questions.map((question, index) => {
          if (question.layout === "Scale")
            return (
              <IonCard key={question.content}>
                <IonListHeader key={question.content + "_title"}>
                  <h2>
                    {index + 1}. {question.content}
                  </h2>
                </IonListHeader>
                <IonItem key={question.content + "_mark"}>
                  <IonLabel position="fixed">Chấm điểm</IonLabel>
                  <IonSelect interface="popover" defaultValue="">
                    <IonSelectOption> 1</IonSelectOption>
                    <IonSelectOption>2</IonSelectOption>
                    <IonSelectOption>3</IonSelectOption>
                    <IonSelectOption>4</IonSelectOption>
                    <IonSelectOption>5</IonSelectOption>
                    <IonSelectOption value="">Không đánh giá</IonSelectOption>
                  </IonSelect>
                </IonItem>
                <IonItem key={question.content + "_text"}>
                  <IonLabel position="fixed">Giải thích</IonLabel>
                  <IonTextarea
                    style={{ minHeight: "50px", lineHeight: "1.5em" }}
                    autoGrow={true}
                    rows={5}
                  ></IonTextarea>
                </IonItem>
              </IonCard>
            );
          return (
            <IonCard key={question.content}>
              <IonListHeader key={question.content + "_title"}>
                <h2>
                  {index + 1}. {question.content}
                </h2>
              </IonListHeader>
              <IonItem key={question.content + "_evaluate"}>
                <IonLabel position="stacked">Nêu đánh giá của bạn</IonLabel>
                <IonTextarea
                  style={{ minHeight: "50px", lineHeight: "1.5em" }}
                  autoGrow={true}
                  rows={5}
                ></IonTextarea>
              </IonItem>
            </IonCard>
          );
        })}
      </Fragment>
    );
  }
);

const ViewForm = observer<ViewFormPageProps>(({ match }) => {
  const rootStore = useRootStore();
  const formId = match.params.formId;
  console.log({ formId });
  const form = rootStore.reviewFormStore.getFormFromSlug(formId);

  if (!form) {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>Không tìm thấy</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding ion-text-center">
          Không tìm thấy form này hoặc bạn không có quyền truy cập. Bạn kiểm tra
          lại đường dẫn hoặc liên hệ với bộ phận Tech nhé.
        </IonContent>
      </IonPage>
    );
  }

  const matchReviewee = rootStore.revieweeStore.reviewees.find((reviewee) => {
    return reviewee.revieweeCode === form.revieweeCode;
  });

  if (!matchReviewee) {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>Không tìm thấy</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding ion-text-center">
          Không tìm thấy ứng viên này. Bạn liên hệ bộ phận Tech nhé.
        </IonContent>
      </IonPage>
    );
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
          <IonButton>Gửi</IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
});

export default ViewForm;
