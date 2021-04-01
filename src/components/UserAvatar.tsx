import React from "react";
import { observer } from "mobx-react-lite";
import useRootStore from "../hooks/useRootStore";
import { IonAvatar } from "@ionic/react";
import md5 from "md5";

const UserAvatar = observer<{ revieweeCode: string }>(({ revieweeCode }) => {
  const rootStore = useRootStore();
  const user = rootStore.userStore.users.find((user) => {
    return revieweeCode === user.code;
  });
  if (!user) return null;
  return (
    <IonAvatar slot="start">
      <img
        src={"https://www.gravatar.com/avatar/" + md5(user.email)}
        alt={user.displayName + " avatar"}
      />
    </IonAvatar>
  );
});

export default UserAvatar;
