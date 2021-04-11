import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonContent,
  IonItem,
  IonLabel,
  IonPage,
} from "@ionic/react";
import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { useParams } from "react-router";
import NormalHeader from "../../components/NormalHeader";
import UserAvatar from "../../components/UserAvatar";
import useRootStore from "../../hooks/useRootStore";
import { Reviewee } from "../../models/RevieweeStore";
import NotFound from "../NotFound";
import "./ViewRevieweePage.css";

const RevieweeCard: React.FC<{ reviewee: Reviewee }> = ({ reviewee }) => {
  return (
    <IonCard>
      <IonItem>
        <UserAvatar revieweeCode={reviewee.revieweeCode}></UserAvatar>
        <IonLabel>
          <h2>{reviewee.revieweeName}</h2>
          <h3>{reviewee.revieweePositions.join(" | ")}</h3>
        </IonLabel>
      </IonItem>

      <IonItem>
        <IonLabel>
          <h3>Bộ phận: {reviewee.revieweeDepartment}</h3>
        </IonLabel>
        <IonButton
          fill="solid"
          slot="end"
          href={reviewee.reviewLink}
          target="_blank"
        >
          KQCV 6 tháng
        </IonButton>
      </IonItem>
    </IonCard>
  );
};

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

  const questions = viewRevieweeStore.questions;

  return (
    <IonPage>
      <NormalHeader
        title={"Tổng hợp đánh giá " + reviewee.revieweeName}
      ></NormalHeader>
      <IonContent fullscreen className="view-reviewee-page">
        <RevieweeCard reviewee={reviewee}></RevieweeCard>
        {questions.map((question, index) => (
          <IonCard key={question.content}>
            <IonCardHeader>
              <IonCardSubtitle>
                <strong>
                  {index + 1}. {question.group} - {question.content}
                </strong>
              </IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>
              {question.answers.map((answer) => (
                <div
                  key={answer._id}
                  className={
                    answer.reviewType === 1
                      ? "self-review "
                      : answer.reviewType === 4
                      ? "manager-review "
                      : ""
                  }
                >
                  <hr
                    style={{
                      borderTop: "1px solid #dbdbdb",
                    }}
                  ></hr>
                  <p>
                    {answer.mark > 0 ? (
                      <>
                        <strong>Điểm:</strong>{" "}
                        {answer.mark ? answer.mark : "Không chấm điểm"} {" | "}
                        <strong>Đánh giá: </strong>
                      </>
                    ) : null}
                    {answer.answer} <br />
                    <small>
                      {answer.reviewerCode ? answer.reviewerCode + " - " : ""}{" "}
                      {answer.reviewerName}
                    </small>
                  </p>
                </div>
              ))}
            </IonCardContent>
          </IonCard>
        ))}
      </IonContent>
    </IonPage>
  );
});

export default ViewRevieweePage;
