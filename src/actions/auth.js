import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { googleAuthProvider } from "../firebase/firebaseConfig";
import { types } from "../types/types";

export const startLoginEmailPassword = (email, password) => {
  return (dispatch) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(async ({ user }) => {
        dispatch(login(user.uid, user.displayName));
      })
      .catch((err) => console.log(err));
  };
};

export const startRegisterWithEmailPasswordName = (
  email,
  password,
  firstname
) => {
  return (dispatch) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(async ({ user }) => {
        //update profile to set displayName or user photo in firebase
        await updateProfile(user, { displayName: firstname });
        dispatch(login(user.uid, user.displayName));
      })
      .catch((err) => console.log(err));
  };
};

export const startGoogleLogin = () => {
  return (dispatch) => {
    const auth = getAuth();
    signInWithPopup(auth, googleAuthProvider).then(({ user }) => {
      //console.log(user);
      //destructuring from google auth data through firebase auth
      dispatch(login(user.uid, user.displayName));
    });
  };
};
//action to update the auth state property
export const login = (uid, displayName) => {
  return {
    type: types.login,
    payload: {
      uid,
      displayName,
    },
  };
};
