import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth"; 

const firebaseConfig = {
  apiKey: "yourapikey",
  authDomain: "yourproject.firebaseapp.com",
  projectId: "yourprojectID",
  storageBucket: "yourproject.appspot.com",
  messagingSenderId: "yourmessagingID",
  appId: "yourappID",
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app); 

export { app, firestore, storage, auth, }; 
export const db = getFirestore(app);