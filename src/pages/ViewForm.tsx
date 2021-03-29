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

import { questions, forms } from "../models/form";
import { RouteComponentProps } from "react-router";

interface ViewFormPageProps
  extends RouteComponentProps<{
    formId: string;
  }> {}

const ViewForm: React.FC<ViewFormPageProps> = ({ match }) => {
  const formId = match.params.formId;
  const matchForm = forms.find((form) => {
    return form.slug === formId;
  });

  if (!matchForm) {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>Not Found</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>Not Found</IonContent>
      </IonPage>
    );
  }

  const matchQuestions = questions.filter((question) => {
    return (
      question.positions.includes(matchForm?.position) &&
      question.types.includes(matchForm.type)
    );
  });

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>Performance Review {matchForm.title}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
          {matchQuestions.map((question, index) => {
            if (question.layout === "Scale")
              return (
                <>
                  <IonItem>
                    <h2>
                      {index + 1}. {question.content} | Đánh giá điểm
                    </h2>
                  </IonItem>
                  <IonItem id={question.content + "_mark"}>
                    <IonLabel position="fixed">Chấm điểm</IonLabel>
                    <IonSelect interface="action-sheet" defaultValue="">
                      <IonSelectOption> 1 - Chưa đạt kì vọng</IonSelectOption>
                      <IonSelectOption>2 - Đạt kì vọng</IonSelectOption>
                      <IonSelectOption>3 - Tốt</IonSelectOption>
                      <IonSelectOption>4 - Xuất sắc</IonSelectOption>
                      <IonSelectOption>5 - Cực kì xuất sắc</IonSelectOption>
                      <IonSelectOption value="">Không đánh giá</IonSelectOption>
                    </IonSelect>
                  </IonItem>
                  <IonItem id={question.content + "_text"}>
                    <IonLabel position="fixed">Giải thích</IonLabel>
                    <IonTextarea
                      style={{ minHeight: "100px", lineHeight: "1.5em" }}
                      autoGrow={true}
                      rows={5}
                    ></IonTextarea>
                  </IonItem>
                </>
              );
            return (
              <>
                <IonListHeader>
                  <h2>
                    {index + 1}. {question.content}
                  </h2>
                </IonListHeader>
                <IonItem id={question.content}>
                  <IonLabel position="stacked">Nêu đánh giá của bạn</IonLabel>
                  <IonTextarea
                    style={{ minHeight: "100px", lineHeight: "1.5em" }}
                    autoGrow={true}
                    rows={5}
                  ></IonTextarea>
                </IonItem>
              </>
            );
          })}
        </IonList>
        <IonButton>Gửi</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default ViewForm;
