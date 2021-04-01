import { makeObservable, observable, action, computed } from "mobx";
import { RootStore } from "./RootStore";
import store from "store";

interface IUser {
  _id: string;
  code: string;
  email: string;
  firstName: string;
  lastName: string;
  cellphone: string;
  roles: string[];
}

interface Credentials {
  user: IUser;
  token: string;
  expired: string;
}

export class AuthenticationStore {
  rootStore: RootStore;

  user: IUser | null = null;
  userCode = "";
  firstName = "";
  token: string | null = null;
  expired: Date | null = null;

  loading = false;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;

    const credentials = store.get("credentials");
    if (credentials && credentials.user) {
      this.setCredentials(credentials);
    }

    makeObservable(this, {
      user: observable,
      userCode: observable,
      firstName: observable,
      token: observable,
      loading: observable,
      isAuthenticated: computed,
      authenticate: action,
      setCredentials: action,
      logout: action,
      switchUser: action,
      resetUser: action,
      rootStore: false,
    });
  }

  get isAuthenticated() {
    return !!this.token && !!this.user;
  }

  setCredentials({ user, token, expired }: Credentials) {
    this.user = user;
    this.userCode = user.code;
    this.user.firstName = user.firstName;
    this.token = token;
    this.expired = new Date(expired);
    store.set("credentials", { user, token, expired });
  }

  async authenticate(username: string, password: string) {
    const dataPromise = await fetch("https://work.4-handy.com/api_v2/login", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify({
        username,
        password,
      }),
    });
    if (dataPromise.status >= 400) {
      const data = await dataPromise.json();
      throw new Error(data.message);
    }
    const credentials: Credentials = await dataPromise.json();
    this.setCredentials(credentials);
  }

  switchUser(code: string, name: string) {
    this.userCode = code;
    this.firstName = name;
  }
  resetUser() {
    this.userCode = this.user ? this.user.code : "";
    this.firstName = this.user ? this.user.firstName : "";
  }

  async logout() {
    store.remove("credentials");
    this.user = null;
    this.token = "";
    this.expired = null;
  }
}
