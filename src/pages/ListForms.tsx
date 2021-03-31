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

const ListForms: React.FC = () => {
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
        <IonList>
          {forms.map((form) => (
            <IonItem
              key={form.title + "_" + form.type}
              routerLink={"/forms/" + form.slug}
            >
              <IonAvatar slot="start">
                <img
                  src={"https://www.gravatar.com/avatar/" + md5(form.email)}
                  alt={form.title + " avatar"}
                />
              </IonAvatar>
              <IonLabel>
                <h2>{form.title}</h2>
                <h3>{form.position}</h3>
                <p>
                  {form.type} | &nbsp;
                  {form.deadline} | &nbsp;
                  {form.status === "done" ? "Hoàn thành" : "Chưa hoàn thành"}
                </p>
              </IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default ListForms;
