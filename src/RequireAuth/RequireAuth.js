import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useFirebaseHook from "../hooks/useFirebaseHook/useFirebaseHook";

const RequireAuth = ({ children }) => {
  const { user } = useFirebaseHook();

  const location = useLocation();
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

export default RequireAuth;
