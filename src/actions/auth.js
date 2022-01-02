import { getAuth, signInWithPopup } from "firebase/auth";
import { googleAuthProvider } from "../firebase/firebaseConfig";
import { types } from "../types/types";

export const startLoginEmailPassword = (email, password) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(login(123, "Pedro"));
    }, 3500);
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

export const login = (uid, displayName) => {
  return {
    type: types.login,
    payload: {
      uid,
      displayName,
    },
  };
};
