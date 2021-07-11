import React, { useEffect } from "react";
import { IonList, IonListHeader } from "@ionic/react";
import { observer } from "mobx-react-lite";
import useRootStore from "../hooks/useRootStore";

import FormItems from "./FormItems";

const ListForms = observer(() => {
  const rootStore = useRootStore();
  useEffect(() => {
    rootStore.formSummaryStore.getSummary();
  });
  const individualForms = rootStore.individualFormStore.myForms;
  const selfAssessmentForms = individualForms.filter((form) => {
    return form.reviewType === 1;
  });
  const colleagueForms = individualForms.filter((form) => {
    return form.reviewType === 2;
  });
  if (!individualForms.length) {
    return (
      <IonList>
        <IonListHeader>Bạn không có form đánh giá nào</IonListHeader>
      </IonList>
    );
  }
  return (
    <IonList>
      <FormItems title="Tự đánh giá" forms={selfAssessmentForms}></FormItems>
      <FormItems
        title="Đánh giá đồng nghiệp"
        forms={colleagueForms}
      ></FormItems>
    </IonList>
  );
});

export default ListForms;
