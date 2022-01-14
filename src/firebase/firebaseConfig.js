import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  setDoc,
  getDocs,
  collection,
  updateDoc,
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

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore();

const googleAuthProvider = new GoogleAuthProvider();
//db, doc, SetDoc,colletion, for firestore DB crud operations
export { db, googleAuthProvider, doc, setDoc, getDocs, collection, updateDoc };
