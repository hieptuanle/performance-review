import { IonItem, IonLabel, IonCard, IonCardContent } from "@ionic/react";

import FormType from "../components/FormType";
import RevieweeTitle from "../components/RevieweePosition";
import UserAvatar from "../components/UserAvatar";
import { Reviewee } from "../models/RevieweeStore";
import { ReviewForm } from "../models/ReviewFormStore";

const RevieweeIntro: React.FC<{
  reviewForm: ReviewForm;
  reviewee?: Reviewee;
}> = ({ reviewForm, reviewee }) => {
  if (!reviewForm) return null;
  return (
    <IonCard>
      <IonCardContent>
        <IonItem>
          <UserAvatar revieweeCode={reviewForm.revieweeCode}></UserAvatar>
          <IonLabel>
            <h1>{reviewForm.revieweeName}</h1>
            <p>
              <RevieweeTitle
                revieweeCode={reviewForm.revieweeCode}
              ></RevieweeTitle>
            </p>
          </IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>
            <p>Kiểu form</p>
            <h2>
              <FormType formType={reviewForm.reviewType}></FormType>
            </h2>
          </IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>
            <p>Form này đại diện cho</p>
            <h2>
              {reviewForm.reviewType === 3
                ? reviewForm.reviewerName
                : "Cá nhân bạn"}
            </h2>
          </IonLabel>
        </IonItem>
        {reviewee && reviewee.reviewLink && reviewForm.reviewType === 1 ? (
          <IonItem>
            <IonLabel>
              <p>Tổng kết công việc 6 tháng</p>
              <h2>
                <a target="_blank" rel="noreferrer" href={reviewee?.reviewLink}>
                  Link
                </a>
              </h2>
            </IonLabel>
          </IonItem>
        ) : null}
      </IonCardContent>
    </IonCard>
  );
};
export default RevieweeIntro;
