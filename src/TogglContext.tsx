import { createContext } from "react";
import { Entry } from "./typings/my-types";

export const TogglContext = createContext({ entries: [] as Array<Entry>, setEntries: {} as unknown });
