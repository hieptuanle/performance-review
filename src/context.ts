import React from "react";
import { RootStore } from "./models/stores";

export const AppContext = React.createContext<RootStore | undefined>(undefined);
