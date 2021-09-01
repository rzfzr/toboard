import { createContext } from "react";
import { Entry, Project } from "./typings/my-types";

export const TogglContext = createContext({
    entries: [] as Array<Entry>,
    setEntries: {} as unknown,

    projects: [] as Array<Project>,
    setProjects: {} as unknown
});
