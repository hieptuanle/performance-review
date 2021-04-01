import React from "react";
import { observer } from "mobx-react-lite";
import {
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonSelect,
  IonSelectOption,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useHistory } from "react-router";
import useRootStore from "../hooks/useRootStore";
import { uniqBy } from "lodash";

const MenuTitle: React.FC = observer(() => {
  const rootStore = useRootStore();
  return (
    <IonTitle>
      {rootStore.authenticationStore.isAuthenticated
        ? `Hello ${rootStore.authenticationStore.firstName}!`
        : "Menu"}
    </IonTitle>
  );
});

const ReviewerSelect = observer(() => {
  const rootStore = useRootStore();

  const reviewers = uniqBy(
    rootStore.individualFormStore.forms.map((d) => {
      return {
        reviewerCode: d.reviewerCode,
        reviewerName: d.reviewerName,
      };
    }),
    "reviewerCode"
  );

  const options = reviewers.map((d) => {
    return {
      label: d.reviewerCode + " - " + d.reviewerName,
      value: d.reviewerCode,
    };
  });
  return (
    <>
      <IonLabel position="stacked">
        Switch User <strong>(Admin Feature)</strong>
      </IonLabel>
      <IonSelect
        interface="popover"
        defaultValue=""
        onIonChange={(e) => {
          const matchReviewer = reviewers.find((reviewer) => {
            return reviewer.reviewerCode === e.detail.value || "";
          });
          if (matchReviewer) {
            rootStore.authenticationStore.switchUser(
              matchReviewer.reviewerCode,
              matchReviewer.reviewerName
            );
          } else {
            rootStore.authenticationStore.resetUser();
          }
        }}
      >
        {options.map((option) => (
          <IonSelectOption value={option.value} key={option.label}>
            {option.label}
          </IonSelectOption>
        ))}
        <IonSelectOption value="">Reset</IonSelectOption>
      </IonSelect>
    </>
  );
});

const MainMenu: React.FC = observer(() => {
  const rootStore = useRootStore();
  const history = useHistory();
  return (
    <IonMenu side="start" menuId="main" contentId="content" type="push">
      <IonHeader>
        <IonToolbar>
          <MenuTitle />
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          {rootStore.authenticationStore.isAuthenticated ? (
            <>
              {" "}
              <IonItem routerLink="/forms">New Form</IonItem>
              <IonItem routerLink="/forms">Submitted Forms</IonItem>
              {rootStore.authenticationStore.user &&
              rootStore.authenticationStore.user.code &&
              ["F266", "F432", "F688", "M30", "D327"].includes(
                rootStore.authenticationStore.user.code
              ) ? (
                <IonItem>
                  <ReviewerSelect></ReviewerSelect>
                </IonItem>
              ) : null}
              <IonItem
                onClick={() => {
                  rootStore.authenticationStore.logout();
                  history.push("/login");
                }}
              >
                Log Out
              </IonItem>
            </>
          ) : (
            <IonItem routerLink="/login">Login</IonItem>
          )}
        </IonList>
      </IonContent>
    </IonMenu>
  );
});

export default MainMenu;
