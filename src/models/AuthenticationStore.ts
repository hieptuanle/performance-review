import { makeObservable, observable, action, computed } from "mobx";
import { RootStore } from "./RootStore";
import store from "store";

interface IUser {
  _id: string;
  code: string;
  email: string;
  firstName: string;
  lastName: string;
  displayName: string;
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
      const userCode = store.get("userCode");
      const firstName = store.get("firstName");
      if (userCode && firstName) {
        this.switchUser(userCode, firstName);
      }
    }

    makeObservable(this, {
      user: observable,
      userCode: observable,
      firstName: observable,
      token: observable,
      loading: observable,
      isAuthenticated: computed,
      isRealBom: computed,
      isBom: computed,
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

  get isRealBom() {
    if (!this.user) return false;
    return ["F262", "F432", "F688", "M30", "D327"].includes(this.user.code);
  }

  get isBom() {
    if (!this.userCode) return false;
    return ["F262", "F432", "F688", "M30", "D327"].includes(this.userCode);
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
    store.set("userCode", code);
    store.set("firstName", name);
  }
  resetUser() {
    this.userCode = this.user ? this.user.code : "";
    this.firstName = this.user ? this.user.firstName : "";
    store.set("userCode", this.userCode);
    store.set("firstName", this.firstName);
  }

  async logout() {
    store.remove("credentials");
    this.user = null;
    this.token = "";
    this.expired = null;
  }
}
