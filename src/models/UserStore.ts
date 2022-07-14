import { makeObservable, observable } from "mobx";
import { RootStore } from "./RootStore";
import { users } from "../data/users";

export class UserStore {
  rootStore: RootStore;

  users = users;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;

    makeObservable(this, {
      users: observable,
    });
  }
}
