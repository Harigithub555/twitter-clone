// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyB4-DOP1IHgoepMCrTMhcrtWnnO9oobCDk",
    authDomain: "twitter-clone-c7d9f.firebaseapp.com",
    projectId: "twitter-clone-c7d9f",
    storageBucket: "twitter-clone-c7d9f.appspot.com",
    messagingSenderId: "235743833548",
    appId: "1:235743833548:web:71aea3816750b6de1e0169"
  };
  

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };