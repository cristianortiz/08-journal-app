import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  setDoc,
  getDocs,
  collection,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA9Flbe1eH-4xg-_xT3tohfG5nnJlPhjEU",
  authDomain: "react-journal-app-4b9a7.firebaseapp.com",
  projectId: "react-journal-app-4b9a7",
  storageBucket: "react-journal-app-4b9a7.appspot.com",
  messagingSenderId: "232388166690",
  appId: "1:232388166690:web:690ac5489d48d164bbf67b",
};
//testing app in firebase
const firebaseConfigTesting = {
  apiKey: "AIzaSyAnBavTfIKjNm5GhY2GAwzi-_Y2_SbWHpg",
  authDomain: "journalapptesting-2a915.firebaseapp.com",
  projectId: "journalapptesting-2a915",
  storageBucket: "journalapptesting-2a915.appspot.com",
  messagingSenderId: "968146106483",
  appId: "1:968146106483:web:90cfe0bd946883bdeb5206",
};

// Initialize Firebase testing or dev/production
if (process.env.NODE_ENV === "test") {
  initializeApp(firebaseConfigTesting);
} else {
  initializeApp(firebaseConfig);
}

const db = getFirestore();

const googleAuthProvider = new GoogleAuthProvider();
//db, doc, SetDoc,colletion, for firestore DB crud operations
export {
  db,
  googleAuthProvider,
  doc,
  setDoc,
  getDocs,
  collection,
  updateDoc,
  deleteDoc,
};
