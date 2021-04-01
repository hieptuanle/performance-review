import React from "react";
import { IonItem, IonLabel, IonListHeader } from "@ionic/react";
import { observer } from "mobx-react-lite";
import FormType from "./FormType";
import UserAvatar from "./UserAvatar";
import RevieweeTitle from "./RevieweePosition";
import { ReviewForm } from "../models/ReviewFormStore";

const FormItems = observer<{
  forms: ReviewForm[];
  title: string;
  note?: string;
}>(({ forms, title, note }) => {
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
            <RevieweeTitle revieweeCode={form.revieweeCode}></RevieweeTitle>
            <p>
              <FormType formType={form.reviewType}></FormType>
              {form.reviewType === 3
                ? " | Form này đại diện cho bộ phận: " + form.reviewerName
                : null}
              {/* {form.status === "done" ? "Hoàn thành" : "Chưa hoàn thành"} */}
            </p>
          </IonLabel>
        </IonItem>
      ))}
    </>
  );
});

export default FormItems;
