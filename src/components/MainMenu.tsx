import React, { useState } from "react";
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
  IonToggle,
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
  const [switchedUserCode, setSwitchedUserCode] = useState(
    rootStore.authenticationStore.userCode
  );

  const user = rootStore.authenticationStore.user;
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
        value={switchedUserCode}
        onIonChange={(e) => {
          setSwitchedUserCode(e.detail.value);
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
        <IonSelectOption value={user ? user.code : ""}>
          {user?.code} - {user?.displayName}
        </IonSelectOption>
        {options.map((option) => (
          <IonSelectOption
            value={option.value}
            key={option.label}
            defaultValue={
              rootStore.authenticationStore.userCode +
              " - " +
              rootStore.authenticationStore.firstName
            }
          >
            {option.label}
          </IonSelectOption>
        ))}
      </IonSelect>
    </>
  );
});

const SellAlTogggle = observer(() => {
  const rootStore = useRootStore();
  return (
    <>
      <IonLabel>
        Xem tất cả <strong>(BOM feature)</strong>
      </IonLabel>
      <IonToggle
        checked={rootStore.authenticationStore.seeAll}
        onIonChange={(e) => {
          rootStore.authenticationStore.setSeeAll(e.detail.checked);
        }}
      ></IonToggle>
    </>
  );
});

const BomItem = observer<{
  children: React.ReactElement | string;
  [key: string]: any;
}>(({ children, ...rest }) => {
  const rootStore = useRootStore();
  return rootStore.authenticationStore.isRealBom ? (
    <IonItem {...rest}>{children}</IonItem>
  ) : null;
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
              <IonItem routerLink="/forms">Forms</IonItem>
              <IonItem routerLink="/responses">Responses</IonItem>
              {rootStore.listRevieweesStore.myReviewees.length > 0 ? (
                <IonItem routerLink="/reviewees">Reviewees</IonItem>
              ) : null}

              <BomItem>
                <ReviewerSelect></ReviewerSelect>
              </BomItem>
              <BomItem>
                <SellAlTogggle></SellAlTogggle>
              </BomItem>
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
