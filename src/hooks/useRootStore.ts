import { useContext } from "react";
import { RootStore } from "../models/RootStore";
import { AppContext } from "../context";

export default function useRootStore() {
  return useContext(AppContext) as RootStore;
}
