import React from "react";
import { IonContent, IonItem, IonLabel, IonList, IonPage } from "@ionic/react";
import { observer } from "mobx-react-lite";
import NormalHeader from "../../components/NormalHeader";
import useRootStore from "../../hooks/useRootStore";

const ListRevieweesPage = observer(() => {
  const rootStore = useRootStore();
  const listRevieweesStore = rootStore.listRevieweesStore;
  const reviewees = listRevieweesStore.reviewees;
  return (
    <IonPage>
      <NormalHeader title="Reviewees"></NormalHeader>
      <IonContent fullscreen>
        <IonList>
          {reviewees.map((reviewee) => (
            <IonItem
              key={reviewee.revieweeCode}
              routerLink={"/reviewees/" + reviewee.revieweeSlug}
            >
              <IonLabel>
                <h2>
                  {reviewee.revieweeCode} - {reviewee.revieweeName}
                </h2>
              </IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
});

export default ListRevieweesPage;
