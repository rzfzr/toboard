import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { doc, collection, addDoc, setDoc } from "firebase/firestore";
import { Favorite, Project } from "../typings/my-types";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API,
    authDomain: "toboard-e8982.firebaseapp.com",
    projectId: "toboard-e8982",
    storageBucket: "toboard-e8982.appspot.com",
    messagingSenderId: "1038554107141",
    appId: "1:1038554107141:web:e0f0e94ee798443df0fb6c"
};
initializeApp(firebaseConfig);
const db = getFirestore();

export const sendProjects = async (projects: Array<Project>) => {
    projects.forEach(async (project) => {
        try {
            if (!process.env.REACT_APP_TOGGL_API) return

            await setDoc(doc(db, "users", process.env.REACT_APP_TOGGL_API.toString(), "projects", project.id.toString()), {
                project
            });
            console.log("Project sent");

        } catch (e) {
            console.error("Error sending project: ", e);
        }
    });
}
export const sendFavorites = async (favorites: Array<Favorite>) => {
    favorites.forEach(async (favorite) => {
        try {
            if (!process.env.REACT_APP_TOGGL_API) return
            let ref = await addDoc(collection(db, "users", process.env.REACT_APP_TOGGL_API.toString(), "favorites"), {
                project: favorite
            });
            console.log("Favorite sent: ", ref.id);

        } catch (e) {
            console.error("Error sending favorite: ", e);
        }
    });
}