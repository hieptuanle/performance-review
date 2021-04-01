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
    const questions = rootStore.viewFormStore.questions;
    return (
      <Fragment>
        {questions.map((question, index) => {
          if (question.layout === "Scale") {
            return (
              <IonCard key={question.content}>
                <IonListHeader key={question.content + "_title"}>
                  <h2>
                    {index + 1}. {question.content}
                  </h2>
                </IonListHeader>
                <IonItem key={question.content + "_mark"}>
                  <IonLabel position="fixed">Chấm điểm</IonLabel>
                  <IonSelect
                    value={question.mark}
                    onIonChange={(e) => {
                      rootStore.viewFormStore.setMark(
                        question,
                        e.detail.value || ""
                      );
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
                <IonItem key={question.content + "_text"}>
                  <IonLabel position="fixed">Giải thích</IonLabel>
                  <IonTextarea
                    value={question.answer}
                    onIonChange={(e) => {
                      rootStore.viewFormStore.setAnswer(
                        question,
                        e.detail.value || ""
                      );
                    }}
                    style={{ minHeight: "50px", lineHeight: "1.5em" }}
                    autoGrow={true}
                    rows={5}
                  ></IonTextarea>
                </IonItem>
              </IonCard>
            );
          } else {
            return (
              <IonCard key={question.content}>
                <IonListHeader key={question.content + "_title"}>
                  <h2>
                    {index + 1}. {question.content}
                  </h2>
                </IonListHeader>
                <IonItem key={question.content + "_evaluate"}>
                  <IonLabel position="stacked">Câu trả lời tự luận</IonLabel>
                  <IonTextarea
                    style={{ minHeight: "50px", lineHeight: "1.5em" }}
                    autoGrow={true}
                    rows={5}
                  ></IonTextarea>
                </IonItem>
              </IonCard>
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
