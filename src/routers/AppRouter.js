import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import AuthRouter from "./AuthRouter";
import JournalScreen from "../components/journal/JournalScreen";
import { getAuth, onAuthStateChanged } from "@firebase/auth";
import { useDispatch } from "react-redux";
import { login } from "../actions/auth";
import PublicRoutes from "./PublicRoutes";
import PrivateRoutes from "./PrivateRoutes";

const AppRouter = () => {
  //local useState to protect private routes of unauthorized access
  const [isAuthenticated, setIsAuthenticated] = useState();

  const dispatch = useDispatch();
  //effect to call a observable firebase method to query the logged user data, similar to sessions
  useEffect(() => {
    const auth = getAuth();
    //observable of user authentication
    onAuthStateChanged(auth, (user) => {
      //if user exists and have something in uid property
      if (user?.uid) {
        //login action to set uid and username in auth state property
        dispatch(login(user.uid, user.displayName));
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
      //console.log(user);
    });
    //even the "dispatch" dependency this effect executes only once
  }, [dispatch]);
  return (
    <>
      <Routes>
        <Route
          path="/auth/*"
          element={
            <PublicRoutes isAuthenticated={isAuthenticated}>
              <AuthRouter />
            </PublicRoutes>
          }
        />
        <Route
          path="/"
          element={
            <PrivateRoutes isAuthenticated={isAuthenticated}>
              <JournalScreen />
            </PrivateRoutes>
          }
        />
      </Routes>
    </>
  );
};

export default AppRouter;
