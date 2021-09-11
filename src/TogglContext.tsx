import { createContext } from "react";
import { Entry, Goal, Project, Favorite } from "./typings/my-types";

export const TogglContext = createContext({
    entries: [] as Array<Entry>,
    setEntries: {} as unknown,

    projects: [] as Array<Project>,
    setProjects: {} as unknown,

    goals: [] as Array<Goal>,
    setGoals: {} as unknown,

    favorites: [] as Array<Favorite>,
    setFavorites: (a: any) => { },
});
