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
  IonAvatar,
} from "@ionic/react";
import "./Tab1.css";

import md5 from "md5";
import { forms } from "../models/form";
import ListForms from "../components/ListForms";

const FormType: React.FC<{ formType: number }> = ({ formType }) => {
  switch (formType) {
    case 1:
      return <span>Tự đánh giá</span>;
    case 2:
      return <span>Đồng nghiệp đánh giá</span>;
    case 3:
      return <span>Bộ phận đánh giá</span>;
    case 4:
      return <span>Quản lý đánh giá</span>;
    default:
      return <span>Không xác định</span>;
  }
};

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
