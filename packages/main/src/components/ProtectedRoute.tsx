import React, { PropsWithChildren, useContext } from "react";
import { Navigate, redirect } from "react-router-dom";
import { AuthContext } from "../context/Auth";

export const ProtectedRoute = ({ children }: PropsWithChildren) => {
  const auth = useContext(AuthContext);

  if (!auth?.initialized) {
    return <>Loading......</>;
  }

  if (!auth || !auth.token) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
};
