import React from "react";
import { RootStore } from "./models/RootStore";

export const AppContext = React.createContext<RootStore | undefined>(undefined);
