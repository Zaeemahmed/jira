import React from "react";
import { Routes, Route } from "react-router-dom";
import { SignUp } from "./Pages/signup/SignUp";
import { UserMainPage } from "./Pages/home/UserMainPage";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { SignIn } from "./Pages/signin/Signin";
import { Site } from "./Pages/site/Site";
import { CreateFirstProject } from "./Pages/createproject/CreateFirstProject";

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
      <Route
        path="/createFirstProject"
        element={
          <ProtectedRoute>
            <CreateFirstProject />
          </ProtectedRoute>
        }
      />
      <Route path="/signup/*" element={<SignUp />} />
      <Route path="/login" element={<SignIn />} />
      <Route
        path="/createSite"
        element={
          <ProtectedRoute>
            <Site />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};
export default Main;
