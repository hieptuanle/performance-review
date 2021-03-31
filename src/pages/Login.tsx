import {
  IonAlert,
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonMenuButton,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useState, useContext } from "react";
import { useHistory } from "react-router";
import { personCircle } from "ionicons/icons";
import { AppContext } from "../context";

import "./Login.css";

const Login: React.FC = () => {
  const rootStore = useContext(AppContext);
  const history = useHistory();

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [iserror, setIserror] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  if (!rootStore) return null;

  const handleLogin = async () => {
    if (!username) {
      setMessage("Please enter a valid username");
      setIserror(true);
      return;
    }

    if (!password) {
      setMessage("Please enter your password");
      setIserror(true);
      return;
    }

    console.log({ username, password });

    await rootStore.authenticationStore
      .authenticate(username, password)
      .then((res) => {
        history.push("/forms");
      })
      .catch((e) => {
        setMessage(e.message);
        setIserror(true);
      });
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding ion-text-center">
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonAlert
                isOpen={iserror}
                onDidDismiss={() => setIserror(false)}
                cssClass="my-custom-class"
                header={"Error!"}
                message={message}
                buttons={["Dismiss"]}
              />
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonIcon style={{ fontSize: "70px" }} icon={personCircle} />
            </IonCol>
          </IonRow>
          <IonRow className="ion-justify-content-center">
            <IonCol style={{ maxWidth: 400 }}>
              <IonItem>
                <IonLabel position="floating">Username</IonLabel>
                <IonInput
                  type="text"
                  value={username}
                  onIonChange={(e) => setUsername(e.detail.value!)}
                ></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow className="ion-justify-content-center">
            <IonCol style={{ maxWidth: 400 }}>
              <IonItem>
                <IonLabel position="floating"> Password</IonLabel>
                <IonInput
                  type="password"
                  value={password}
                  onIonChange={(e) => setPassword(e.detail.value!)}
                ></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonButton onClick={handleLogin}>Login</IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Login;
