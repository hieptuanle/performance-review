import { makeAutoObservable } from "mobx";
import { RootStore } from "./RootStore";

export class TransportStore {
  rootStore: RootStore;
  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;

    makeAutoObservable(this, {
      rootStore: false,
    });
  }

  get serverURI() {
    if (process.env.NODE_ENV === "production") {
      return "/v1";
    } else {
      return "/v1";
    }
  }

  async sendRequest({
    data,
    method,
    path,
  }: {
    data?: Object;
    method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
    path: string;
  }) {
    const dataPromise = await fetch(this.serverURI + path, {
      method: method,
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(data),
    });
    if (dataPromise.status >= 400) {
      const data = await dataPromise.json();
      throw new Error(data.message);
    }
    return dataPromise.json();
  }

  async post(path: string, data: Object) {
    return this.sendRequest({ data, method: "POST", path });
  }
  async get(path: string) {
    return this.sendRequest({ method: "POST", path });
  }
  async put(path: string, data: Object) {
    return this.sendRequest({ method: "PUT", path });
  }
  async delete(path: string, data: Object) {
    return this.sendRequest({ method: "DELETE", path });
  }
}
