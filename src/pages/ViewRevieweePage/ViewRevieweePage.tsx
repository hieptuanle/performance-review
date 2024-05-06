import {
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
import { get } from "lodash";
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
        {/* <IonButton
          fill="solid"
          slot="end"
          href={reviewee.reviewLink}
          target="_blank"
        >
          KQCV 6 tháng
        </IonButton> */}
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

  const ObjectQuestionCard = observer<{
    question: any;
  }>(({ question }) => {
    const isFuture = question.content.includes("6 tháng tiếp theo");

    return (
      <IonCard key={question.content}>
        <IonItem>
          <table className="full-width">
            <thead>
              <tr>
                <th>STT</th>
                <th>Mục tiêu</th>
                <th>
                  {isFuture
                    ? "Kết quả then chốt"
                    : "Kết quả then chốt đã đề ra kỳ trước"}
                </th>
                {!isFuture && <th>Tình trạng(%)</th>}
                <th>
                  {isFuture
                    ? "Kế hoạch thực hiện"
                    : "Mô tả kết quả thực tế đã đạt được"}
                </th>
              </tr>
            </thead>
            <tbody>
              {get(question, "okrs", []).map((item: any, index: number) => (
                <tr key={index}>
                  <td style={{ textAlign: "center" }}>{index + 1}</td>
                  <td style={{ textAlign: "center" }}>{item.object}</td>
                  <td>{item.keyResult}</td>
                  {!isFuture && <td>{item.process}</td>}
                  <td>{item.detail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </IonItem>
      </IonCard>
    );
  });

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
                  {index + 1}. {question.group} -{" "}
                  {question.content.replaceAll(
                    "{{NAME}}",
                    reviewee.revieweeName
                  )}
                </strong>
              </IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>
              {question.layout === "Scale" ? (
                <p>
                  <strong>
                    Tự chấm điểm: {question.selfAssessmentMark} | Người khác
                    chấm: {question.otherMark}
                  </strong>
                </p>
              ) : null}

              {question.layout === "Object" && (
                <IonItem>
                  <ObjectQuestionCard question={question}></ObjectQuestionCard>
                </IonItem>
              )}

              {get(question, "answers", []).map((answer: any) => (
                <div
                  key={answer._id}
                  className={
                    (answer.reviewType === 1 || answer.reviewType === 2
                      ? "self-review"
                      : "") +
                    " " +
                    (answer.anonymous ? "anonymous" : "")
                  }
                >
                  <hr
                    style={{
                      borderTop: "1px solid #dbdbdb",
                    }}
                  ></hr>
                  {!!answer.anonymous && (
                    <div>
                      <strong>Ẩn danh</strong>
                    </div>
                  )}
                  <div>
                    {answer.mark ? (
                      <>
                        <strong>Điểm:</strong>{" "}
                        {answer.mark ? answer.mark : "Không chấm điểm"} {" | "}
                        <strong>Đánh giá: </strong>
                      </>
                    ) : null}
                    <div style={{ whiteSpace: "pre-line" }}>
                      {answer.answer}
                    </div>{" "}
                    <small>
                      {answer.reviewerCode ? answer.reviewerCode + " - " : ""}{" "}
                      {answer.reviewerName}
                    </small>
                  </div>
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
