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
  useIonViewWillEnter,
  useIonViewWillLeave,
  useIonViewDidEnter,
} from "@ionic/react";

import { useParams } from "react-router";
import { observer } from "mobx-react-lite";
import useRootStore from "../hooks/useRootStore";
import FormType from "../components/FormType";

import NotFound from "./NotFound";
import RevieweeIntro from "../components/RevieweeIntro";

const ViewResponsePage = observer(() => {
  const rootStore = useRootStore();
  const params = useParams<{ responseId: string }>();
  const viewResponseStore = rootStore.viewResponseStore;

  useIonViewDidEnter(async () => {
    const responseId = params.responseId;
    await viewResponseStore.findOne(responseId);
  });

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
                {index + 1}. {d.content}
              </h2>
            </IonItem>
            <IonItem>
              <p>Điểm: {d.mark}</p>
            </IonItem>
            <IonItem>
              <p>Giải thích: {d.answer}</p>
            </IonItem>
          </IonCard>
        ))}
      </IonContent>
    </IonPage>
  );
});

export default ViewResponsePage;
