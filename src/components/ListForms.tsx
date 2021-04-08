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
  const managerForms = individualForms.filter((form) => {
    return form.reviewType === 4;
  });
  const teamForms = rootStore.teamFormStore.myForms;
  if (!individualForms.length && !teamForms.length) {
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
      <FormItems title="Quản lý đánh giá" forms={managerForms}></FormItems>
      <FormItems
        title="Bộ phận đánh giá"
        note="Mỗi bộ phận chỉ cần gửi 1 form duy nhất cho 1 nhân viên. Hãy đảm bảo bạn đã thảo luận với các thành viên khác trong team trước khi đánh giá các bạn sau nhé!"
        forms={teamForms}
      ></FormItems>
    </IonList>
  );
});

export default ListForms;
