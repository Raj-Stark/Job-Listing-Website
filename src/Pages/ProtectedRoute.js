import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";

const ProtectedRoute = ({ children }) => {
  const { user } = useSelector((store) => store.user);

  if (!user) {
    return <Navigate to="/landing"></Navigate>;
  }
  return <div>{children}</div>;
};

export default ProtectedRoute;
