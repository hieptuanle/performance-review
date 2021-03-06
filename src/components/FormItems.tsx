import React from "react";
import { IonItem, IonLabel, IonListHeader } from "@ionic/react";
import { observer } from "mobx-react-lite";
import FormType from "./FormType";
import UserAvatar from "./UserAvatar";
import RevieweeTitle from "./RevieweePosition";
import { ReviewForm } from "../models/ReviewFormStore";
import useRootStore from "../hooks/useRootStore";

const FormItems = observer<{
  forms: ReviewForm[];
  title: string;
  note?: string;
}>(({ forms, title, note }) => {
  const rootStore = useRootStore();
  const summary = rootStore.formSummaryStore.summary;
  if (!forms.length) return null;
  return (
    <>
      <IonListHeader>
        <h2>{title}</h2>
      </IonListHeader>
      {note ? (
        <IonListHeader style={{ color: "red" }}>{note}</IonListHeader>
      ) : null}
      {forms.map((form) => (
        <IonItem key={form.slug} routerLink={"/forms/" + form.slug}>
          <UserAvatar revieweeCode={form.revieweeCode}></UserAvatar>
          <IonLabel>
            <h2>{form.revieweeName}</h2>
            <h3>
              <RevieweeTitle revieweeCode={form.revieweeCode}></RevieweeTitle>
            </h3>
            <p>
              <FormType formType={form.reviewType}></FormType>:{" "}
              {form.reviewerName}
              {summary[form.slug]
                ? " | ✅ Hoàn thành"
                : " | ❌ Chưa hoàn thành"}
            </p>
          </IonLabel>
        </IonItem>
      ))}
    </>
  );
});

export default FormItems;
