import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Tab3.css";

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Log Out</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Bạn sẽ được đăng xuất</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Bạn sẽ được đăng xuất..." />
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
