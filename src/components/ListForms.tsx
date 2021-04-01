import React from "react";
import { IonList, IonListHeader } from "@ionic/react";
import { observer } from "mobx-react-lite";
import useRootStore from "../hooks/useRootStore";

import FormItems from "./FormItems";

const ListForms = observer(() => {
  const rootStore = useRootStore();
  const individualForms = rootStore.individualFormStore.forms;
  const selfAssessmentForms = individualForms.filter((form) => {
    return form.reviewType === 1;
  });
  const colleagueForms = individualForms.filter((form) => {
    return form.reviewType === 2;
  });
  const managerForms = individualForms.filter((form) => {
    return form.reviewType === 4;
  });
  const teamForms = rootStore.teamFormStore.forms;
  return (
    <IonList>
      <FormItems title="Tự đánh giá" forms={selfAssessmentForms}></FormItems>
      <FormItems
        title="Đánh giá đồng nghiệp"
        forms={colleagueForms}
      ></FormItems>
      <FormItems title="Quản lý đánh giá" forms={managerForms}></FormItems>
      <FormItems title="Bộ phận đánh giá" forms={teamForms}></FormItems>
    </IonList>
  );
});

export default ListForms;
