import { createContext } from "react";
import { Entry, Goal, Project, Favorite } from "./typings/my-types";

export const TogglContext = createContext({
    currentEntry: {} as any,
    setCurrentEntry: (a: any) => { },

    entries: [] as Array<Entry>,
    setEntries: {} as unknown,

    projects: [] as Array<Project>,
    setProjects: {} as unknown,

    goals: [] as Array<Goal>,
    setGoals: (a: any) => { },

    favorites: [] as Array<Favorite>,
    setFavorites: (a: any) => { },
});
