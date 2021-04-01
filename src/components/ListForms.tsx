import React from "react";
import { IonItem, IonLabel, IonList } from "@ionic/react";
import { observer } from "mobx-react-lite";
import FormType from "./FormType";
import useRootStore from "../hooks/useRootStore";
import UserAvatar from "./UserAvatar";
import RevieweeTitle from "./RevieweePosition";

const ListForms = observer(() => {
  const rootStore = useRootStore();
  const forms = rootStore.individualFormStore.forms;
  return (
    <IonList>
      {forms.map((form) => (
        <IonItem key={form.slug} routerLink={"/forms/" + form.slug}>
          <UserAvatar revieweeCode={form.revieweeCode}></UserAvatar>
          <IonLabel>
            <h2>{form.revieweeName}</h2>
            <RevieweeTitle revieweeCode={form.revieweeCode}></RevieweeTitle>
            <p>
              <FormType formType={form.reviewType}></FormType>
              {/* {form.status === "done" ? "Hoàn thành" : "Chưa hoàn thành"} */}
            </p>
          </IonLabel>
        </IonItem>
      ))}
    </IonList>
  );
});

export default ListForms;
