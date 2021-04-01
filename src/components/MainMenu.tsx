import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import {
  IonContent,
  IonHeader,
  IonItem,
  IonList,
  IonMenu,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { AppContext } from "../context";
import { useHistory } from "react-router";
import useRootStore from "../hooks/useRootStore";

const MenuTitle: React.FC = observer(() => {
  const rootStore = useRootStore();
  return (
    <IonTitle>
      {rootStore.authenticationStore.isAuthenticated
        ? `Hello ${rootStore.authenticationStore.user?.firstName}!`
        : "Menu"}
    </IonTitle>
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
              {/* <IonItem href="/tab2">Log In</IonItem> */}
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
