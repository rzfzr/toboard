import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";

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

export const add = async () => {
    try {
        const docRef = await addDoc(collection(db, "users"), {
            first: "Ada",
            last: "Lovelace",
            born: 1815
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}