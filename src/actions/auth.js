import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { googleAuthProvider } from "../firebase/firebaseConfig";
import { types } from "../types/types";
import { finishLoading, startLoading } from "./ui";
import Swal from "sweetalert2";
import { noteLogout } from "./notes";

//login and register actions, all this are async, so this must be inside a return block
export const startLoginEmailPassword = (email, password) => {
  return (dispatch) => {
    //disable login button while login actions is in process
    dispatch(startLoading());
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(async ({ user }) => {
        dispatch(login(user.uid, user.displayName));
        //enable login button again
        dispatch(finishLoading());
      })
      .catch((err) => {
        console.log(err); //enable login button again
        dispatch(finishLoading());
        Swal.fire("Error", "Email or Password are wrong", "error");
      });
  };
};
//register new acount action
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

      .catch((err) => {
        console.log(err);
        Swal.fire("Error", "Email is already on use", "error");
      });
  };
};
//login with google button action
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
//action to update the auth state property after any of the above auth actions
export const login = (uid, displayName) => {
  return {
    type: types.login,
    payload: {
      uid,
      displayName,
    },
  };
};
//async action because firebase auth returns a promise
export const startLogout = () => {
  return async (dispatch) => {
    const auth = getAuth();
    //fiebase method to logout
    await signOut(auth);
    //after the firebase logout method is executed update the auth state
    dispatch(logout());
    //clean note store
    dispatch(noteLogout());
  };
};
//this action is exportable only for testing purpuses
export const logout = () => ({
  type: types.logout,
});
