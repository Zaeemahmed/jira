import React from "react";
import { Routes, Route } from "react-router-dom";
import { SignUp } from "./Pages/signup/SignUp";
import { UserMainPage } from "./Pages/home/UserMainPage";
import { ProtectedRoute } from "./components/ProtectedRoute";
const Main = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <UserMainPage />
          </ProtectedRoute>
        }
      />
      <Route path="/signup/*" element={<SignUp />} />
      <Route path="/test" element={<SignUp />} />
    </Routes>
  );
};
export default Main;
