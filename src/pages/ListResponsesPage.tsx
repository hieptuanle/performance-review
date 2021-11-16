import React, { useEffect } from "react";
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { observer } from "mobx-react-lite";
import useRootStore from "../hooks/useRootStore";
import UserAvatar from "../components/UserAvatar";
import RevieweeTitle from "../components/RevieweePosition";
import { format } from "date-fns";

const ListResponsesPage = observer(() => {
  const rootStore = useRootStore();
  const listResponsesStore = rootStore.listResponsesStore;

  useEffect(() => {
    rootStore.listResponsesStore.findMyResponses();
  }, [rootStore]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>Responses</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
          {listResponsesStore.responses.map((response) => (
            <IonItem
              key={response._id}
              routerLink={"/responses/" + response._id}
            >
              <UserAvatar revieweeCode={response.revieweeCode}></UserAvatar>
              <IonLabel>
                <h2>{response.revieweeName}</h2>
                <h3>
                  <RevieweeTitle
                    revieweeCode={response.revieweeCode}
                  ></RevieweeTitle>
                </h3>
                <p>Người/bộ phận đánh giá: {response.reviewerName}</p>
                <p>
                  Đã gửi vào lúc:{" "}
                  {response.createdAt
                    ? format(
                        new Date(response.createdAt),
                        "yyyy-MM-dd HH:mm:ss"
                      )
                    : null}
                </p>
              </IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
});

export default ListResponsesPage;
