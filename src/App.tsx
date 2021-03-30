import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonPage,
  IonSplitPane,
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonButton,
  IonMenuButton,
  IonButtons,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { ellipse, square, triangle } from "ionicons/icons";
import ListForms from "./pages/ListForms";
import ViewForm from "./pages/ViewForm";
import Tab2 from "./pages/Tab2";
import Tab3 from "./pages/Tab3";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import React from "react";

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonSplitPane contentId="content">
        <IonMenu side="start" menuId="main" contentId="content" type="push">
          <IonHeader>
            <IonToolbar>
              <IonTitle>Hello Hiệp!</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            <IonList>
              <IonItem routerLink="/forms">My Forms</IonItem>
              {/* <IonItem href="/tab2">Log In</IonItem> */}
              <IonItem routerLink="/tab3">Log Out</IonItem>
            </IonList>
          </IonContent>
        </IonMenu>
        <IonPage id="content">
          <IonContent className="ion-padding">
            <IonRouterOutlet id="main">
              <Route exact path="/forms">
                <ListForms />
              </Route>
              <Route exact path="/forms/:formId" component={ViewForm}></Route>
              <Route exact path="/tab2">
                <Tab2 />
              </Route>
              <Route path="/tab3">
                <Tab3 />
              </Route>
              <Route exact path="/">
                <Redirect to="/forms" />
              </Route>
            </IonRouterOutlet>
          </IonContent>
        </IonPage>
      </IonSplitPane>
    </IonReactRouter>
  </IonApp>
);

export default App;
