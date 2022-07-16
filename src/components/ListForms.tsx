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
    return form.reviewType === 1 || form.reviewType === 2;
  });
  const colleagueForms = individualForms.filter((form) => {
    return [3, 4].includes(form.reviewType);
  });
  if (!individualForms.length && !colleagueForms.length) {
    return (
      <IonList>
        <IonListHeader>Bạn không có form đánh giá nào</IonListHeader>
      </IonList>
    );
  }
  return (
    <IonList>
      <FormItems title="Tự đánh giá" forms={selfAssessmentForms}></FormItems>
      <FormItems title="Đánh giá 360" forms={colleagueForms}></FormItems>
    </IonList>
  );
});

export default ListForms;
