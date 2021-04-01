import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Tab3.css";

const NotFound: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton></IonMenuButton>
            <IonBackButton></IonBackButton>
          </IonButtons>
          <IonTitle>Không tìm thấy</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding ion-text-center">
        <img
          src="/assets/Astronaut-big.png"
          alt="Not Found - Astronaut"
          style={{ maxWidth: 400 }}
        ></img>
        <p>
          Không tìm thấy form này hoặc bạn không có quyền truy cập. Bạn kiểm tra
          lại đường dẫn hoặc liên hệ với bộ phận Tech nhé.
        </p>
      </IonContent>
    </IonPage>
  );
};

export default NotFound;
