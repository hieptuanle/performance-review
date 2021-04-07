import {
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButtons,
} from "@ionic/react";
import "./Tab1.css";

import ListForms from "../components/ListForms";

const ListFormsPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>List Forms</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <ListForms></ListForms>
      </IonContent>
    </IonPage>
  );
};

export default ListFormsPage;
