import { IonContent, IonRouterOutlet } from "@ionic/react";
import React, { useContext } from "react";
import { Redirect, Route } from "react-router";
import ListForms from "../pages/ListForms";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import ViewForm from "../pages/ViewForm";
import { AppContext } from "../context";
import { observer } from "mobx-react-lite";

const MainContent: React.FC = observer(() => {
  const rootStore = useContext(AppContext);
  if (!rootStore) return null;
  return (
    <IonContent className="ion-padding">
      <IonRouterOutlet id="main">
        {rootStore.authenticationStore.isAuthenticated ? (
          <>
            <Route exact path="/forms" component={ListForms}></Route>
            <Route exact path="/forms/:formId" component={ViewForm}></Route>
            <Route exact path="/">
              <Redirect to="/forms" />
            </Route>
          </>
        ) : (
          <>
            <Route exact path="/login" component={Login}></Route>
            <Route exact path="/">
              <Redirect to="/login" />
            </Route>
          </>
        )}
      </IonRouterOutlet>
    </IonContent>
  );
});

export default MainContent;
