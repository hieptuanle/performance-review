import React from "react";
import { IonContent, IonRouterOutlet } from "@ionic/react";
import { Redirect, Route } from "react-router";
import ListFormsPage from "../pages/ListFormsPage";
import Login from "../pages/Login";
import ViewForm from "../pages/ViewForm";
import { observer } from "mobx-react-lite";
import useRootStore from "../hooks/useRootStore";
import ListResponsesPage from "../pages/ListResponsesPage";
import ViewResponsePage from "../pages/ViewResponsePage";

const MainContent: React.FC = observer(() => {
  const rootStore = useRootStore();
  return (
    <IonContent className="ion-padding">
      <IonRouterOutlet id="main">
        {rootStore.authenticationStore.isAuthenticated ? (
          <>
            <Route exact path="/forms" component={ListFormsPage}></Route>
            <Route
              exact
              path="/responses"
              component={ListResponsesPage}
            ></Route>
            <Route exact path="/forms/:formId" component={ViewForm}></Route>
            <Route
              exact
              path="/responses/:responseId"
              component={ViewResponsePage}
            ></Route>
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
