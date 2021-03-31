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

const MainMenu: React.FC = observer(() => {
  const rootStore = useContext(AppContext);
  const history = useHistory();
  if (!rootStore) return null;
  return (
    <IonMenu side="start" menuId="main" contentId="content" type="push">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Hello Hiệp!</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          {rootStore.authenticationStore.isAuthenticated ? (
            <>
              {" "}
              <IonItem routerLink="/forms">My Forms</IonItem>
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