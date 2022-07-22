import {
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonItem,
  IonCard,
  IonLabel,
  IonText,
} from "@ionic/react";

import { useParams } from "react-router";
import { observer } from "mobx-react-lite";
import useRootStore from "../hooks/useRootStore";
import FormType from "../components/FormType";

import NotFound from "./NotFound";
import RevieweeIntro from "../components/RevieweeIntro";
import { useEffect } from "react";

const ViewResponsePage = observer(() => {
  const rootStore = useRootStore();
  const params = useParams<{ responseId: string }>();
  const viewResponseStore = rootStore.viewResponseStore;

  useEffect(() => {
    const responseId = params.responseId;
    viewResponseStore.findOne(responseId);
  }, [params.responseId, viewResponseStore]);

  if (!viewResponseStore.response) {
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
            {viewResponseStore.response.revieweeName} |{" "}
            <FormType
              formType={viewResponseStore.response.reviewType}
            ></FormType>{" "}
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        <RevieweeIntro reviewForm={viewResponseStore.response}></RevieweeIntro>
        {viewResponseStore.response.questions.map((d, index) => (
          <IonCard key={d.content}>
            <IonItem>
              <h2>
                {index + 1}.{" "}
                {d.content.replaceAll(
                  `{{NAME}}`,
                  viewResponseStore.response?.revieweeName || ""
                )}
              </h2>
            </IonItem>
            {viewResponseStore.response?.reviewType === 1 && (
              <IonItem>
                <IonLabel>
                  <IonText color="primary">
                    <h3>Điểm</h3>
                  </IonText>
                  <p>{d.mark}</p>
                </IonLabel>
              </IonItem>
            )}

            <IonItem>
              <IonLabel className="ion-text-wrap">
                <IonText color="primary">
                  <h3>Giải thích</h3>
                </IonText>
                <p style={{ whiteSpace: "pre-line" }}>{d.answer}</p>
              </IonLabel>
            </IonItem>
          </IonCard>
        ))}
      </IonContent>
    </IonPage>
  );
});

export default ViewResponsePage;
