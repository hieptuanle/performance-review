import {
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonItem,
  IonLabel,
  IonListHeader,
  IonTextarea,
  IonButton,
  IonSelect,
  IonSelectOption,
  IonCard,
  IonCardContent,
  useIonViewWillEnter,
  IonLoading,
  IonModal,
  IonIcon,
} from "@ionic/react";
import { informationCircleOutline } from "ionicons/icons";

import { useHistory, useParams } from "react-router";
import { Fragment, useState } from "react";
import { observer } from "mobx-react-lite";
import useRootStore from "../hooks/useRootStore";
import FormType from "../components/FormType";
import RevieweeTitle from "../components/RevieweePosition";
import UserAvatar from "../components/UserAvatar";
import { Question } from "../models/ViewFormStore";
import NotFound from "./NotFound";

const RevieweeIntro: React.FC = () => {
  const rootStore = useRootStore();
  const form = rootStore.viewFormStore.reviewForm;
  const reviewee = rootStore.viewFormStore.reviewee;
  if (!form) return null;
  return (
    <IonCard>
      <IonCardContent>
        <IonItem>
          <UserAvatar revieweeCode={form.revieweeCode}></UserAvatar>
          <IonLabel>
            <h1>{form.revieweeName}</h1>
            <p>
              <RevieweeTitle revieweeCode={form.revieweeCode}></RevieweeTitle>
            </p>
          </IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>
            <p>Kiểu form</p>
            <h2>
              <FormType formType={form.reviewType}></FormType>
            </h2>
          </IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>
            <p>Form này đại diện cho</p>
            <h2>{form.reviewType === 3 ? form.reviewerName : "Cá nhân bạn"}</h2>
          </IonLabel>
        </IonItem>
        {reviewee && reviewee.reviewLink && form.reviewType === 1 ? (
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

const QuestionHeader = observer<{ question: Question; index: number }>(
  ({ question, index }) => {
    const rootStore = useRootStore();
    return (
      <IonListHeader lines="full">
        <IonLabel>
          <h2 style={{ fontSize: "1.5em", fontWeight: "bold" }}>
            {index + 1}. {question.content}
          </h2>
        </IonLabel>
        <IonButton
          onClick={() => {
            rootStore.viewFormStore.setCurrentQuestion(question);
            rootStore.viewFormStore.setShowDefinitionModal(true);
            console.log(rootStore.viewFormStore.showDefinitionModal);
          }}
        >
          <IonIcon icon={informationCircleOutline}></IonIcon> &nbsp; Mô tả tiêu
          chí
        </IonButton>
      </IonListHeader>
    );
  }
);

const ScaleQuestionCard = observer<{ question: Question; index: number }>(
  ({ question, index }) => {
    const rootStore = useRootStore();
    return (
      <IonCard>
        <QuestionHeader question={question} index={index}></QuestionHeader>
        <IonItem>
          <IonLabel position="fixed">Chấm điểm</IonLabel>
          <IonSelect
            value={question.mark}
            onIonChange={(e) => {
              rootStore.viewFormStore.setMark(question, e.detail.value || "");
            }}
            interface="popover"
          >
            {["1", "2", "3", "4", "5"].map((d) => (
              <IonSelectOption key={d} value={d}>
                {d}
              </IonSelectOption>
            ))}
            <IonSelectOption value={0}>Không đánh giá</IonSelectOption>
          </IonSelect>
        </IonItem>
        <IonItem>
          <IonLabel position="fixed">Giải thích</IonLabel>
          <IonTextarea
            value={question.answer}
            onIonChange={(e) => {
              rootStore.viewFormStore.setAnswer(question, e.detail.value || "");
            }}
            style={{ minHeight: "50px", lineHeight: "1.5em" }}
            autoGrow={true}
            rows={5}
          ></IonTextarea>
        </IonItem>
      </IonCard>
    );
  }
);

const TextQuestionCard = observer<{ question: Question; index: number }>(
  ({ question, index }) => {
    const rootStore = useRootStore();
    return (
      <IonCard key={question.content}>
        <QuestionHeader question={question} index={index}></QuestionHeader>
        <IonItem>
          <IonLabel position="stacked">Câu trả lời tự luận</IonLabel>
          <IonTextarea
            onIonChange={(e) => {
              rootStore.viewFormStore.setAnswer(question, e.detail.value || "");
            }}
            style={{ minHeight: "50px", lineHeight: "1.5em" }}
            autoGrow={true}
            rows={5}
          ></IonTextarea>
        </IonItem>
      </IonCard>
    );
  }
);

const FormQuestions = observer(() => {
  const rootStore = useRootStore();
  const questions = rootStore.viewFormStore.questions;
  return (
    <Fragment>
      {questions.map((question, index) => {
        if (question.layout === "Scale") {
          return (
            <ScaleQuestionCard
              key={question.content}
              question={question}
              index={index}
            ></ScaleQuestionCard>
          );
        } else {
          return (
            <TextQuestionCard
              key={question.content}
              question={question}
              index={index}
            ></TextQuestionCard>
          );
        }
      })}
    </Fragment>
  );
});

const DefinitionModal = observer(() => {
  const rootStore = useRootStore();
  const currentQuestion = rootStore.viewFormStore.currentQuestion;
  const matchedCriterion = rootStore.criterionStore.getMatchingCriterion(
    currentQuestion?.content
  );
  return (
    <IonModal
      isOpen={rootStore.viewFormStore.showDefinitionModal}
      onDidDismiss={() => {
        rootStore.viewFormStore.setShowDefinitionModal(false);
      }}
      cssClass="ion-padding"
    >
      <IonHeader translucent={true}>
        <IonToolbar>
          <IonButtons slot="end">
            <IonButton
              onClick={() =>
                rootStore.viewFormStore.setShowDefinitionModal(false)
              }
            >
              Thoát
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen={true} className="ion-padding">
        <h2>{currentQuestion?.content}</h2>
        {matchedCriterion ? (
          <>
            <h3>Định nghĩa</h3>
            <p>{matchedCriterion.definition || "Đang cập nhật..."}</p>
            <h3>Mức 1</h3>
            <p>{matchedCriterion.level1 || "Đang cập nhật..."}</p>
            <h3>Mức 2</h3>
            <p>{matchedCriterion.level2 || "Đang cập nhật..."}</p>
            <h3>Mức 3</h3>
            <p>{matchedCriterion.level3 || "Đang cập nhật..."}</p>
            <h3>Mức 4</h3>
            <p>{matchedCriterion.level4 || "Đang cập nhật..."}</p>
            <h3>Mức 5</h3>
            <p>{matchedCriterion.level5 || "Đang cập nhật..."}</p>
          </>
        ) : (
          <p>Mô tả cho câu hỏi này đang được cập nhật...</p>
        )}
      </IonContent>
    </IonModal>
  );
});

const ViewForm = observer(() => {
  const rootStore = useRootStore();
  const history = useHistory();
  const params = useParams<{ formId: string }>();
  const [showLoading, setShowLoading] = useState(false);

  useIonViewWillEnter(() => {
    console.log("enter");
    const formId = params.formId;
    const form = rootStore.reviewFormStore.getFormFromSlug(formId);
    if (!form) return;
    rootStore.viewFormStore.setReviewForm(form);
    const matchReviewee = rootStore.revieweeStore.reviewees.find((reviewee) => {
      return reviewee.revieweeCode === form.revieweeCode;
    });
    if (!matchReviewee) return;
    rootStore.viewFormStore.setReviewee(matchReviewee);
    rootStore.viewFormStore.setQuestions(
      matchReviewee.revieweePositions,
      form.reviewType
    );
  });

  const form = rootStore.viewFormStore.reviewForm;

  if (!form) {
    return <NotFound></NotFound>;
  }

  const matchReviewee = rootStore.viewFormStore.reviewee;

  if (!matchReviewee) {
    return <NotFound></NotFound>;
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>
            {form.revieweeName} |{" "}
            <FormType formType={form.reviewType}></FormType>{" "}
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        <IonLoading
          isOpen={showLoading}
          onDidDismiss={() => setShowLoading(false)}
          message={"Đang gửi..."}
        />
        <DefinitionModal />

        <RevieweeIntro></RevieweeIntro>
        <FormQuestions></FormQuestions>

        <div style={{ width: "100%" }} className="ion-text-center">
          <IonButton
            onClick={async () => {
              setShowLoading(true);
              try {
                await rootStore.viewFormStore.submitReviewResponse(
                  form,
                  matchReviewee
                );
                history.push("/forms");
              } catch (e) {
                alert(e.message);
              } finally {
                setShowLoading(false);
              }
            }}
          >
            Gửi
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
});

export default ViewForm;
