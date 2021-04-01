import {
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonList,
  IonItem,
  IonLabel,
  IonListHeader,
  IonTextarea,
  IonButton,
  IonSelect,
  IonSelectOption,
} from "@ionic/react";
import "./Tab1.css";

import { questions } from "../models/form";
import { RouteComponentProps } from "react-router";
import { Fragment } from "react";
import { observer } from "mobx-react-lite";
import useRootStore from "../hooks/useRootStore";
import { intersection } from "lodash";

interface ViewFormPageProps
  extends RouteComponentProps<{
    formId: string;
  }> {}

const ViewForm = observer<ViewFormPageProps>(({ match }) => {
  const rootStore = useRootStore();
  const formId = match.params.formId;
  console.log({ formId });
  const matchForm = rootStore.reviewFormStore.getFormFromSlug(formId);

  if (!matchForm) {
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
          Không tìm thấy form này. Bạn kiểm tra lại đường dẫn hoặc liên hệ với
          bộ phận Tech nhé.
        </IonContent>
      </IonPage>
    );
  }

  const matchReviewee = rootStore.revieweeStore.reviewees.find((reviewee) => {
    return reviewee.revieweeCode === matchForm.revieweeCode;
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

  const matchQuestions = questions.filter((question) => {
    return (
      intersection(question.positions, matchReviewee.revieweePositions).length >
        0 && question.type >= matchForm.reviewType
    );
  });

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>Performance Review {matchForm.revieweeName}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
          {matchQuestions.map((question, index) => {
            if (question.layout === "Scale")
              return (
                <Fragment key={question.content}>
                  <IonListHeader key={question.content + "_title"}>
                    <h2>
                      {index + 1}. {question.content}
                    </h2>
                  </IonListHeader>
                  <IonItem key={question.content + "_mark"}>
                    <IonLabel position="fixed">Chấm điểm</IonLabel>
                    <IonSelect interface="action-sheet" defaultValue="">
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
                      style={{ minHeight: "100px", lineHeight: "1.5em" }}
                      autoGrow={true}
                      rows={5}
                    ></IonTextarea>
                  </IonItem>
                </Fragment>
              );
            return (
              <Fragment key={question.content}>
                <IonListHeader key={question.content + "_title"}>
                  <h2>
                    {index + 1}. {question.content}
                  </h2>
                </IonListHeader>
                <IonItem key={question.content + "_evaluate"}>
                  <IonLabel position="stacked">Nêu đánh giá của bạn</IonLabel>
                  <IonTextarea
                    style={{ minHeight: "100px", lineHeight: "1.5em" }}
                    autoGrow={true}
                    rows={5}
                  ></IonTextarea>
                </IonItem>
              </Fragment>
            );
          })}
        </IonList>
        <IonButton>Gửi</IonButton>
      </IonContent>
    </IonPage>
  );
});

export default ViewForm;
