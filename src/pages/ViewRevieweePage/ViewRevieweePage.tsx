import React, { useEffect } from "react";
import { IonContent, IonPage } from "@ionic/react";
import { observer } from "mobx-react-lite";
import NormalHeader from "../../components/NormalHeader";
import { useParams } from "react-router";
import useRootStore from "../../hooks/useRootStore";
import NotFound from "../NotFound";

const ViewRevieweePage = observer(() => {
  const params = useParams<{ revieweeId: string }>();
  const rootStore = useRootStore();
  const viewRevieweeStore = rootStore.viewRevieweeStore;
  useEffect(() => {
    viewRevieweeStore.getReviewee(params.revieweeId);
    if (viewRevieweeStore.reviewee) {
      viewRevieweeStore.getReviewResponse(viewRevieweeStore.reviewee);
    }
  }, [params.revieweeId, viewRevieweeStore]);

  const reviewee = viewRevieweeStore.reviewee;

  if (!reviewee) return <NotFound></NotFound>;

  return (
    <IonPage>
      <NormalHeader title={"Reviewee " + params.revieweeId}></NormalHeader>
      <IonContent fullscreen></IonContent>
    </IonPage>
  );
});

export default ViewRevieweePage;
