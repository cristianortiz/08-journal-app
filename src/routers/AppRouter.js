import React from "react";
import { Routes, Route } from "react-router-dom";
import AuthRouter from "./AuthRouter";
import JournalScreen from "../components/journal/JournalScreen";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/auth/*" element={<AuthRouter />} />
        <Route path="/" element={<JournalScreen />} />
      </Routes>
    </>
  );
};

export default AppRouter;
